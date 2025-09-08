import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/src/app/globals.css";
import Header from "@/src/components/header/Header";

export const metadata: Metadata = {
  title: "UNL Coding Club",
  description: "Official UNL Coding Club",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`--font-geist-sans --font-geist-mono antialiased bg-bg-primary`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
