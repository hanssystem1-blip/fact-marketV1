"use client";

import { Button } from "@/components/ui/button";

export default function Page() {
  const downloadPDF = () => {
    window.open("/api/pdfdo");
  };

  return (
    <div className="p-10">
      <Button variant="default" size="lg" onClick={downloadPDF}>
        Télécharger PDF
      </Button>
    </div>
  );
}