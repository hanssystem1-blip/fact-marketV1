"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import {supabase} from "@/lib/supabase";
export default function Client() {
  const [clients, setClients] = useState(false);
  const creerClient = () => {
    setClients(true);
  };

  async function AjouterClient(event:React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const body = new FormData(event.currentTarget)
      const reponse = await fetch("api/clients" , {
        method : "POST",
        body : body,
      });
    } catch (error) {
      console.error("erreur formulaire", error);
    }
  }
  // const AjouterClient = async () => {
  //   await fetch("/api/clients", {
  //     method: "POST",
  //     body: data,
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     // body: JSON.stringify({nom: "client1", email: "client1@example.com", telephone: "0123456789"})
  //   });
  // };

  return (
    <>
      <header className="md:mt-5 md:mb-6 flex  bg-accent   fixed z-100 w-full p-6 lg:mt-10  ">
        <h1 className="md:text-3xl capitalize text-center">
          Gerer vos clients
        </h1>
      </header>
      <div className="flex justify-end mt-20  md:mt-40 mb-10 md:mr-10">
        {
            !clients ? (
                <>
                  <Button className="bg-orange-500 hover:bg-orange-600 font-bold text-xl p-4 text-white" onClick={creerClient}>
                    + nouveau client
                </Button>
                <p className="text-center mt-20">Aucun client pour le moment</p>
                </>
            ) : (
                <form className="w-full md:w-210 mx-auto p-5 border rounded-lg" onSubmit={AjouterClient} >
                    <div className="mb-4">
                        <label htmlFor="nom" className="block text-gray-700 text-sm font-bold mb-2">Nom du client</label>
                        <input type="text" id="nom" name="nom" className="border rounded-lg p-2" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input type="email" id="email" name="email" className="border rounded-lg p-2" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="telephone" className="block text-gray-700 text-sm font-bold mb-2">Telephone</label>
                        <input type="text" id="telephone" name="telephone" className="border rounded-lg p-2" />
                    </div>
                    <Button type="submit" className="bg-orange-500 hover:bg-orange-600 font-bold text-xl p-4 text-white"
                    
                    >
                        Enregistrer le client
                    </Button>
                </form>
            )
        }
      </div>
    </>
  )
}
