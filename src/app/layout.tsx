import type { Metadata } from "next";
import { cx } from "class-variance-authority";
import Script from "next/script";
import { Manrope, Geist, JetBrains_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
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
      <head>
        <Script
          src="https://cdn.jsdelivr.net/npm/kenobi-js/browser/dist.min.js"
          strategy="beforeInteractive"
        />
        <Script id="kenobi-init" strategy="beforeInteractive">
          {`
            window.kenobi = new KenobiLib.Kenobi({
              publicKey: "pk_live_1Ou-dwWHduFNzM1HaPODgv5_LXoOuEaG",
              debug: false,
            });
          `}
        </Script>
      </head>
      <body
        className={cx(
          manrope.className,
          geist.className,
          jetBrainsMono.className,
          "antialiased"
        )}
      >
        <div className="w-full font-body text-gray-950 lg:pt-20 lg:p-0 p-4">
          <div className="grid grid-cols-10 gap-x-10 gap-y-4 max-w-[1000px] w-full">
            <div className="flex flex-col col-span-10 lg:col-span-2 size-full">
              <NavBar />
            </div>
            <div className="col-span-10 lg:col-span-6 size-full min-h-[50vh]">
              {children}
            </div>
            <div className="w-full col text-sm text-gray-600 flex gap-x-2 lg:col-span-6 col-span-10 lg:col-start-3 items-baseline mt-8 pt-4 pb-20 border-t border-gray-200">
              <span className="mr-auto">
                © {new Date().getFullYear()} Rory McMeekin
              </span>
              <a href="//github.com/rorz" target="_blank">
                <span>GitHub</span>
              </a>
              <a href="//linkedin.com/in/rorz" target="_blank">
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
