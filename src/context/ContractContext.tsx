<<<<<<< HEAD
import { createContext, useContext, useState } from "react";
import type { Contract, ContractStatus } from "../models/contract";
import { canTransition } from "../utils/lifecycle";

const ContractContext = createContext<any>(null);

export const ContractProvider = ({ children }: any) => {
  const [contracts, setContracts] = useState<Contract[]>(
    JSON.parse(localStorage.getItem("contracts") || "[]")
  );

  const updateStatus = (id: string, next: ContractStatus) => {
    const updated = contracts.map(c => {
      if (c.id === id && canTransition(c.status, next)) {
        return { ...c, status: next };
      }
      return c;
    });

    setContracts(updated);
    localStorage.setItem("contracts", JSON.stringify(updated));
  };

  return (
    <ContractContext.Provider value={{ contracts, updateStatus }}>
=======
import React, { createContext, useContext, useState } from "react";
import { Field } from "../models/blueprint";

export type ContractStatus = "Draft" | "Signed";

export interface Contract {
  id: string;
  name: string;
  fields: Field[];
  status: ContractStatus;
  createdBy: string;
  signature?: string;
}

interface ContractContextType {
  contracts: Contract[];
  activeContractId: string | null;
  addContract: (contract: Contract) => void;
  setActiveContract: (id: string) => void;
  saveSignature: (id: string, signature: string) => void;
  updateStatus: (id: string, status: ContractStatus, actor: string) => void;
}

const ContractContext = createContext<ContractContextType | undefined>(
  undefined
);

export const ContractProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [contracts, setContracts] = useState<Contract[]>([]);
  const [activeContractId, setActiveContractId] = useState<string | null>(null);

  const addContract = (contract: Contract) => {
    setContracts((prev) => [...prev, contract]);
  };

  const setActiveContract = (id: string) => {
    setActiveContractId(id);
  };

  const saveSignature = (id: string, signature: string) => {
    setContracts((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, signature } : c
      )
    );
  };

  const updateStatus = (id: string, status: ContractStatus) => {
    setContracts((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, status } : c
      )
    );
  };

  return (
    <ContractContext.Provider
      value={{
        contracts,
        activeContractId,
        addContract,
        setActiveContract,
        saveSignature,
        updateStatus,
      }}
    >
>>>>>>> 01cd8d5 (Initial commit: Contract Management Platform)
      {children}
    </ContractContext.Provider>
  );
};

<<<<<<< HEAD
export const useContracts = () => useContext(ContractContext);
=======
export const useContracts = () => {
  const ctx = useContext(ContractContext);
  if (!ctx) {
    throw new Error("useContracts must be used within ContractProvider");
  }
  return ctx;
};
>>>>>>> 01cd8d5 (Initial commit: Contract Management Platform)
