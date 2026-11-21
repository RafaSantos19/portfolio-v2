import localFont from "next/font/local";

export const sans = localFont({
  src: "./fonts/schibsted-grotesk-latin.woff2",
  variable: "--font-schibsted",
  weight: "400 700",
  display: "swap",
  fallback: ["Segoe UI", "Arial", "sans-serif"],
});

export const mono = localFont({
  src: "./fonts/jetbrains-mono-latin.woff2",
  variable: "--font-jetbrains",
  weight: "400 500",
  display: "swap",
  fallback: ["Consolas", "monospace"],
});
