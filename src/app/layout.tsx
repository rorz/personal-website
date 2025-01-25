import type { Metadata } from "next";
import { cx } from "class-variance-authority";
import { Manrope, Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
});

const geist = Geist({
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rory McMeekin | rorz.io",
  description: "Personal website of Rory McMeekin.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cx(
          manrope.className,
          geist.className,
          jetBrainsMono.className,
          "antialiased"
        )}
      >
        {children}
      </body>
    </html>
  );
}
