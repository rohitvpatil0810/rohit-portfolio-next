"use client";

import { useNowTuned } from "@/hooks/useNowTuned";
import { IconHeadphones, IconHeadphonesOff } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  variant?: "compact" | "full";
};

export default function NowTunedWidget({
  className,
  variant = "compact",
}: Props) {
  const { songDetails, isConnected } = useNowTuned();

  if (!songDetails && variant === "compact") {
    return (
      <div
        className={cn(
          "flex items-center gap-2 px-3 py-2 rounded-lg bg-charcoal-black bg-opacity-80 border border-gray-700",
          className
        )}
      >
        <IconHeadphonesOff className="w-5 h-5 text-gray-500" />
        <span className="text-xs text-gray-500">Offline</span>
      </div>
    );
  }

  if (!songDetails && variant === "full") {
    return (
      <div
        className={cn(
          "bg-charcoal-black bg-opacity-80 backdrop-blur-sm border border-gray-700 rounded-lg p-4 w-64",
          className
        )}
      >
        <div className="flex flex-col items-center justify-center gap-3">
          <IconHeadphonesOff className="w-16 h-16 text-gray-600" />
          <p className="text-sm font-semibold text-gray-400 text-center">
            💤 Now Tuned - Offline
          </p>
        </div>
      </div>
    );
  }

  if (!songDetails) {
    return null;
  }

  const isPaused = songDetails.playbackState === "paused";
  const isPlaying = songDetails.playbackState === "playing";

  if (variant === "compact") {
    return (
      <div
        className={cn(
          "flex items-center gap-2 px-3 py-2 rounded-lg bg-light-green bg-opacity-10 border border-light-green border-opacity-30 transition-all duration-300",
          isPaused && "grayscale opacity-70",
          className
        )}
      >
        <div className="relative">
          <img
            className="w-5 h-5 object-contain"
            src={isPlaying ? "/headphones.gif" : "/still-headphones.png"}
            alt={isPlaying ? "Playing" : "Paused"}
          />
        </div>
        <div className="flex flex-col min-w-0">
          <p
            className={cn(
              "text-xs font-semibold truncate",
              isPlaying ? "text-light-green" : "text-gray-400"
            )}
          >
            {isPlaying ? "🎶 Vibes on!" : "💤 Paused"}
          </p>
          <p className="text-xs text-gray-400 truncate">
            {songDetails.metadata.title}
          </p>
        </div>
      </div>
    );
  }

  // Full variant
  return (
    <div
      className={cn(
        "bg-charcoal-black bg-opacity-80 backdrop-blur-sm border border-light-green border-opacity-30 rounded-lg p-4 w-64 transition-all duration-300",
        isPaused && "grayscale opacity-80",
        className
      )}
    >
      <div className="bg-light-green bg-opacity-5 p-3 rounded-md">
        <p
          className={cn(
            "font-semibold py-2 text-xs mb-2",
            isPaused ? "text-gray-400" : "text-light-green"
          )}
        >
          {isPaused ? "💤 Offline" : "🎶 Vibes on!"}
        </p>

        {/* Album Artwork */}
        <div className="h-48 w-48 rounded-md overflow-hidden mb-3">
          {songDetails.metadata.artwork?.[
            songDetails.metadata.artwork.length - 1
          ]?.src ? (
            <img
              className={cn(
                "w-full h-full object-cover transition-all duration-300",
                isPaused && "grayscale"
              )}
              src={
                songDetails.metadata.artwork[
                  songDetails.metadata.artwork.length - 1
                ].src
              }
              alt={`${songDetails.metadata.album} Album Art`}
            />
          ) : (
            <div className="w-full h-full bg-gray-800 flex items-center justify-center">
              <IconHeadphones className="w-16 h-16 text-gray-600" />
            </div>
          )}
        </div>

        {/* Song Info */}
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0">
            <img
              className="h-12 w-12"
              src={isPlaying ? "/headphones.gif" : "/still-headphones.png"}
              alt={isPlaying ? "Playing" : "Paused"}
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3
              className={cn(
                "text-sm font-bold mb-1 line-clamp-2",
                isPaused ? "text-gray-400" : "text-white"
              )}
            >
              {songDetails.metadata.title}
            </h3>
            <p className="text-xs text-gray-400 truncate mb-1">
              {songDetails.metadata.artist}
            </p>
            <p className="text-xs text-gray-500 truncate">
              {songDetails.metadata.album}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
