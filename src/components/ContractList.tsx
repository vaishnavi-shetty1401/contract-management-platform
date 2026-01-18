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

