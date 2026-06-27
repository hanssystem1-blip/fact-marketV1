"use client";

import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { Button } from "@/components/ui/button";
import { useState } from "react";
export default function Factures() {
  const [factures, setFactures] = useState(false);
  const [listFactures, setListFactures] = useState<any[]>([]);
  const creerFacture = () => {
    setFactures(true);
  };
  const annulerFacture = () => {
    setFactures(false);
  };
  const fetchFactures = async () => {
    try {
      const response = await fetch("/api/factures");
      const data = await response.json();
      setListFactures(data);
    } catch (error) {
      console.error("Erreur lors de la récupération des factures:", error);
    }
  };
  async function AjouterFacture(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const data = Object.fromEntries(formData);
      const reponse = await fetch("/api/factures", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await reponse.json();
      setListFactures((prev) => [...prev, result]);
    } catch (error) {
      console.error("Erreur lors de l'ajout de la facture:", error);
    }
  }
  return (
    <>
      <header className="md:mt-5 md:mb-6 flex  bg-accent   fixed z-100 w-full p-6 lg:mt-10  ">
        <h1 className="md:text-3xl capitalize text-center">
          Creer vos Factures{" "}
        </h1>
      </header>

    <section className="produits mb-10 lg:mt-40">
        <div className="mb-6 flex justify-end">
                  <Button className="bg-orange-500 hover:bg-orange-600 font-bold text-xl p-4 text-white" onClick={creerFacture}>
                    + Nouvelle facture
                  </Button>
                </div>
                 {factures && (
                          <form className="w-1/2 md:w-2/5 mx-auto p-5 border rounded-lg" onSubmit={AjouterFacture}>
                            <div className="mb-4">
                              <label htmlFor="nom" className="block text-gray-700 text-sm font-bold mb-2">
                                {factures ? "Date" : "Nom du produit"}
                              </label>
                              <input type="text" id="nom" name="nom" className="border rounded-lg p-2" />
                            </div>
                            <div className="mb-4">
                              <label htmlFor="prix" className="block text-gray-700 text-sm font-bold mb-2">
                                {factures ? "Montant" : "Prix"}
                              </label>
                              <input type="number" id="prix" name="prix" className="border rounded-lg p-2" />
                            </div>
                            <Button type="submit" className="bg-orange-500 hover:bg-orange-600 font-bold text-xl p-4 text-white">
                              Enregistrer 
                            </Button>
                          </form>
                        )}
                        {listFactures.length > 0 ? (
                          <div className="md:grid wrap md:grid-cols-3 md:grid-rows-4 md:gap-4 md:ml-4">
                            {listFactures.map((facture) => (
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
                { listFactures.map((facture) => (
                  <tr key={facture.id}>
                    <td className="px-4 py-3 text-sm text-gray-800">{facture.nom}</td>
                    <td className="px-4 py-3 text-sm text-gray-800">{facture.prix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-center text-gray-500">Aucun produit disponible.</p>
                        )}
      </section>

      {/* <div className="flex justify-end mt-20  md:mt-40 mb-10 md:mr-10">
        {!factures ? (
          <Button
            className="bg-orange-500 hover:bg-orange-600 font-bold text-xl p-4 text-white"
            onClick={creerFacture}
          >
            + nouvelle facture
          </Button>
          
        ) : (
          <Button
            className="bg-orange-500 hover:bg-orange-600 font-bold text-xl p-4 text-white"
            onClick={annulerFacture}
          >
            + annuler facture
          </Button>
        )}
      </div>
      <div>
        {factures ? (
          <div id="content" className="w-full md:w-210 mx-auto p-5 border rounded-lg">
            <p>liste des factures</p>
            <div className="">
              <p>facture {factures.id} </p>

              <table >
                <tr  >
                  <th>produit</th>
                  <th>quantité</th>
                  <th>prix</th>
                </tr>
                <tr >
                  <td>
                    <NativeSelect name="" defaultValue="" id="" className="border rounded-md p-1">
                      <NativeSelectOption value="">
                        selectionner un produit
                      </NativeSelectOption>
                      <NativeSelectOption value=""> {factures.produit} </NativeSelectOption>
                      <NativeSelectOption value="">boissons</NativeSelectOption>
                      <NativeSelectOption value="">desserts</NativeSelectOption>
                      <NativeSelectOption value="">biscuits</NativeSelectOption>
                      <NativeSelectOption value="">laitiers</NativeSelectOption>
                      <NativeSelectOption value="">menagers</NativeSelectOption>
                    </NativeSelect>
                  </td>
                  <td>
                    <input
                      className="border rounded-md p-1"
                      type="number"
                      name=""
                      id=""
                    />
                  </td>
                  <td>1500</td>
                </tr>
                <tr>
                  <td colSpan={3} className="text-center">
                    <Button className="w-full" >telecharger</Button>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        ) : (
          <p className="text-center mt-20">Aucun facture pour le moment</p>
        )}
      </div> */}
    </>
  );
}
