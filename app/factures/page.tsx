"use client";
import { Button } from "@/components/ui/button";
// import html2pdf from "html2pdf.js";

export default function Page() {

  //  const downloadPDF = () => {
  //   const element = document.getElementById("content");
  //   if (element) {
  //     html2pdf().from(element).save();
  //   }
  // };
  return (
    <>
      <header>
        <h1 className="text-3xl font-bold">vos Factures</h1>
        <Button >
          Télécharger PDF
        </Button>
      </header>
      <div id="content">
        <h1>Mon contenu</h1>
        <p>hey</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione repellat dolorum, explicabo rerum, facere magnam veniam dicta quasi ea fugit cupiditate ab. Sed suscipit voluptatem nihil aspernatur assumenda, sunt rerum.</p>
        <p>Exporté en PDF</p>
      </div>
    </>
  )
}
