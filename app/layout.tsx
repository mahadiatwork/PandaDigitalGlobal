import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const poppins = Poppins({ 
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-heading" 
});

export const metadata: Metadata = {
  title: "Panda Digital - Global Marketing Solutions",
  description: "Helping Chinese companies succeed in the global market through social media marketing, web development, sales generation, and AI services.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
