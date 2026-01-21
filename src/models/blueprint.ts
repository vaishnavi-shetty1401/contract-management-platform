export type FieldType = "text" | "date" | "checkbox" | "signature";

export interface BlueprintField {
  id: string;
  label: string;
  type: FieldType;
}

export interface Blueprint {
  id: string;
  name: string;
  fields: BlueprintField[];
}
