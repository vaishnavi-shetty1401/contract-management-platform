<<<<<<< HEAD
// ContractForm.tsx
export default function ContractForm() {
  return <div>Create Contract</div>;
}
=======
import React, { useState } from "react";
import { useContracts } from "../context/ContractContext";
import { Field } from "../models/blueprint";

const ContractForm: React.FC = () => {
  const { addContract, setActiveContract } = useContracts();

  const [name, setName] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [fields, setFields] = useState<Field[]>([]);

  const addField = () => {
    setFields((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        label: "New Field",
        type: "text",
        x: 10,
        y: 10,
      },
    ]);
  };

  const createContract = () => {
    if (!name || !createdBy) {
      alert("Contract name and creator are required");
      return;
    }

    const contract = {
      id: crypto.randomUUID(),
      name,
      fields,
      status: "Draft" as const,
      createdBy,
    };

    addContract(contract);
    setActiveContract(contract.id);

    setName("");
    setCreatedBy("");
    setFields([]);
  };

  return (
    <div>
      <h3>Create Contract</h3>

      <input
        placeholder="Contract Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Created By"
        value={createdBy}
        onChange={(e) => setCreatedBy(e.target.value)}
      />

      <button onClick={addField}>Add Field</button>

      <ul>
        {fields.map((f) => (
          <li key={f.id}>
            {f.label} ({f.type})
          </li>
        ))}
      </ul>

      <button onClick={createContract}>Create Contract</button>
    </div>
  );
};

export default ContractForm;
>>>>>>> 01cd8d5 (Initial commit: Contract Management Platform)
