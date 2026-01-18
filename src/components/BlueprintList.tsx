import React, { useState } from "react";
import { useBlueprints } from "../context/BlueprintContext";

interface Props {
  selectedId: string;
  onSelect: (id: string) => void;
}

const BlueprintList: React.FC<Props> = ({ selectedId, onSelect }) => {
  const { blueprints } = useBlueprints();

  return (
    <div>
      <h2>📄 Select Blueprint</h2>
      <div style={{ display: "flex", gap: 10 }}>
        {blueprints.map(bp => (
          <button
            key={bp.id}
            onClick={() => onSelect(bp.id)}
            style={{
              padding: "5px 10px",
              border: selectedId === bp.id ? "2px solid #3498db" : "1px solid #ccc",
              background: selectedId === bp.id ? "#ecf6fd" : "#fff",
              borderRadius: 4
            }}
          >
            {bp.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlueprintList;
