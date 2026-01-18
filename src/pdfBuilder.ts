import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

export interface Field {
  type: 'text' | 'date' | 'signature' | 'checkbox';
  label: string;
  x?: number;
  y?: number;
}

// Generates PDF in browser and returns a downloadable Blob
export async function generatePDF(fields: Field[]): Promise<Blob> {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([600, 800]);

  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

  // Default starting position
  let yPosition = 750;

  fields.forEach(field => {
    switch (field.type) {
      case 'text':
        page.drawText(`${field.label}: _____________________`, {
          x: 50,
          y: yPosition,
          font,
          size: 14,
          color: rgb(0, 0, 0),
        });
        break;
      case 'date':
        page.drawText(`${field.label}: ____/____/______`, {
          x: 50,
          y: yPosition,
          font,
          size: 14,
          color: rgb(0, 0, 0),
        });
        break;
      case 'signature':
        page.drawText(`${field.label}: _____________________`, {
          x: 50,
          y: yPosition,
          font,
          size: 14,
          color: rgb(0, 0, 0),
        });
        break;
      case 'checkbox':
        page.drawText(`[ ] ${field.label}`, {
          x: 50,
          y: yPosition,
          font,
          size: 14,
          color: rgb(0, 0, 0),
        });
        break;
    }
    yPosition -= 40; // move down for next field
  });

  const pdfBytes = await pdfDoc.save();
  return new Blob([pdfBytes], { type: 'application/pdf' });
}
