"use client";

import { Badge } from "@/components/ui/badge";
import { Hourglass } from "lucide-react";

interface DashboardProps {
    title: string;
    elmt:number | string ;
    classname?: string;
}

export default function Dashboard({ title, elmt, classname  }: DashboardProps) {
  return (
    <div className={`rounded-lg    shadow-sm border-r-3  p-5 md:p-10   ${classname }`}>
        
        <div className="flex justify-between text-sm  text-md md:text-lg lg:text-xl ">
            <h1 className="">{title}</h1>
            <Badge variant="outline" className="text-red-300"><Hourglass/></Badge>
        </div>
        <p> {elmt}</p>
        
    </div>
  );
}