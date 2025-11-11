import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'amimono-counter | あみものカウンター',
  description: "編み物の段・目をカウントできるシンプルなカウンターアプリ",
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: "amimono-counter",
    description: "編み物の段・目をカウントできるシンプルなカウンターアプリ",
    url: "https://torchiba-amimono-counter.netlify.app",
    siteName: "amimono-counter",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
