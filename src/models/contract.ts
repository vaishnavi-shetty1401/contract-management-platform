import { BlueprintField } from "./blueprint";

export type ContractStatus =
  | "Created"
  | "Approved"
  | "Sent"
  | "Signed"
  | "Locked"
  | "Revoked";

export interface Contract {
  id: string;
  name: string;
  blueprintName: string;
  fields: BlueprintField[];
  values: Record<string, any>;
  status: ContractStatus;
  createdAt: string;
}
