"use client"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import * as React from "react"
import { Handshake, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { FileText, LayoutDashboard, LogOut, MoonIcon, ShoppingBasket, StoneIcon, Store } from "lucide-react"
import Link from "next/link"

export function AppSidebar() {
  const { setTheme } = useTheme();
  return (
    <Sidebar collapsible="icon" className="border-r border-orange-500">
      <SidebarHeader>
        <strong className="text-3xl text-center group-data-[collapsible=icon]:hidden">
          <span className="text-orange-600">F</span>act
          <span className="text-orange-600">Market</span>
        </strong>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu >

              <SidebarMenuItem>
                <Link href="/" className="flex gap-4  items-center  " >
                  <SidebarMenuButton className="cursor-pointer  " >

                    <LayoutDashboard className="h-10" />
                    <span className="text-2xl font-inter ">Dashboard</span>

                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>

              <SidebarMenuItem >
                <Link href="/produits" className="flex gap-4  items-center  "  >
                  <SidebarMenuButton className="cursor-pointer  "  >

                    <ShoppingBasket className="w-60  h-60" />
                    <span className="text-2xl ">Produits</span>

                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
              <SidebarMenuItem >
                <Link href="/clients" className="flex gap-4  items-center  "  >
                  <SidebarMenuButton className="cursor-pointer  "  >

                    <Handshake className="w-60  h-60" />
                    <span className="text-2xl ">Clients</span>

                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <Link href="/factures" className="flex gap-4  items-center  " >
                  <SidebarMenuButton className="cursor-pointer  "  >

                    <FileText className="w-60  h-60" />
                    <span className="text-2xl ">Factures</span>

                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>

            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <Link href="/" className="flex gap-4  items-center  " >
              <SidebarMenuButton className="cursor-pointer  " >

                <LogOut />
                <span className="text-2xl ">log-out</span>

              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
          
        </SidebarMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="lg">
              <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
              
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        

      </SidebarFooter>
    </Sidebar>
  )
}