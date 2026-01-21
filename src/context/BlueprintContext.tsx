import React, { createContext, useContext, useState } from "react";
import { Blueprint } from "../models/blueprint";

const BlueprintContext = createContext<any>(null);

export const BlueprintProvider = ({ children }: any) => {
  const [blueprints, setBlueprints] = useState<Blueprint[]>([]);

  const addBlueprint = (bp: Blueprint) => {
    setBlueprints([...blueprints, bp]);
  };

  return (
    <BlueprintContext.Provider value={{ blueprints, addBlueprint }}>
      {children}
    </BlueprintContext.Provider>
  );
};

export const useBlueprints = () => useContext(BlueprintContext);
