"use client";
import Hey from '@/public/hey.png'
import Ariel from '@/public/ariel.png'
import Lipton from '@/public/lipton.png'
import Colgate from '@/public/colgate.png'
import Calve from '@/public/calve.png'
import Jus from '@/public/jus.png'
import Gino from '@/public/Gino.png'
import Mambo from '@/public/mambo.png'
import Menage from '@/public/menage.png'
import Nido from '@/public/nido.png'
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


import { useState } from 'react';
export default function Produits() {

  const [count, setCount] = useState(0)
  const ajouter = () => {
    setCount(count + 1);
  }

  return (
    <>
      <header className="md:mt-5 md:mb-6 flex justify-evenly bg-accent  items-center fixed z-100 w-full p-6 lg:mt-10  ">
        <h1 className="md:text-3xl capitalize text-center">produits disponibles  </h1>
        <span className='rounded bg-orange-500 text-center text-xl w-10 h-10   relative'>
          <Badge className="position-absolute top-2 left-2 rounded-full bg-red-500 text-white text-sm w-5 h-5 flex items-center justify-center">
            {count}
          </Badge>
        </span>
      </header>
      <section className="produits mb-10 lg:mt-40">
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
      </section>


    </>
  );
}