<<<<<<< HEAD
export type ContractStatus =
  | "CREATED"
  | "APPROVED"
  | "SENT"
  | "SIGNED"
  | "LOCKED"
  | "REVOKED";

export interface Contract {
  id: string;
  name: string;
  blueprintId: string;
  values: Record<string, any>;
  status: ContractStatus;
  createdAt: string;
=======
export type FieldType = "text" | "date" | "checkbox";

export interface Field {
  id: string;
  label: string;
  type: FieldType;
  value: string | boolean;
}

export interface AuditEntry {
  status: string;
  actor: string;
  timestamp: string;
}

export type ContractStatus = "Created" | "Signed" | "Approved";

export interface Contract {
  id: string;
  title: string;
  createdBy: string;
  date: string;
  status: ContractStatus;
  fields: Field[];
  signature?: string;
  auditTrail: AuditEntry[];
>>>>>>> 01cd8d5 (Initial commit: Contract Management Platform)
}
