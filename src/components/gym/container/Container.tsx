import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return <main className="w-full px-12">{children}</main>;
}
