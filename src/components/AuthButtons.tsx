"use client";
import React, { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function AuthButtons() {
  const { data: session, status } = useSession();

  if (status === "loading") return null;

  if (session) {
    return (
      <div className="flex items-center gap-2">
        <span className="text-white">{session.user?.name || session.user?.email}</span>
        <Button variant="outline" className="bg-white text-green-700 hover:bg-green-100" onClick={() => signOut()}>
          Sign Out
        </Button>
      </div>
    );
  }

  return (
    <Button variant="outline" className="bg-white text-green-700 hover:bg-green-100" onClick={() => signIn()}>
      Sign In / Sign Up
    </Button>
  );
}