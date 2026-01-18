import React, { useState } from "react";
import { Field } from "../models/blueprint";

const BlueprintForm: React.FC = () => {
  const [fields, setFields] = useState<Field[]>([]);

  const addField = () =>
    setFields([
      ...fields,
      {
        id: crypto.randomUUID(),
        label: "",
        type: "text",
        x: 10,
        y: 10,
      },
    ]);

  const updateField = (
    id: string,
    key: "label" | "type",
    value: string
  ) =>
    setFields(
      fields.map((f) =>
        f.id === id ? { ...f, [key]: value } : f
      )
    );

  const removeField = (id: string) =>
    setFields(fields.filter((f) => f.id !== id));

  return (
    <div>
      <h3>Blueprint Fields</h3>
      <button onClick={addField}>Add Field</button>

      {fields.map((f) => (
        <div key={f.id}>
          <input
            value={f.label}
            placeholder="Label"
            onChange={(e) =>
              updateField(f.id, "label", e.target.value)
            }
          />

          <select
            value={f.type}
            onChange={(e) =>
              updateField(f.id, "type", e.target.value)
            }
          >
            <option value="text">Text</option>
            <option value="date">Date</option>
            <option value="signature">Signature</option>
            <option value="checkbox">Checkbox</option>
          </select>

          <button onClick={() => removeField(f.id)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default BlueprintForm;
