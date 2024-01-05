import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "@/components/nav/navbar";
import { cn } from "@/lib/utils";
import "./globals.css";
import Providers from "@/components/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Digital Hippo",
  description: "Your marketplace for high-quality digital assets.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en">
    <body
      className={cn("relative h-full font-sans antialiased", inter.className)}
    >
      <main className="relative flex min-h-screen flex-col">
        <Providers>
          <Navbar />
          <div className="flex-1 flex-grow">{children}</div>
        </Providers>
      </main>
    </body>
  </html>
);

export default RootLayout;
