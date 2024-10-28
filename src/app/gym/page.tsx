import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full px-12 border-red-600 border-2">{children}</main>
  );
}
