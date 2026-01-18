import React from "react";
import { useBlueprints } from "../context/BlueprintContext";

interface Props {
  selectedBlueprintId: string;
  onChange: (id: string) => void;
}

const BlueprintSelector: React.FC<Props> = ({ selectedBlueprintId, onChange }) => {
  const { blueprints } = useBlueprints();

  return (
    <div style={{ maxWidth: "500px", margin: "20px auto" }}>
      <label>Select Contract Blueprint: </label>
      <select
        value={selectedBlueprintId}
        onChange={(e) => onChange(e.target.value)}
        style={{ padding: "5px", width: "200px" }}
      >
        {blueprints.map((bp) => (
          <option key={bp.id} value={bp.id}>{bp.name}</option>
        ))}
      </select>
    </div>
  );
};

export default BlueprintSelector;
