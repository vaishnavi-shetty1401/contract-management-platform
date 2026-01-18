"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const pdf_lib_1 = require("pdf-lib");
const ExportPDF = ({ contract }) => {
    const generatePDF = async () => {
        try {
            const pdfDoc = await pdf_lib_1.PDFDocument.create();
            const page = pdfDoc.addPage([600, 800]);
            const { height } = page.getSize();
            const font = await pdfDoc.embedFont(pdf_lib_1.StandardFonts.Helvetica);
            page.drawText("Contract Document", { x: 50, y: height - 30, size: 16, font, color: (0, pdf_lib_1.rgb)(0, 0, 0) });
            page.drawText(`Title: ${contract.title}`, { x: 50, y: height - 60, size: 14, font, color: (0, pdf_lib_1.rgb)(0, 0, 0) });
            page.drawText(`Created By: ${contract.createdBy}`, { x: 50, y: height - 80, size: 12, font, color: (0, pdf_lib_1.rgb)(0, 0, 0) });
            page.drawText(`Date: ${new Date(contract.date).toLocaleDateString()}`, { x: 50, y: height - 100, size: 12, font, color: (0, pdf_lib_1.rgb)(0, 0, 0) });
            page.drawText(`Status: ${contract.status}`, { x: 50, y: height - 120, size: 12, font, color: (0, pdf_lib_1.rgb)(0, 0, 0) });
            contract.fields.forEach((field, i) => {
                const y = height - 160 - i * 25;
                const value = field.type === "checkbox" ? (field.value ? "☑ Yes" : "☐ No") : String(field.value ?? "");
                page.drawText(`${field.label}: ${value}`, { x: 50, y, size: 12, font, color: (0, pdf_lib_1.rgb)(0, 0, 0) });
            });
            if (contract.signature) {
                const png = await pdfDoc.embedPng(contract.signature);
                page.drawImage(png, { x: 50, y: 50, width: 200, height: 100 });
            }
            page.drawText("Page 1", { x: 500, y: 20, size: 10, font, color: (0, pdf_lib_1.rgb)(0, 0, 0) });
            const pdfBytes = await pdfDoc.save();
            const blob = new Blob([pdfBytes], { type: "application/pdf" }); // ✅ TS-safe
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = `${contract.title || "contract"}.pdf`;
            link.click();
            URL.revokeObjectURL(link.href);
        }
        catch (err) {
            console.error(err);
        }
    };
    return (<button onClick={() => void generatePDF()} className="px-4 py-2 bg-blue-600 text-white rounded mt-2 hover:bg-blue-700">Export PDF</button>);
};
exports.default = ExportPDF;
