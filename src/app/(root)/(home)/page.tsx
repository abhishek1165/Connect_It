"use client";

import { useUserRole } from "@/hooks/useUserRole";

export default function Home() {
  const { isInterviewer, isCandidate } = useUserRole();

  

  return (
    <div className="container max-w-7xl mx-auto p-6">
      {/* Welcome Section  */}
      <div className="rounded-lg bg-card p-6 border shadow-sm mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent">
          Welcome to Connect IT
        </h1>
        <p className="text-muted-foreground mt-2">
          {isInterviewer
            ? "Manage your interviews and review candidates efficiently"
            : "Access your interviews and preparations"}
        </p>
      </div>

      {isInterviewer?(
        <>
        <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-6">show sth here</div>
        </>
      ):(
        <div>
          candidate view goes here 
        </div>
      )}

    </div>
  );
}
