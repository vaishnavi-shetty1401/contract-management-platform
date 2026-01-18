// src/pdfBuilder.ts
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

export const createPDF = async (contract: { title: string; fields: { label: string; value: string }[] }) => {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([600, 400]);
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

  page.drawText(`Contract: ${contract.title}`, { x: 50, y: 350, size: 18, font, color: rgb(0, 0, 0) });

  let y = 320;
  contract.fields.forEach(f => {
    page.drawText(`${f.label}: ${f.value}`, { x: 50, y, size: 14, font, color: rgb(0, 0, 0) });
    y -= 25;
  });

  const pdfBytes = await pdfDoc.save();
  const blob = new Blob([pdfBytes], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${contract.title}.pdf`;
  link.click();
  URL.revokeObjectURL(url);
};
