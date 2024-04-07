"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/toaster";


const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <SessionProvider>
      <html lang="en" className="">
        <body className={inter.className}>
          <div className="min-h-screen">
            {children}
          </div>
        </body>
        <Toaster />
      </html>
    </SessionProvider>
  );
}
