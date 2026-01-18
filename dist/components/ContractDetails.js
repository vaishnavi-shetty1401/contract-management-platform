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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const ContractContext_1 = require("../context/ContractContext");
const ExportPDF_1 = __importDefault(require("./ExportPDF"));
const SignaturePad_1 = __importDefault(require("./SignaturePad"));
const ContractDetails = () => {
    const { contracts, updateContractStatus } = (0, ContractContext_1.useContracts)();
    const [selectedId, setSelectedId] = (0, react_1.useState)(contracts[0]?.id || null);
    const selectedContract = contracts.find(c => c.id === selectedId);
    if (!selectedContract)
        return <p>No contract selected</p>;
    const saveSignature = (dataUrl) => {
        selectedContract.signature = dataUrl;
        updateContractStatus(selectedContract.id, "Signed", selectedContract.createdBy);
    };
    return (<div className="p-4 border rounded mb-4">
      <h2 className="text-xl font-bold">{selectedContract.title}</h2>
      <p>Created By: {selectedContract.createdBy}</p>
      <p>Date: {new Date(selectedContract.date).toLocaleDateString()}</p>

      <h3 className="mt-2 font-semibold">Fields:</h3>
      <ul>
        {selectedContract.fields.map((field, idx) => (<li key={idx}>
            {field.label}: {field.type === "checkbox" ? (<input type="checkbox" checked={field.value} onChange={e => field.value = e.target.checked}/>) : (<input type={field.type === "date" ? "date" : "text"} value={String(field.value)} onChange={e => field.value = e.target.value} className="border px-1 py-0.5"/>)}
          </li>))}
      </ul>

      <ExportPDF_1.default contract={selectedContract}/>

      {selectedContract.status === "Created" && <SignaturePad_1.default onSave={saveSignature}/>}
      {selectedContract.signature && <img src={selectedContract.signature} alt="Signature" className="border mt-2"/>}

      <div className="mt-4">
        <label>Select Contract: </label>
        <select value={selectedId || ""} onChange={e => setSelectedId(e.target.value)} className="border ml-2 px-2 py-1">
          {contracts.map(c => <option key={c.id} value={c.id}>{c.title} (v{c.version})</option>)}
        </select>
      </div>

      <div className="mt-4">
        <strong>Audit Trail:</strong>
        {selectedContract.auditTrail.length === 0 ? <p>No actions yet</p> : <ul>
          {selectedContract.auditTrail.map((entry, i) => <li key={i}>{entry.status} by {entry.actor} at {new Date(entry.timestamp).toLocaleString()}</li>)}
        </ul>}
      </div>
    </div>);
};
exports.default = ContractDetails;
