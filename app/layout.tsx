import type React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

/* =========================
   SITE METADATA + FAVICON
========================= */
export const metadata: Metadata = {
  title: "StartupVision - Indian Business Consulting",
  description: "Growth, Guidance & Promise to the Indian Business Ecosystem",
  applicationName: "StartupVision",
  generator: "Next.js",

  icons: {
    icon: [
      { url: "branding/favicon.ico" }, // main favicon
      { url: "branding/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "branding/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  themeColor: "#2563eb",
};

/* =========================
   ROOT LAYOUT
========================= */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
