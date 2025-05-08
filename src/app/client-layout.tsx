"use client";
import { SessionProvider } from "next-auth/react";
import AuthButtons from "@/components/AuthButtons";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
