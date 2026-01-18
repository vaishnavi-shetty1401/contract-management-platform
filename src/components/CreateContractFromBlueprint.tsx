import React, { useState } from "react";
import { useBlueprints } from "../context/BlueprintContext";
import { useContracts } from "../context/ContractContext";
import { Field } from "../models/blueprint";

const CreateContractFromBlueprint: React.FC = () => {
  const { blueprints } = useBlueprints();
  const { addContract, setActiveContract } = useContracts();

  const [selectedBlueprintId, setSelectedBlueprintId] = useState("");
  const [contractName, setContractName] = useState("");
  const [createdBy, setCreatedBy] = useState("");

  const handleCreate = () => {
    const blueprint = blueprints.find(
      (b) => b.id === selectedBlueprintId
    );

    if (!blueprint || !contractName || !createdBy) {
      alert("All fields are required");
      return;
    }

    // Clone fields from blueprint
    const clonedFields: Field[] = blueprint.fields.map((f) => ({
      ...f,
      id: crypto.randomUUID(), // new field IDs
    }));

    const contract = {
      id: crypto.randomUUID(),
      name: contractName,
      fields: clonedFields,
      status: "Draft" as const,
      createdBy,
    };

    addContract(contract);
    setActiveContract(contract.id);

    setContractName("");
    setCreatedBy("");
    setSelectedBlueprintId("");
  };

  return (
    <div>
      <h3>Create Contract from Blueprint</h3>

      <select
        value={selectedBlueprintId}
        onChange={(e) => setSelectedBlueprintId(e.target.value)}
      >
        <option value="">Select Blueprint</option>
        {blueprints.map((b) => (
          <option key={b.id} value={b.id}>
            {b.name}
          </option>
        ))}
      </select>

      <input
        placeholder="Contract Name"
        value={contractName}
        onChange={(e) => setContractName(e.target.value)}
      />

      <input
        placeholder="Created By"
        value={createdBy}
        onChange={(e) => setCreatedBy(e.target.value)}
      />

      <button onClick={handleCreate}>
        Create Contract
      </button>
    </div>
  );
};

export default CreateContractFromBlueprint;
