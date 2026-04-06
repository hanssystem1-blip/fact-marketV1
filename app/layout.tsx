import type { Metadata } from "next";
import {Inter } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "../components/app-sidebar"
import Header from "./component/Header";
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: '400',
})
export const metadata: Metadata = {
  title: "Fact Market",
  description: "numeriser vos factures",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning >
      <head />
      <body className={` ${inter.variable}`}>
          <SidebarProvider >
            <AppSidebar />
            <main className="w-full">
              <SidebarTrigger className="fixed z-30" />
              <Header/>
              {children}
            </main>
          </SidebarProvider>
      </body>
    </html>
  )
}
