import type { Metadata, Viewport } from "next";
import { Lexend_Deca } from "next/font/google";
import "../styles/globals.css";
import GoogleAnalytics from "@/components/google-analytics";
import { metaData } from "@/lib/meta-data";
const inter = Lexend_Deca({ subsets: ["latin"] });

export const metadata = metaData;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#ACF39D",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body
        className={`${inter.className} bg-charcoal-black px-4 sm:px-6 md:px-8 lg:px-10 xl:px-20 2xl:px-40 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
