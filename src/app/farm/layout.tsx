import type { Metadata } from "next";
import localFont from "next/font/local";
import { Livvic } from "next/font/google";
import "./global.module.scss";

const livvic = Livvic({
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: "400",
  display: "swap",
  variable: "--font-livvic",
});

const centuryGothic = localFont({
  src: [
    {
      path: "./fonts/Century Gothic.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/GOTHICB.TTF",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/GOTHICI.TTF",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/GOTHICBI.TTF",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-centgo",
});

export const metadata: Metadata = {
  title: "Farm Website",
};

export default function FarmLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className={`${livvic.variable} ${centuryGothic.variable}`}>
      {children}
    </body>
  );
}
