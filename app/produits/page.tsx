"use client";
// import Hey from '@/public/hey.png'
// import Ariel from '@/public/ariel.png'
// import Lipton from '@/public/lipton.png'
// import Colgate from '@/public/colgate.png'
// import Calve from '@/public/calve.png'
// import Jus from '@/public/jus.png'
// import Gino from '@/public/Gino.png'
// import Mambo from '@/public/mambo.png'
// import Menage from '@/public/menage.png'
// import Nido from '@/public/nido.png'
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"
import { ShoppingBag } from 'lucide-react';
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
export default function Produits() {

  const [count, setCount] = useState(0)
  const ajouter = () => {
    setCount(count + 1);
  }
  const [listProduits, setListProduits] = useState<any[]>([]);
const [produits, setProduits] = useState(false);
const creerProduit = () => {
    setProduits(true);
  };
   const fetchProduits = async () => {
    try {
      const response = await fetch("/api/produits");
      const data = await response.json();
      setListProduits(data);
    } catch (error) {
      console.error("Erreur lors de la récupération des produits:", error);
    }
  };

    useEffect(() => {
      fetchProduits();
    }, []);

  async function AjouterProduit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const data = Object.fromEntries(formData);
      
      const reponse = await fetch("/api/produits", {
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
      alert("produits ajoutés!");
      setProduits(false); // Réinitialise le formulaire
    } catch (error) {
      console.error("Erreur formulaire", error);
      alert("Erreur lors de la création du produit");
    }
  }

  return (
    <>
      <header className="md:mt-5 md:mb-6 flex justify-evenly bg-accent  items-center fixed z-100 w-full p-6 lg:mt-10  ">
        <h1 className="md:text-3xl capitalize text-center">produits disponibles  </h1>
        <span className=''>
          
          <Button className="fixed z-50 relative  rounded-full bg-orange-500 hover:bg-orange-600 p-4 text-white" >
        <ShoppingBag size={24} />
        <Badge className="position-absolute top-2 left-2 rounded-full bg-red-500 text-white text-sm w-5 h-5 flex items-center justify-center">
            {count}
          </Badge>
      </Button>
        </span>
      </header>
      <section className="produits mb-10 lg:mt-40">
        <div className="mb-6 flex justify-end">
                  <Button className="bg-orange-500 hover:bg-orange-600 font-bold text-xl p-4 text-white" onClick={creerProduit}>
                    + Nouveau produit
                  </Button>
                </div>
                 {produits && (
                          <form className="w-1/2 md:w-2/5 mx-auto p-5 border rounded-lg" onSubmit={AjouterProduit}>
                            <div className="mb-4">
                              <label htmlFor="nom" className="block text-gray-700 text-sm font-bold mb-2">
                                Nom du produit
                              </label>
                              <input type="text" id="nom" name="nom" className="border rounded-lg p-2" />
                            </div>
                            <div className="mb-4">
                              <label htmlFor="prix" className="block text-gray-700 text-sm font-bold mb-2">
                                prix
                              </label>
                              <input type="number" id="prix" name="prix" className="border rounded-lg p-2" />
                            </div>
                            <Button type="submit" className="bg-orange-500 hover:bg-orange-600 font-bold text-xl p-4 text-white">
                              Enregistrer 
                            </Button>
                          </form>
                        )}
                        {listProduits.length > 0 ? (
                          <div className="md:grid wrap md:grid-cols-3 md:grid-rows-4 md:gap-4 md:ml-4">
                            {listProduits.map((produit) => (
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
                { listProduits.map((produit) => (
                  <tr key={produit.id}>
                    <td className="px-4 py-3 text-sm text-gray-800">{produit.nom}</td>
                    <td className="px-4 py-3 text-sm text-gray-800">{produit.prix}</td>
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


      {/* <section className="produits mb-10 lg:mt-40">
        <div className="md:grid wrap md:grid-cols-3 md:grid-rows-4 md:gap-4 md:ml-4">
          <Card className="relative mx-auto w-full max-w-sm pt-0">
            <div className="absolute inset-0 z-30 aspect-video " />
            <img
              src={Hey.src}
              alt="Event cover"
              className="relative z-20 aspect-video w-full object-cover   dark:brightness-40"
            />
            <CardHeader>
              <CardAction>
                <Badge variant="default" className='bg-orange-400' >disponible</Badge>
              </CardAction>
              <CardTitle>Huile Raffine</CardTitle>
              <CardDescription>pricing : 2000 XAF</CardDescription>
            </CardHeader>

            <CardFooter>
              <Button className="w-full hover:transform hover:-translate-y-0.5 " onClick={ajouter} >Ajouter </Button>
            </CardFooter>
          </Card>
          <Card className="relative mx-auto w-full max-w-sm pt-0">
            <div className="absolute inset-0 z-30 aspect-video " />
            <img
              src={Ariel.src}
              alt="Event cover"
              className="relative z-20 aspect-video w-full object-cover  dark:brightness-40"
            />
            <CardHeader>
              <CardAction>
                <Badge variant="default" className='bg-orange-400' >disponible</Badge>
              </CardAction>
              <CardTitle>Huile Raffine</CardTitle>
              <CardDescription>pricing : 2000 XAF</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button className="w-full hover:transform hover:-translate-y-0.5 " onClick={ajouter}>Ajouter </Button>
            </CardFooter>
          </Card>
          <Card className="relative mx-auto w-full max-w-sm pt-0">
            <div className="absolute inset-0 z-30 aspect-video " />
            <img
              src={Colgate.src}
              alt="Event cover"
              className="relative z-20 aspect-video w-full object-cover   dark:brightness-40"
            />
            <CardHeader>
              <CardAction>
                <Badge variant="default" className='bg-orange-400' >disponible</Badge>
              </CardAction>
              <CardTitle>Huile Raffine</CardTitle>
              <CardDescription>pricing : 2000 XAF</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button className="w-full hover:transform hover:-translate-y-0.5 " onClick={ajouter}>Ajouter </Button>
            </CardFooter>
          </Card>
          <Card className="relative mx-auto w-full max-w-sm pt-0">
            <div className="absolute inset-0 z-30 aspect-video " />
            <img
              src={Lipton.src}
              alt="Event cover"
              className="relative z-20 aspect-video w-full object-cover   dark:brightness-40"
            />
            <CardHeader>
              <CardAction>
                <Badge variant="default" className='bg-orange-400' >disponible</Badge>
              </CardAction>
              <CardTitle>Huile Raffine</CardTitle>
              <CardDescription>pricing : 2000 XAF</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button className="w-full hover:transform hover:-translate-y-0.5 " onClick={ajouter}>Ajouter </Button>
            </CardFooter>
          </Card>
          <Card className="relative mx-auto w-full max-w-sm pt-0">
            <div className="absolute inset-0 z-30 aspect-video " />
            <img
              src={Calve.src}
              alt="Event cover"
              className="relative z-20 aspect-video w-full object-cover   dark:brightness-40"
            />
            <CardHeader>
              <CardAction>
                <Badge variant="default" className='bg-orange-400' >disponible</Badge>
              </CardAction>
              <CardTitle>Huile Raffine</CardTitle>
              <CardDescription>pricing : 2000 XAF</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button className="w-full hover:transform hover:-translate-y-0.5 " onClick={ajouter}>Ajouter </Button>
            </CardFooter>
          </Card>
          <Card className="relative mx-auto w-full max-w-sm pt-0">
            <div className="absolute inset-0 z-30 aspect-video " />
            <img
              src={Jus.src}
              alt="Event cover"
              className="relative z-20 aspect-video w-full object-cover   dark:brightness-40"
            />
            <CardHeader>
              <CardAction>
                <Badge variant="outline"  >limté</Badge>
              </CardAction>
              <CardTitle>jus de fruits</CardTitle>
              <CardDescription>pricing : 2000 XAF</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button className="w-full hover:transform hover:-translate-y-0.5 " onClick={ajouter}>Ajouter </Button>
            </CardFooter>
          </Card>
          <Card className="relative mx-auto w-full max-w-sm pt-0">
            <div className="absolute inset-0 z-30 aspect-video " />
            <img
              src={Menage.src}
              alt="Event cover"
              className="relative z-20 aspect-video w-full object-cover   dark:brightness-40"
            />
            <CardHeader>
              <CardAction>
                <Badge variant="destructive"  >indisponible</Badge>
              </CardAction>
              <CardTitle>lessive & menage</CardTitle>
              <CardDescription>pricing : 2000 XAF</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button className="w-full hover:transform hover:-translate-y-0.5 " onClick={ajouter}>Ajouter </Button>
            </CardFooter>
          </Card>
          <Card className="relative mx-auto w-full max-w-sm pt-0">
            <div className="absolute inset-0 z-30 aspect-video " />
            <img
              src={Gino.src}
              alt="Event cover"
              className="relative z-20 aspect-video w-full object-cover   dark:brightness-40"
            />
            <CardHeader>
              <CardAction>
                <Badge variant="default" className='bg-orange-400' >disponible</Badge>
              </CardAction>
              <CardTitle>tomate concentrer</CardTitle>
              <CardDescription>pricing : 2000 XAF</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button className="w-full hover:transform hover:-translate-y-0.5 " onClick={ajouter}>Ajouter </Button>
            </CardFooter>
          </Card>
          <Card className="relative mx-auto w-full max-w-sm pt-0">
            <div className="absolute inset-0 z-30 aspect-video " />
            <img
              src={Mambo.src}
              alt="Event cover"
              className="relative z-20 aspect-video w-full object-cover   dark:brightness-40"
            />
            <CardHeader>
              <CardAction>
                <Badge variant="default" className='bg-orange-400' >disponible</Badge>
              </CardAction>
              <CardTitle>plaquete chocolat</CardTitle>
              <CardDescription>pricing : 2000 XAF</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button className="w-full hover:transform hover:-translate-y-0.5 " onClick={ajouter}>Ajouter </Button>
            </CardFooter>
          </Card>
          <Card className="relative mx-auto w-full max-w-sm pt-0">
            <div className="absolute inset-0 z-30 aspect-video " />
            <img
              src={Nido.src}
              alt="Event cover"
              className="relative z-20 aspect-video w-full object-cover   dark:brightness-40"
            />
            <CardHeader>
              <CardAction>
                <Badge variant="default" className='bg-orange-400' >disponible</Badge>
              </CardAction>
              <CardTitle>Lait en Poudre</CardTitle>
              <CardDescription>pricing : 2000 XAF</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button className="w-full hover:transform hover:-translate-y-0.5 " onClick={ajouter}>Ajouter </Button>
            </CardFooter>
          </Card>
        </div>
      </section> */}


    </>
  );}