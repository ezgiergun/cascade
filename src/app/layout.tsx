import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuroraBackgroundDemo } from "./components/Aurora";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Helius Explorer",
  description: "explore states",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <AuroraBackgroundDemo/>
        
        {children}</body>
    </html>
  );
}
