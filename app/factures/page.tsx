"use client";

import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { Button } from "@/components/ui/button";
import { useState } from "react";
export default function Factures() {
  const [factures, setFactures] = useState(false);
  const creerFacture = () => {
    setFactures(true);
  };
  const annulerFacture = () => {
    setFactures(false);
  };
  return (
    <>
      <header className="md:mt-5 md:mb-6 flex  bg-accent   fixed z-100 w-full p-6 lg:mt-10  ">
        <h1 className="md:text-3xl capitalize text-center">
          Creer vos Factures{" "}
        </h1>
      </header>
      <div className="flex justify-end mt-20  md:mt-40 mb-10 md:mr-10">
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
              <p>facture 1</p>

              <table className=" ">
                <tr className="border-b " >
                  <th>produit</th>
                  <th>quantité</th>
                  <th>prix</th>
                </tr>
                <tr className=" ">
                  <td>
                    <NativeSelect name="" defaultValue="" id="">
                      <NativeSelectOption value="">
                        selectionner un produit
                      </NativeSelectOption>
                      <NativeSelectOption value="">fruits</NativeSelectOption>
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
      </div>
    </>
  );
}
