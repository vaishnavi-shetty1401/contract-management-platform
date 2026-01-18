import React from "react";
import { useContracts } from "../context/ContractContext";
import { Field } from "../models/blueprint";
import ExportPDF from "./ExportPDF";

const ContractDetails: React.FC = () => {
  const {
    contracts,
    activeContractId,
    saveSignature,
    updateStatus,
  } = useContracts();

  const contract = contracts.find(
    (c) => c.id === activeContractId
  );

  if (!contract) {
    return <p>Select a contract to view details</p>;
  }

  const handleSign = () => {
    const fakeSignature = `signed-${Date.now()}`;
    saveSignature(contract.id, fakeSignature);
    updateStatus(contract.id, "Signed", contract.createdBy);
  };

  const updateFieldValue = (fieldId: string, value: string | boolean) => {
    contract.fields = contract.fields.map((f) =>
      f.id === fieldId ? { ...f, value } : f
    );
  };

  return (
    <div>
      <h2>Contract: {contract.name}</h2>
      <p>Status: {contract.status}</p>

      <h3>Fields (Positioned View)</h3>
      <div
        style={{
          position: "relative",
          width: "600px",
          height: "400px",
          border: "1px solid #ccc",
          marginBottom: "20px",
        }}
      >
        {contract.fields.map((field: Field) => (
          <div
            key={field.id}
            style={{
              position: "absolute",
              top: `${field.y}px`,
              left: `${field.x}px`,
              border: "1px solid #000",
              padding: "5px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <label>{field.label}</label>
            {field.type === "text" && (
              <input
                type="text"
                value={field.value as string || ""}
                onChange={(e) =>
                  updateFieldValue(field.id, e.target.value)
                }
              />
            )}
            {field.type === "date" && (
              <input
                type="date"
                value={field.value as string || ""}
                onChange={(e) =>
                  updateFieldValue(field.id, e.target.value)
                }
              />
            )}
            {field.type === "checkbox" && (
              <input
                type="checkbox"
                checked={field.value as boolean || false}
                onChange={(e) =>
                  updateFieldValue(field.id, e.target.checked)
                }
              />
            )}
            {field.type === "signature" && (
              <span>
                {field.value ? field.value : "Not signed"}
              </span>
            )}
          </div>
        ))}
      </div>

      {contract.status !== "Signed" && (
        <button onClick={handleSign}>Sign Contract</button>
      )}

      <ExportPDF contract={contract} />
    </div>
  );
};

export default ContractDetails;
