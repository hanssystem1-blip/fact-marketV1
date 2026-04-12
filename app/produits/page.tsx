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
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
export default function Page() {
  const downloadPDF = () => {
    window.open("/api/pdfdo");
  };

  return (
    <>
      <header className="md:mt-5 md:mb-6">
        <h1 className="md:text-3xl capitalize text-center">produits disponibles</h1>
        <span className='w-5 h-2 bg-orange-600'></span>
      </header>



      <section className="produits">
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
            </CardHeader>
            <CardFooter>
              <Button className="w-full hover:transform hover:-translate-y-0.5 ">Ajouter </Button>
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
            </CardHeader>
            <CardFooter>
              <Button className="w-full hover:transform hover:-translate-y-0.5 ">Ajouter </Button>
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
            </CardHeader>
            <CardFooter>
              <Button className="w-full hover:transform hover:-translate-y-0.5 ">Ajouter </Button>
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
            </CardHeader>
            <CardFooter>
              <Button className="w-full hover:transform hover:-translate-y-0.5 ">Ajouter </Button>
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
            </CardHeader>
            <CardFooter>
              <Button className="w-full hover:transform hover:-translate-y-0.5 ">Ajouter </Button>
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
                <Badge variant="default" className='bg-orange-400' >disponible</Badge>
              </CardAction>
              <CardTitle>Huile Raffine</CardTitle>
            </CardHeader>
            <CardFooter>
              <Button className="w-full hover:transform hover:-translate-y-0.5 ">Ajouter </Button>
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
                <Badge variant="default" className='bg-orange-400' >disponible</Badge>
              </CardAction>
              <CardTitle>lessive & menage</CardTitle>
            </CardHeader>
            <CardFooter>
              <Button className="w-full hover:transform hover:-translate-y-0.5 ">Ajouter </Button>
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
            </CardHeader>
            <CardFooter>
              <Button className="w-full hover:transform hover:-translate-y-0.5 ">Ajouter </Button>
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
            </CardHeader>
            <CardFooter>
              <Button className="w-full hover:transform hover:-translate-y-0.5 ">Ajouter </Button>
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
            </CardHeader>
            <CardFooter>
              <Button className="w-full hover:transform hover:-translate-y-0.5 ">Ajouter </Button>
            </CardFooter>
          </Card>
        </div>
      </section>


    </>
  );
}