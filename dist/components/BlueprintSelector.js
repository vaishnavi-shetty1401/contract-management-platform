"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const BlueprintContext_1 = require("../context/BlueprintContext");
const BlueprintSelector = ({ selectedBlueprintId, onChange }) => {
    const { blueprints } = (0, BlueprintContext_1.useBlueprints)();
    return (<div style={{ maxWidth: "500px", margin: "20px auto" }}>
      <label>Select Contract Blueprint: </label>
      <select value={selectedBlueprintId} onChange={(e) => onChange(e.target.value)} style={{ padding: "5px", width: "200px" }}>
        {blueprints.map((bp) => (<option key={bp.id} value={bp.id}>{bp.name}</option>))}
      </select>
    </div>);
};
exports.default = BlueprintSelector;
