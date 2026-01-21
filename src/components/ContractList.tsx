import { useContracts } from "../context/ContractContext";

export default function ContractList() {
  const { contracts, setActiveContract, updateStatus } = useContracts();

  return (
    <div>
      <h3>Contracts</h3>
      {contracts.map((c: any) => (
        <div key={c.id} style={{ border: "1px solid #ccc", margin: 8, padding: 8 }}>
          <b>{c.name}</b> | {c.status}
          <br />
          <button onClick={() => setActiveContract(c)}>View</button>
          {c.status === "Created" && <button onClick={() => updateStatus(c.id, "Approved")}>Approve</button>}
          {c.status === "Approved" && <button onClick={() => updateStatus(c.id, "Sent")}>Send</button>}
          {c.status === "Sent" && <button onClick={() => updateStatus(c.id, "Signed")}>Sign</button>}
          {c.status === "Signed" && <button onClick={() => updateStatus(c.id, "Locked")}>Lock</button>}
          {c.status !== "Locked" && <button onClick={() => updateStatus(c.id, "Revoked")}>Revoke</button>}
        </div>
      ))}
    </div>
  );
}
