"use client";


import { useRouter } from "next/navigation";
import InterviewScheduleUI from "./InterviewScheduleUI";
import { useUserRole } from "@/hooks/useUserRole";
import LoaderUI from "@/components/LoaderUI";

function SchedulePage() {
  const router = useRouter();

  const {isInterviewer,isLoding}=useUserRole();
  if(isLoding) return <LoaderUI/>
  if(!isInterviewer) return router.push("/");
  

  
  return <InterviewScheduleUI/> ;
}
export default SchedulePage;