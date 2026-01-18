<<<<<<< HEAD
import { useContracts } from "../context/ContractContext";
import type { Contract } from "../models/contract";

export default function ContractList() {
  const { contracts } = useContracts();

  return (
    <table border={1} cellPadding={8}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Status</th>
          <th>Created</th>
        </tr>
      </thead>
      <tbody>
        {contracts.map((c: Contract) => (
          <tr key={c.id}>
            <td>{c.name}</td>
            <td>{c.status}</td>
            <td>{c.createdAt}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

=======
import React from "react";
import { useContracts } from "../context/ContractContext";

const ContractList: React.FC = () => {
  const { contracts, setActiveContract } = useContracts();

  return (
    <div>
      <h3>Contracts</h3>
      <ul>
        {contracts.map((c) => (
          <li key={c.id}>
            <button onClick={() => setActiveContract(c.id)}>
              {c.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContractList;
>>>>>>> 01cd8d5 (Initial commit: Contract Management Platform)
