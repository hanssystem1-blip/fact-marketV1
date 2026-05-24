"use client";
import { Button } from "@/components/ui/button";
import html2pdf from "html2pdf.js";

export default function Page() {

   const downloadPDF = () => {
    const element = document.getElementById("content");

//     let opt = {
//   margin:       1,
//   filename:     'hans.pdf',
//   image:        { type: 'jpeg' as 'jpeg', quality: 0.98 },
//   html2canvas:  { scale: 2 },
//   jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' as 'portrait' }
// };

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
