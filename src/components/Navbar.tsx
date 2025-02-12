// import React from 'react'
"use client";
import Link from "next/link"
import { ModeToggle } from "./ModeToggle"
import { CodeIcon } from "lucide-react"
import { SignedIn, UserButton } from "@clerk/nextjs"
import DasboardBtn from "./DasboardBtn"

function Navbar() {
  return (
    <nav className="border-b-2 border-transparent  " style={{ borderImage: 'linear-gradient(to right ,#3B82F6, #A855F7) 1' }}>
    <div className="flex h-16 items-center px-4 container mx-auto">
      {/* LEFT SIDE -LOGO */}
      <Link
        href="/"
        className="flex items-center gap-2 font-semibold text-2xl mr-6 font-mono hover:opacity-80 transition-opacity"
      >
        <CodeIcon className="size-8 text-emerald-500" />
        <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
          Connect_IT
        </span>
      </Link>
      {/* <ModeToggle /> */}

        {/* RIGHT SIDE - ACTIONS */}
        <SignedIn>
          <div className="flex items-center space-x-4 ml-auto">
            <DasboardBtn />
            <ModeToggle />
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </nav>
  )
}

export default Navbar