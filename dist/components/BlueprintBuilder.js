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
const uuid_1 = require("uuid");
const BlueprintBuilder = () => {
    const { addBlueprint } = (0, BlueprintContext_1.useBlueprints)();
    const [name, setName] = (0, react_1.useState)("");
    const [fields, setFields] = (0, react_1.useState)([]);
    const addField = (type) => {
        setFields([...fields, { id: (0, uuid_1.v4)(), label: "", type, x: 0, y: 0 }]);
    };
    const handleFieldChange = (id, label) => {
        setFields(fields.map(f => f.id === id ? { ...f, label } : f));
    };
    const handleSubmit = () => {
        if (!name)
            return alert("Blueprint name is required");
        addBlueprint({ id: (0, uuid_1.v4)(), name, fields });
        setName("");
        setFields([]);
    };
    return (<div>
      <h2>Create Blueprint</h2>
      <input placeholder="Blueprint Name" value={name} onChange={e => setName(e.target.value)}/>
      <div>
        <button onClick={() => addField("text")}>Add Text Field</button>
        <button onClick={() => addField("date")}>Add Date Field</button>
        <button onClick={() => addField("checkbox")}>Add Checkbox Field</button>
        <button onClick={() => addField("signature")}>Add Signature Field</button>
      </div>
      {fields.map(f => (<div key={f.id}>
          <input placeholder="Field Label" value={f.label} onChange={(e) => handleFieldChange(f.id, e.target.value)}/>
        </div>))}
      <button onClick={handleSubmit}>Save Blueprint</button>
    </div>);
};
exports.default = BlueprintBuilder;
