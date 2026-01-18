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
const BlueprintList = ({ onSelect }) => {
    const { blueprints, addBlueprint } = (0, BlueprintContext_1.useBlueprints)();
    const [selectedId, setSelectedId] = (0, react_1.useState)("blueprint-1");
    const [newName, setNewName] = (0, react_1.useState)("");
    const [fields, setFields] = (0, react_1.useState)([]);
    const handleSelect = (id) => { setSelectedId(id); onSelect(id); };
    const addField = () => {
        setFields([...fields, { id: crypto.randomUUID(), label: "Field Label", type: "text" }]);
    };
    const updateField = (id, key, value) => {
        setFields(prev => prev.map(f => f.id === id ? { ...f, [key]: value } : f));
    };
    const createBlueprint = () => {
        if (!newName || fields.length === 0) {
            alert("Provide name and at least one field");
            return;
        }
        addBlueprint({ id: crypto.randomUUID(), name: newName, fields });
        setNewName("");
        setFields([]);
        alert("Blueprint created!");
    };
    return (<div style={{ marginBottom: 20 }}>
      <h2>📄 Select Contract Blueprint</h2>
      <div style={{ display: "flex", gap: 10, marginBottom: 10 }}>
        {blueprints.map(bp => (<button key={bp.id} onClick={() => handleSelect(bp.id)} style={{
                padding: "6px 12px",
                borderRadius: 5,
                border: selectedId === bp.id ? "2px solid #3498db" : "1px solid #ccc",
                background: selectedId === bp.id ? "#ecf6fd" : "#fff",
            }}>{bp.name}</button>))}
      </div>

      <hr />
      <h3>➕ Create New Blueprint</h3>
      <input placeholder="Blueprint Name" value={newName} onChange={e => setNewName(e.target.value)} style={{ marginBottom: 10, width: "50%" }}/>
      {fields.map(f => (<div key={f.id} style={{ marginBottom: 5 }}>
          <input value={f.label} onChange={e => updateField(f.id, "label", e.target.value)} placeholder="Field Label" style={{ marginRight: 5 }}/>
          <select value={f.type} onChange={e => updateField(f.id, "type", e.target.value)}>
            <option value="text">Text</option>
            <option value="date">Date</option>
            <option value="checkbox">Checkbox</option>
            <option value="signature">Signature</option>
          </select>
        </div>))}
      <button onClick={addField} style={{ marginRight: 10 }}>+ Add Field</button>
      <button onClick={createBlueprint}>Create Blueprint</button>
    </div>);
};
exports.default = BlueprintList;
