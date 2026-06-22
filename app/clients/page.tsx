"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
export default function Client() {
  const [clients, setClients] = useState(false);
  const [listclients, setListClients] = useState<any[]>([]);
  const creerClient = () => {
    setClients(true);
  };
  const fetchClients = async () => {
    try {
      const response = await fetch("/api/clients");
      const data = await response.json();
      setListClients(data);
    } catch (error) {
      console.error("Erreur lors de la récupération des clients:", error);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  async function AjouterClient(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const data = Object.fromEntries(formData);
      
      const reponse = await fetch("/api/clients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!reponse.ok) {
        const error = await reponse.json();
        console.error("Erreur serveur:", error);
        alert(`Erreur: ${error.error}`);
        return;
      }

      const result = await reponse.json();
      console.log("Succès:", result);
      alert("Client créé avec succès!");
      setClients(false); // Réinitialise le formulaire
    } catch (error) {
      console.error("Erreur formulaire", error);
      alert("Erreur lors de la création du client");
    }
  }
  return (
    <>
      <header className="md:mt-5 md:mb-6 flex  bg-accent   fixed z-100 w-full p-6 lg:mt-10  ">
        <h1 className="md:text-3xl capitalize text-center">
          Gérer vos clients
        </h1>
      </header>
      <div className="mt-20 md:mt-40 mb-10 md:mr-10">
        <div className="mb-6 flex justify-end">
          <Button className="bg-orange-500 hover:bg-orange-600 font-bold text-xl p-4 text-white" onClick={creerClient}>
            + Nouveau client
          </Button>
        </div>
 {clients && (
          <form className="w-full md:w-210 mx-auto p-5 border rounded-lg" onSubmit={AjouterClient}>
            <div className="mb-4">
              <label htmlFor="nom" className="block text-gray-700 text-sm font-bold mb-2">
                Nom du client
              </label>
              <input type="text" id="nom" name="nom" className="border rounded-lg p-2" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input type="email" id="email" name="email" className="border rounded-lg p-2" />
            </div>
            <div className="mb-4">
              <label htmlFor="telephone" className="block text-gray-700 text-sm font-bold mb-2">
                Telephone
              </label>
              <input type="text" id="telephone" name="telephone" className="border rounded-lg p-2" />
            </div>
            <Button type="submit" className="bg-orange-500 hover:bg-orange-600 font-bold text-xl p-4 text-white">
              Enregistrer 
            </Button>
          </form>
        )}
        {listclients.length > 0 ? (
          <div className="mb-8 overflow-x-auto rounded-lg border bg-white p-4 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Nom</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Email</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Telephone</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {listclients.map((client, index) => (
                  <tr key={client.id ?? index}>
                    <td className="px-4 py-3 text-sm text-gray-800">{client.nom}</td>
                    <td className="px-4 py-3 text-sm text-gray-800">{client.email}</td>
                    <td className="px-4 py-3 text-sm text-gray-800">{client.telephone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center mt-20">Aucun client pour le moment</p>
        )}

       
      </div>
    </>
  )
}
