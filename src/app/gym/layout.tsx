import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gym Website",
};

export default function GymLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <body>{children}</body>;
}
