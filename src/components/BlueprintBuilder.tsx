<<<<<<< HEAD
export default function BlueprintBuilder() {
  return <h2>Create Blueprint (Mocked UI)</h2>;
}
=======
import React, { useState } from "react";
import { useBlueprints } from "../context/BlueprintContext";
import { Field } from "../models/blueprint";

const BlueprintBuilder: React.FC = () => {
  const { addBlueprint } = useBlueprints();
  const [name, setName] = useState("");
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

  const handleSubmit = () => {
    if (!name) {
      alert("Blueprint name is required");
      return;
    }

    addBlueprint({ name, fields });
    setName("");
    setFields([]);
  };

  return (
    <div>
      <h2>Create Blueprint</h2>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Blueprint Name"
      />

      <button onClick={addField}>Add Field</button>

      <ul>
        {fields.map((f) => (
          <li key={f.id}>{f.label}</li>
        ))}
      </ul>

      <button onClick={handleSubmit}>Save Blueprint</button>
    </div>
  );
};

export default BlueprintBuilder;
>>>>>>> 01cd8d5 (Initial commit: Contract Management Platform)
