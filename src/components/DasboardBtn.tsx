" use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { SparkleIcon } from "lucide-react";
import { useUserRole } from "@/hooks/useUserRole";

function DasboardBtn() {
  
  const{isCandidate, isLoding} = useUserRole();

  if(isCandidate  || isLoding) return (null);
  return( 
  <Link href={"/dashboard"}>
    <Button className=" gap-2 font-medium " size={"sm"} >
      <SparkleIcon className="size-8 " />
      Dashbord
    </Button>
  </Link>
  );
   
}

export default DasboardBtn