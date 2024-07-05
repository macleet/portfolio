import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mac Lee • Software Developer",
  description: "Portfolio website created by Mac Lee.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-slate-200 scroll-smooth scroll-pt-10 md:scroll-pt-20 2xl:scroll-pt-24">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
