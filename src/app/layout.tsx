import type { Metadata } from "next";
import { cx } from "class-variance-authority";
import { Manrope, Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { NavBar } from "./_ui/navbar";

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
        <div className="size-full flex justify-center font-body">
          <div className="grid grid-cols-10 gap-4 max-w-[800px] w-full">
            <div className="flex flex-col col-span-10 lg:col-span-2 size-full bg-red-100">
              <NavBar />
            </div>
            <div className="col-span-10 lg:col-span-8 size-full bg-blue-100 min-h-[50vh]">
              {children}
            </div>
            <div className="w-full bg-amber-100 col-span-10 text-sm text-gray-600">
              © {new Date().getFullYear()} Rory McMeekin
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
