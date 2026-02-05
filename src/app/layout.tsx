import type { Metadata } from "next";
import { DM_Serif_Display, IBM_Plex_Sans, Space_Grotesk } from "next/font/google";

import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Toaster } from "sonner";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-brand",
  weight: ["400"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://zercon.systems"),
  title: {
    default: "Zercon — Built from Zero Context",
    template: "%s — Zercon",
  },
  description:
    "Zercon (Zero Context Systems) строит системы без предположений. Инженерный подход, понятные критерии, проверяемые модели.",
  openGraph: {
    title: "Zercon — Built from Zero Context",
    description:
      "Системы без предположений. Инженерный подход к моделям, продуктам и стратегии.",
    type: "website",
    url: "https://zercon.systems",
    siteName: "Zercon",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zercon — Built from Zero Context",
    description:
      "Системы без предположений. Инженерный подход к моделям, продуктам и стратегии.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={`${plexSans.variable} ${spaceGrotesk.variable} ${dmSerif.variable} font-sans`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen bg-grid grain">
            <div className="glow">
              <SiteHeader />
              <main>{children}</main>
              <SiteFooter />
            </div>
          </div>
          <Toaster position="top-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
