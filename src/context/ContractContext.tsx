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
      {children}
    </ContractContext.Provider>
  );
};

export const useContracts = () => useContext(ContractContext);
