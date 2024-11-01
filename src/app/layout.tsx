import type { Metadata } from "next";
import { Anton, Roboto, Livvic, Open_Sans } from "next/font/google";
import "./globals.css";

const livvic = Livvic({
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: "400",
  display: "swap",
  variable: "--font-livvic",
});

const anton = Anton({
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: "400",
  display: "swap",
  variable: "--font-anton",
});

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

const open_sans = Open_Sans({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open_sans",
});

export const metadata: Metadata = {
  title: "Landing Pages Folio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${roboto.variable} ${livvic.variable} ${open_sans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
