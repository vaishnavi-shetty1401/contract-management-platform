import type { ContractStatus } from "../models/contract";

const transitions: Record<ContractStatus, ContractStatus[]> = {
  CREATED: ["APPROVED", "REVOKED"],
  APPROVED: ["SENT"],
  SENT: ["SIGNED", "REVOKED"],
  SIGNED: ["LOCKED"],
  LOCKED: [],
  REVOKED: []
};

export function canTransition(from: ContractStatus, to: ContractStatus) {
  return transitions[from].includes(to);
}

