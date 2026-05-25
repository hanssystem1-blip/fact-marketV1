"use client";
import { Button } from "@/components/ui/button";

export default function Factures() {
  return (
    <>
      <header>
        <h1 className="text-3xl font-bold">vos Factures</h1>
        <Button >
          Télécharger PDF
        </Button>
      </header>
      <div >
        <h1>Mon contenu</h1>
        <p>hey</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione repellat dolorum, explicabo rerum, facere magnam veniam dicta quasi ea fugit cupiditate ab. Sed suscipit voluptatem nihil aspernatur assumenda, sunt rerum.</p>
        <p>Exporté en PDF</p>
      </div>
    </>
  )
}
