import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default async function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 28,
          fontWeight: 900,
          backgroundColor: "#191919",
          color: "#ACF39D",
          width: "100%",
          height: "100%",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 8,
        }}
      >
        R
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}
