import { useContracts } from "../context/ContractContext";

export default function ContractDetails() {
  const { activeContract } = useContracts();
  if (!activeContract) return null;

  return (
    <div>
      <h3>Contract Details</h3>
      <pre>{JSON.stringify(activeContract, null, 2)}</pre>
    </div>
  );
}
