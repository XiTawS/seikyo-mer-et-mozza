import type { Metadata } from "next";
import "./globals.css";
import SessionProvider from "@/components/cms/SessionProvider";
import CMSProvider from "@/components/cms/CMSProvider";
import AdminBar from "@/components/cms/AdminBar";

export const metadata: Metadata = {
  title: "Mer et Mozza — Fruits de mer & Pizzas artisanales à Pizançon",
  description:
    "Food truck de qualité à Chatuzange-le-Goubet. Plateaux fruits de mer frais, pizzas artisanales, à déguster sur place ou à emporter.",
  keywords: [
    "fruits de mer",
    "pizzas artisanales",
    "food truck",
    "Pizançon",
    "Chatuzange-le-Goubet",
    "plateaux fruits de mer",
    "pizza à emporter",
    "Mer et Mozza",
  ],
  openGraph: {
    title: "Mer et Mozza — Fruits de mer & Pizzas artisanales à Pizançon",
    description:
      "Food truck de qualité à Chatuzange-le-Goubet. Plateaux fruits de mer frais, pizzas artisanales, à déguster sur place ou à emporter.",
    url: "https://mer-et-mozza.seikyo.fr",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <SessionProvider>
          <CMSProvider>
            {children}
            <AdminBar />
          </CMSProvider>
        </SessionProvider>
      </body>
    </html>
  );
}