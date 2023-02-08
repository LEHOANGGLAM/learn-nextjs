import { LayoutProps } from "@/models";
import Link from "next/link";
import * as React from "react";

export function AdminLayout({ children }: LayoutProps) {
  return (
    <div>
      <h1>This is header of AdminLayout AdminLayout AdminLayout</h1>
      <Link href="/">Home</Link>
      <Link href="/posts">Post List</Link>
      <div> {children}</div>
    </div>
  );
}
