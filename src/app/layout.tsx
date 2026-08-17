import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "@/styles.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Kanjikada Dubai | കഞ്ഞിക്കട ദുബായ് - Authentic Kerala Kanji & Nadan Food",
    template: "%s | Kanjikada Dubai",
  },
  description:
    "Authentic Kerala Kanji, Kappa Meen Curry, Nadan Beef Roast, and traditional homestyle meals at Kanjikada Dubai (കഞ്ഞിക്കട ദുബായ്), 31 2B St, Al Karama, Dubai.",
  keywords: [
    "Kanjikada Dubai",
    "കഞ്ഞിക്കട ദുബായ്",
    "Kerala Kanji Dubai",
    "Matta Kanji Karama",
    "Kappa Meen Curry Dubai",
    "Nadan Beef Roast Dubai",
    "Pazhamkanji Dubai",
    "Kerala Restaurant Karama",
  ],
  authors: [{ name: "Kanjikada Dubai" }],
  openGraph: {
    title: "Kanjikada Dubai | കഞ്ഞിക്കട ദുബായ് - Authentic Kerala Kanji & Nadan Food",
    description:
      "Steaming hot Matta Kanji with payar, asthram, spicy pickles, Kappa & Kottayam Fish Curry, and Nadan Beef at 31 2B St, Al Karama, Dubai.",
    type: "website",
    locale: "en_AE",
    siteName: "Kanjikada Dubai",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kanjikada Dubai (കഞ്ഞിക്കട) - Authentic Kerala Kanji in Dubai",
    description:
      "Homely Kerala Kanji, Kappa Meen Curry, and authentic nadan dishes in Al Karama, Dubai.",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }, { url: "/favicon.ico" }],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#2D5A43",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
        {children}
      </body>
    </html>
  );
}
