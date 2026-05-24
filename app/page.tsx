"use client";



import { Badge } from "@/components/ui/badge"
import Dashboard from "@/components/Dashboard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import {  LogOut, ShoppingBag } from "lucide-react";
export default function Home() {

  return (
    <>
      <nav className="md:py-10 md:px-10 py-4 fixed z-10 gap-5 pt-10 mb-10   w-full shadow">
            <h1 className="lg:text-3xl md:text-2xl md:mb-4 uppercase text-sm ">tableau de bord</h1>
            <div className="flex  justify-between w-200">
              <Input type="search" className="w-2/3 "  placeholder="recherher.." required ></Input>
              <ShoppingBag className="w-6 h-6 text-orange-600  relative">
                {/* <Badge  className="position-absolute -top-2 -right-2 rounded-full bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center">
                  <ShoppingBag className="w-4 h-4 text-white" />
                </Badge> */}
              </ShoppingBag>
            </div>
                  
        </nav>
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
          elmt={9}
           
        />
        <Dashboard
          classname="border-r-3 border-red-400"
          title="Statut"
          elmt="a jour"
          
        />
        
      </div>
      
        <Separator className="my-10" />
        <Link href="/api/pdf" className="text-blue-500 hover:underline">
          Télécharger le PDF
        </Link>
        
    </>
  );
}