import { useBlueprints } from "../context/BlueprintContext";
import { useContracts } from "../context/ContractContext";
import { v4 as uuid } from "uuid";

export default function ContractForm() {
  const { blueprints } = useBlueprints();
  const { addContract } = useContracts();

  const createContract = (bp: any) => {
    addContract({
      id: uuid(),
      name: bp.name + " Contract",
      blueprintName: bp.name,
      fields: bp.fields,
      values: {},
      status: "Created",
      createdAt: new Date().toISOString(),
    });
  };

  return (
    <div>
      <h3>Create Contract</h3>
      {blueprints.map((bp: any) => (
        <button key={bp.id} onClick={() => createContract(bp)}>
          From {bp.name}
        </button>
      ))}
    </div>
  );
}
