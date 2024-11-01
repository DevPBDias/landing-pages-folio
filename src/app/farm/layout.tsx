import type { Metadata } from "next";
import "./farm.css";

export const metadata: Metadata = {
  title: "Farm Website",
};

export default function FarmLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <body>{children}</body>;
}
