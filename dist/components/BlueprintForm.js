"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const BlueprintContext_1 = require("../context/BlueprintContext");
const BlueprintForm = () => {
    const { addBlueprint } = (0, BlueprintContext_1.useBlueprints)();
    const [name, setName] = (0, react_1.useState)("");
    const [fields, setFields] = (0, react_1.useState)([]);
    const addField = () => setFields([...fields, { label: "", type: "text" }]);
    const updateField = (idx, key, value) => {
        const updated = [...fields];
        updated[idx][key] = value;
        setFields(updated);
    };
    const removeField = (idx) => setFields(fields.filter((_, i) => i !== idx));
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || fields.length === 0)
            return alert("Blueprint must have a name and at least one field!");
        const newBlueprint = {
            id: `blueprint-${Date.now()}`,
            name,
            fields: fields.map((f, i) => ({ id: `f${i + 1}`, label: f.label, type: f.type })),
        };
        addBlueprint(newBlueprint);
        setName("");
        setFields([]);
        alert(`Blueprint "${newBlueprint.name}" created!`);
    };
    return (<form onSubmit={handleSubmit} style={{ maxWidth: "600px", margin: "20px auto", padding: "15px", border: "1px solid #ccc", borderRadius: "6px" }}>
      <h2>Create New Blueprint</h2>
      <div style={{ marginBottom: "10px" }}>
        <label>Blueprint Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={{ width: "100%", padding: "5px" }}/>
      </div>

      <h3>Fields</h3>
      {fields.map((f, idx) => (<div key={idx} style={{ display: "flex", gap: "10px", marginBottom: "5px" }}>
          <input type="text" placeholder="Field Label" value={f.label} onChange={(e) => updateField(idx, "label", e.target.value)} style={{ flex: 2, padding: "5px" }}/>
          <select value={f.type} onChange={(e) => updateField(idx, "type", e.target.value)} style={{ flex: 1, padding: "5px" }}>
            <option value="text">Text</option>
            <option value="date">Date</option>
            <option value="checkbox">Checkbox</option>
            <option value="signature">Signature</option>
          </select>
          <button type="button" onClick={() => removeField(idx)}>Remove</button>
        </div>))}

      <button type="button" onClick={addField} style={{ marginTop: "10px" }}>+ Add Field</button>
      <br />
      <button type="submit" style={{ marginTop: "15px", padding: "8px 20px" }}>Create Blueprint</button>
    </form>);
};
exports.default = BlueprintForm;
