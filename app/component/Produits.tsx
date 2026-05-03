"use client";


import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button";
import { useState } from 'react';


interface CardProps{
pricing? : number;
title : string;
}

export default function Produits({pricing   , title,  } : CardProps){
const [count, setCount] = useState(0)
  const ajouter = () => {
    setCount(count + 1);
  }

    return(
        <>
             <Card className="relative mx-auto w-full max-w-sm pt-0">
            <div className="absolute inset-0 z-30 aspect-video " />
            <img
              alt="Event cover"
              className="relative z-20 aspect-video w-full object-cover   dark:brightness-40"
            />
            <CardHeader>
              <CardAction>
                <Badge variant="default" className='bg-orange-400' >disponible</Badge>
              </CardAction>
              <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardDescription>{pricing}</CardDescription>
            <CardFooter>
              <Button className="w-full hover:transform hover:-translate-y-0.5 " onClick={ajouter} >Ajouter </Button>
            </CardFooter>
          </Card>
        </>
    )
}