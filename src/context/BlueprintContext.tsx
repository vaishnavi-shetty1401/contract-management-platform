<<<<<<< HEAD
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
=======
import React, { createContext, useContext, useState } from "react";
import { Blueprint } from "../models/blueprint";

interface BlueprintContextType {
  blueprints: Blueprint[];
  addBlueprint: (blueprint: Omit<Blueprint, "id">) => void;
}

const BlueprintContext = createContext<BlueprintContextType | undefined>(
  undefined
);

export const BlueprintProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [blueprints, setBlueprints] = useState<Blueprint[]>([]);

  const addBlueprint = (blueprint: Omit<Blueprint, "id">) => {
    setBlueprints((prev) => [
      ...prev,
      { ...blueprint, id: crypto.randomUUID() },
    ]);
>>>>>>> 01cd8d5 (Initial commit: Contract Management Platform)
  };

  return (
    <BlueprintContext.Provider value={{ blueprints, addBlueprint }}>
      {children}
    </BlueprintContext.Provider>
  );
};

<<<<<<< HEAD
export const useBlueprints = () => useContext(BlueprintContext);
=======
export const useBlueprints = () => {
  const ctx = useContext(BlueprintContext);
  if (!ctx) throw new Error("useBlueprints must be used inside provider");
  return ctx;
};
>>>>>>> 01cd8d5 (Initial commit: Contract Management Platform)
