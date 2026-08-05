import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "next/link";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "Mi Tienda",
    template: "%s | Mi Tienda",
  },
  description: "Tu tienda en línea de confianza",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        
        <nav className="bg-gray-900 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <a href="/shop" className="text-lg font-bold">
              Zapatos EDHEN
            </a>
          </div>
        </nav>
        <main>{children}</main>
        {/* Aquí luego irá tu Footer */}
      </body>
    </html>
  );
}