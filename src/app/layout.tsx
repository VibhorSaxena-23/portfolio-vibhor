import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Background from "@/components/Background";
import CustomCursor from "@/components/cursor";
import { CursorProvider } from "../context/cursorcontext";

export const metadata: Metadata = {
  title: "Vibhor Saxena's Portfolio",
  description: "Portfolio of Vibhor Saxena",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative text-gray-900 overflow-x-hidden">
        <CursorProvider>
          {/* These components are CLIENT components
              and will self-disable on mobile */}
          <Background />
          <CustomCursor />

          <Navbar />

          <main className="pt-20 relative z-10">
            {children}
          </main>
        </CursorProvider>
      </body>
    </html>
  );
}
