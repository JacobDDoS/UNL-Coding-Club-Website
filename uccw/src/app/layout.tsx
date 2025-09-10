import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/src/app/globals.css";
import Header from "@/src/components/header/Header";
import Blocks from "@/src/components/page/Blocks";

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
    <html lang="en" className="min-h-full">
      <body
        className="--font-geist-sans --font-geist-mono antialiased bg-bg-primary min-h-full h-dvh bg-linear-to-b from-[#1E1E1E]/[.1] to-[#2E2E2E]"
      >
        <Header />
        <Blocks/>
        {children}
      </body>
    </html>
  );
}
