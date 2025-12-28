import { useEffect, useState, useRef, useCallback } from "react";

export interface NowTunedState {
  metadata: {
    title: string;
    artist: string;
    album: string;
    artwork: readonly MediaImage[];
  };
  playbackState: MediaSessionPlaybackState;
}

const WS_URL = process.env.NEXT_PUBLIC_NOW_TUNED_WS_URL!;
const RECONNECT_DELAY = 3000; // 3 seconds
const MAX_RECONNECT_ATTEMPTS = 5;
const isDev = process.env.NODE_ENV === "development";

const debugLog = (...args: any[]) => {
  if (isDev) console.log(...args);
};

export const useNowTuned = () => {
  const [songDetails, setSongDetails] = useState<NowTunedState | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const wsRef = useRef<WebSocket | null>(null);
  const reconnectAttemptsRef = useRef(0);
  const reconnectTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const connect = useCallback(() => {
    if (wsRef.current?.readyState === WebSocket.OPEN) {
      return;
    }

    try {
      const ws = new WebSocket(WS_URL);

      ws.onopen = () => {
        debugLog("✅ Connected to Now Tuned WebSocket:", WS_URL);
        setIsConnected(true);
        reconnectAttemptsRef.current = 0;
      };

      ws.onmessage = (event) => {
        try {
          debugLog("Received WebSocket message:", event.data);
          const data = JSON.parse(event.data);
          debugLog("Parsed data:", data);
          setSongDetails(data);
        } catch (error) {
          console.error(
            "Failed to parse WebSocket message:",
            error,
            event.data
          );
        }
      };

      ws.onerror = (error) => {
        console.error("❌ WebSocket error:", error);
        debugLog("WebSocket readyState:", ws.readyState);
      };

      ws.onclose = () => {
        debugLog("Disconnected from Now Tuned WebSocket");
        setIsConnected(false);
        wsRef.current = null;

        // Attempt to reconnect
        if (reconnectAttemptsRef.current < MAX_RECONNECT_ATTEMPTS) {
          reconnectAttemptsRef.current += 1;
          reconnectTimeoutRef.current = setTimeout(() => {
            debugLog(`Reconnecting... Attempt ${reconnectAttemptsRef.current}`);
            connect();
          }, RECONNECT_DELAY);
        }
      };

      wsRef.current = ws;
    } catch (error) {
      console.error("Failed to create WebSocket connection:", error);
    }
  }, []);

  useEffect(() => {
    connect();

    return () => {
      if (reconnectTimeoutRef.current) {
        clearTimeout(reconnectTimeoutRef.current);
      }
      if (wsRef.current) {
        wsRef.current.close();
      }
    };
  }, [connect]);

  return { songDetails, isConnected };
};
