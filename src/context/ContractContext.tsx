import React, { createContext, useContext, useState } from "react";
import { Contract, ContractStatus } from "../models/contract";

const ContractContext = createContext<any>(null);

export const ContractProvider = ({ children }: any) => {
  const [contracts, setContracts] = useState<Contract[]>([]);
  const [activeContract, setActiveContract] = useState<Contract | null>(null);

  const addContract = (contract: Contract) => {
    setContracts([...contracts, contract]);
  };

  const updateStatus = (id: string, status: ContractStatus) => {
    setContracts((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status } : c))
    );
  };

  return (
    <ContractContext.Provider
      value={{ contracts, addContract, updateStatus, activeContract, setActiveContract }}
    >
      {children}
    </ContractContext.Provider>
  );
};

export const useContracts = () => useContext(ContractContext);
