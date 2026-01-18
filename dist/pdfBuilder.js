"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContractPDF = createContractPDF;
const pdf_lib_1 = require("pdf-lib");
const fs_1 = __importDefault(require("fs"));
async function createContractPDF(fields, outputPath) {
    // 1️⃣ Create a new PDF
    const pdfDoc = await pdf_lib_1.PDFDocument.create();
    // 2️⃣ Add a page
    const page = pdfDoc.addPage([600, 800]); // width, height
    // 3️⃣ Embed a font
    const font = await pdfDoc.embedFont(pdf_lib_1.StandardFonts.Helvetica);
    // 4️⃣ Loop over fields and draw them
    fields.forEach(field => {
        switch (field.type) {
            case 'text':
                page.drawText(`${field.label}: _____________________`, {
                    x: field.x,
                    y: field.y,
                    font,
                    size: 12,
                    color: (0, pdf_lib_1.rgb)(0, 0, 0),
                });
                break;
            case 'date':
                page.drawText(`${field.label}: ____/____/______`, {
                    x: field.x,
                    y: field.y,
                    font,
                    size: 12,
                    color: (0, pdf_lib_1.rgb)(0, 0, 0),
                });
                break;
            case 'signature':
                page.drawText(`${field.label}: _____________________`, {
                    x: field.x,
                    y: field.y,
                    font,
                    size: 12,
                    color: (0, pdf_lib_1.rgb)(0, 0, 0),
                });
                break;
            case 'checkbox':
                page.drawText(`[ ] ${field.label}`, {
                    x: field.x,
                    y: field.y,
                    font,
                    size: 12,
                    color: (0, pdf_lib_1.rgb)(0, 0, 0),
                });
                break;
        }
    });
    // 5️⃣ Save the PDF to a file
    const pdfBytes = await pdfDoc.save();
    fs_1.default.writeFileSync(outputPath, pdfBytes);
    console.log(`PDF saved to ${outputPath}`);
}
