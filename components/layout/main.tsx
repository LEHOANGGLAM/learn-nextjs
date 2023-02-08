import { LayoutProps } from "@/models";
import Link from "next/link";
import * as React from "react";

export function MainLayout({ children }: LayoutProps) {
  return (
    <div>
      <h1>This is header of MainLayout MainLayout MainLayout</h1>
      <Link href="/">Home</Link>
      <Link href="/posts">Post List</Link>
      <div> {children}</div>
    </div>
  );
}
