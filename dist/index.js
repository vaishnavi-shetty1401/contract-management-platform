"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pdfBuilder_1 = require("./pdfBuilder");
async function main() {
    const fields = [
        { type: 'text', label: 'Name', x: 50, y: 700 },
        { type: 'date', label: 'Date of Agreement', x: 50, y: 670 },
        { type: 'signature', label: 'Client Signature', x: 50, y: 640 },
        { type: 'checkbox', label: 'Agree to Terms', x: 50, y: 610 },
    ];
    await (0, pdfBuilder_1.createContractPDF)(fields, 'contract.pdf');
}
main();
