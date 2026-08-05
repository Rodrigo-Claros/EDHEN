import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

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

1
        <main>{children}</main>
        {/* Aquí luego irá tu Footer */}
      </body>
    </html>
  );
}