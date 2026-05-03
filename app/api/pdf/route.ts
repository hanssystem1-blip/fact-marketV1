import PDFDocument from "pdfkit";

export async function GET() {
  // 1. Créer le document PDF
  const doc = new PDFDocument();

  // 2. Stocker les données en mémoire
  let buffers: Buffer[] = [];

  doc.on("data", (chunk) => buffers.push(chunk));

  // 3. Contenu du PDF
  doc.fontSize(20).text("FACTURE", { align: "center" });

  doc.moveDown();
  doc.fontSize(12).text("Client : John Doe");
  doc.text("Produit : Développement Web");
  doc.text("Prix : 100 000 FCFA");

  doc.moveDown();
  doc.text("Merci pour votre confiance !");

  // 4. Finaliser le PDF
  doc.end();

  // 5. Attendre la fin
  const pdfBuffer = await new Promise<Buffer>((resolve) => {
    doc.on("end", () => {
      resolve(Buffer.concat(buffers));
    });
  });

  // 6. Retourner le fichier
  const pdfArray = new Uint8Array(pdfBuffer);
  return new Response(pdfArray, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=facture.pdf",
    },
  });
}