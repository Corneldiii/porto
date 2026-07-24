import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/context/LangContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aldian Octavius Soesanto | Portfolio",
  description:
    "Fresh Graduate of Bachelor in Informatics degree. Fullstack Developer, System Analyst, and Vibe Coder. Explore my projects and get in touch.",
  manifest: "/manifest.json",
  openGraph: {
    title: "Aldian Octavius Soesanto | Portfolio",
    description:
      "Fresh Graduate of Bachelor in Informatics degree. Fullstack Developer, System Analyst, and Vibe Coder.",
    type: "website",
    locale: "en_US",
    siteName: "Aldian Portfolio",
  },
  other: {
    "theme-color": "#FF4A11",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "AldianPorto",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/icon-512.svg" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/sw.js');
                });
              }
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
