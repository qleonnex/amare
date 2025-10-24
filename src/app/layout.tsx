import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "swiper/css";

import "@/assets/global.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["cyrillic", "latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["cyrillic", "latin"],
});

export const metadata: Metadata = {
  title: "Amare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning={true} data-lt-installed="true">
      <body
        className={`${playfairDisplay.variable} ${manrope.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
