"use client";
import { Button } from "@/components/ui/button";
import html2pdf from "html2pdf.js";

export default function Page() {

   const downloadPDF = () => {
    const element = document.getElementById("content");

    if (element) {
      html2pdf().from(element).save();
    }
  };
  return (
    <>

      <header>
        
        <h1 className="text-3xl font-bold">vos Factures</h1>
          <Button onClick={downloadPDF}>  
        Télécharger PDF
      </Button>
      <div id="content">
        <h1>Mon contenu</h1>
        <p>Exporté en PDF</p>
      </div>
      </header>
    </>
  )
}
