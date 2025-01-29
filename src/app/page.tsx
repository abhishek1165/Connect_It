"use client";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { use } from "react";


export default function Home() {
  return (
    <SignedOut>
   <SignInButton>

    <Button>Sign In</Button>
   </SignInButton>
   </SignedOut>
  );
}
