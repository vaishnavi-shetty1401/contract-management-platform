import React from "react";
import { Contract } from "../context/ContractContext";
import { createContractPDF } from "../pdfBuilder";

const ExportPDF: React.FC<{ contract: Contract }> = ({ contract }) => {
  return (
    <button
      onClick={() =>
        createContractPDF(contract.fields, `${contract.name}.pdf`)
      }
    >
      Export PDF
    </button>
  );
};

export default ExportPDF;
