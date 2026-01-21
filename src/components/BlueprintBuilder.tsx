import { useState } from "react";
import { useBlueprints } from "../context/BlueprintContext";
import { v4 as uuid } from "uuid";

export default function BlueprintBuilder() {
  const { addBlueprint } = useBlueprints();
  const [name, setName] = useState("");
  const [fields, setFields] = useState<any[]>([]);

  const addField = (type: string) => {
    setFields([...fields, { id: uuid(), label: "", type }]);
  };

  const save = () => {
    addBlueprint({ id: uuid(), name, fields });
    setName("");
    setFields([]);
  };

  return (
    <div>
      <h3>Create Blueprint</h3>
      <input placeholder="Blueprint name" value={name} onChange={(e) => setName(e.target.value)} />
      <br /><br />
      <button onClick={() => addField("text")}>Text</button>
      <button onClick={() => addField("date")}>Date</button>
      <button onClick={() => addField("checkbox")}>Checkbox</button>
      <button onClick={() => addField("signature")}>Signature</button>

      {fields.map((f, i) => (
        <input
          key={f.id}
          placeholder={`Field ${i + 1} label`}
          onChange={(e) => (f.label = e.target.value)}
        />
      ))}

      <br />
      <button onClick={save}>Save Blueprint</button>
    </div>
  );
}
