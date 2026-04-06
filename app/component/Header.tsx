"use client";
import { Input } from "@/components/ui/input";

interface HeaderProps { }
export default function Header(): HeaderProps {
    return (
        <nav className="md:py-10 md:px-10 py-4 fixed z-10 gap-5 pt-10 mb-10 bg-gray-100 w-full shadow">
            <h1 className="lg:text-3xl md:text-2xl md:mb-4 uppercase text-sm ">tableau de bord</h1>
            <Input type="search" placeholder="recherher.." required ></Input>

        </nav>
    )

}