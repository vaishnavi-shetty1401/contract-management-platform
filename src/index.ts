import { createContractPDF } from "./pdfBuilder";
import { Field } from "./models/blueprint";

async function main() {
  const fields: Field[] = [
    {
      id: "1",
      type: "text",
      label: "Client Name",
      x: 10,
      y: 10,
    },
    {
      id: "2",
      type: "date",
      label: "Start Date",
      x: 10,
      y: 20,
    },
  ];

  createContractPDF(fields, "contract.pdf");
}

main();
