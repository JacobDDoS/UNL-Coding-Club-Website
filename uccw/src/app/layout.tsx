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
    <html lang="en" className="min-h-screen">
      <body
        className="--font-geist-sans --font-geist-mono antialiased bg-bg-primary min-h-screen bg-linear-to-b from-[#1E1E1E]/[.1] to-[#2E2E2E]"
      >
        <Header />
        <div className="select-none min-h-[calc(90vh-50px)] w-[calc(100%-50px)] flex justify-center rounded-2xl m-auto relative shadow-[inset_0_0_15px_rgba(0,0,0,0.5)] shadow-white">
             <Blocks />
            {children}
        </div>
        
      </body>
    </html>
  );
}
