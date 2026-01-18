<<<<<<< HEAD
export type FieldType = "text" | "date" | "signature" | "checkbox";

export interface BlueprintField {
  id: string;
  type: FieldType;
  label: string;
  x: number;
  y: number;
=======
// src/models/blueprint.ts

export type FieldType = "text" | "date" | "signature" | "checkbox";

export interface Field {
  id: string;
  label: string;
  type: FieldType;
  x: number;
  y: number;
  value?: string | boolean; // NEW: field value
>>>>>>> 01cd8d5 (Initial commit: Contract Management Platform)
}

export interface Blueprint {
  id: string;
  name: string;
<<<<<<< HEAD
  fields: BlueprintField[];
=======
  fields: Field[];
>>>>>>> 01cd8d5 (Initial commit: Contract Management Platform)
}
