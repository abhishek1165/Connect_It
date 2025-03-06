"use client";

import { QUICK_ACTIONS } from "@/constants";
import { useUserRole } from "@/hooks/useUserRole";
import { action } from "../../../../convex/_generated/server";
import ActionCard from "@/components/ActionCard";
import { useState } from "react";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { useRouter } from "next/navigation";
import MeetingModal from "@/components/MeetingModal";
import LoaderUI from "@/components/LoaderUI";
import { Loader2Icon } from "lucide-react";
import MeetingCard from "@/components/MeetingCard";
export default function Home() {
  const router = useRouter();
  const { isInterviewer, isCandidate, isLoding } = useUserRole();
  const interviews=useQuery(api.interviews.getMyInterviews);
  const [showModel, setShowModel] = useState(false);
  const [modelType, setModelType] = useState<"start" |"join">();

  const handleQucikAction=(title:string)=>{
    switch (title) {
      case "New Call":
        setModelType("start");
        setShowModel(true);
        break;
      case "Join Interview":
        setModelType("join");
        setShowModel(true);
        break;    
      default:
        router.push(`/${title.toLowerCase()}`);
    }
  };

  if(isLoding) return<LoaderUI/>

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
        <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {QUICK_ACTIONS.map((action)=>(
            <ActionCard
             key={action.title }
             action={action}
             onClick={()=>handleQucikAction(action.title)}
             />
          ))}
        </div>

        <MeetingModal
        isOpen={showModel}
        onClose={()=>setShowModel(false)}
        title={modelType==="join"?"Join Meeting ": "Start Meeting"}
        isJoinMeeting={modelType==="join"}
        />
        </>
      ):(
        <>
        <div>
          <h1 className=" text-3xl font-bold">Your Interviews</h1>
          <p className=" text-muted-foreground mt-1">View and join your scheduled interviews</p>
        </div>

        <div className="mt-8">
          {interviews===undefined ?(
            <div className=" flex justify-center py-12">
              <Loader2Icon className="h-8 w-8 animate-spin text-muted-foreground"/>

            </div>
          ):interviews.length>0 ?(
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {interviews.map((interview) => (
              <MeetingCard key={interview._id} interview={interview} />
            
            ))}
          </div>
          ):(
            <div className=" text-center py-12 text-muted-foreground">
               You have no interviews scheduled
            </div>
          )}
        </div>
        </>
      )}

    </div>
  );
}
