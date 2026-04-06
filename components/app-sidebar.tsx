import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { FileText, LayoutDashboard,LogOut, MoonIcon, Store } from "lucide-react"
import Link from "next/link"
import {
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

export function AppSidebar() {
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

              <SidebarMenuItem  >
                <SidebarMenuButton  >
                  <Link href="/dashboard" className="flex gap-4  items-center " >
                    <LayoutDashboard className="h-10" />
                    <span className="text-2xl font-inter ">Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem >
                <SidebarMenuButton >
                  <Link href="/services" className="flex gap-4  items-center "  >
                    <Store className="w-60  h-60" />
                    <span className="text-2xl ">Services</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton >
                  <Link href="/factures" className="flex gap-4  items-center " >
                    <FileText className="w-60  h-60" />
                    <span className="text-2xl ">Factures</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter  />
      <SidebarMenuButton >
        <Link href="/factures" className="flex gap-4  items-center " >
          <LogOut/>
          <span className="text-2xl ">log-out</span>
        </Link>
      </SidebarMenuButton>
      <SidebarMenuButton >
        <Link href="/factures" className="flex gap-4  items-center " >
          <MoonIcon/>
          <span className="text-2xl ">dark</span>
        </Link>
      </SidebarMenuButton>
      <SidebarFooter />
    </Sidebar>
  )
}