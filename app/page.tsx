"use client";
import { Badge } from "@/components/ui/badge"
import Dashboard from "./component/Dashboard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { LogOut } from "lucide-react";
export default function Home() {
  return (
    <>
      
      <div className="md:grid-cols-2 md:grid-rows-2 grid   md:gap-10 md:w-210 md:mt-50 mt-30 gap-3 md:grid relative md:ml-10 ">
        <Dashboard
        classname="border-r-3 border-amber-500"
          title="Nombre de facures"
          elmt={5}
           
        />
        <Dashboard
          classname="border-r-3 border-black"
          title="Factures en attente"
          elmt={5}
           
        />
        <Dashboard
        classname="border-r-3 border-ring"
          title="Produit"
          elmt={5}
           
        />
        <Dashboard
          classname="border-r-3 border-red-400"
          title="Statut"
          elmt="a jour"
          
        />
      </div>
     
    </>
  );
}