import { createContext, useContext, useState } from "react";
import type { Blueprint } from "../models/blueprint";

const BlueprintContext = createContext<any>(null);

export const BlueprintProvider = ({ children }: any) => {
  const [blueprints, setBlueprints] = useState<Blueprint[]>(
    JSON.parse(localStorage.getItem("blueprints") || "[]")
  );

  const addBlueprint = (bp: Blueprint) => {
    const updated = [...blueprints, bp];
    setBlueprints(updated);
    localStorage.setItem("blueprints", JSON.stringify(updated));
  };

  return (
    <BlueprintContext.Provider value={{ blueprints, addBlueprint }}>
      {children}
    </BlueprintContext.Provider>
  );
};

export const useBlueprints = () => useContext(BlueprintContext);
