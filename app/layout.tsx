
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Website",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} object-contain bg-cover text-slate-400 h-screen
    snap-y snap-mandatory overflow-scroll z-0 bg-gradient-to-r from-gray-400 to-gray-100`}>
        {children}
      </body>
    </html>
  );
}
