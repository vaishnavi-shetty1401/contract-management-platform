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
const ContractContext_1 = require("../context/ContractContext");
const statusColors = {
    Created: "#3498db",
    Signed: "#27ae60",
    Approved: "#f39c12",
    Locked: "#7f8c8d",
    Revoked: "#e74c3c",
};
const ContractList = () => {
    const { contracts, updateContractStatus } = (0, ContractContext_1.useContracts)();
    const [filter, setFilter] = (0, react_1.useState)("All");
    const filtered = filter === "All" ? contracts : contracts.filter(c => c.status === filter);
    return (<div className="mt-4">
      <label>Filter by status:</label>
      <select value={filter} onChange={e => setFilter(e.target.value)} className="border px-2 py-1 ml-2 rounded">
        <option value="All">All</option>
        <option value="Created">Created</option>
        <option value="Signed">Signed</option>
        <option value="Approved">Approved</option>
        <option value="Locked">Locked</option>
        <option value="Revoked">Revoked</option>
      </select>

      {filtered.map(c => (<div key={c.id} className="border rounded p-4 mb-4 shadow-sm">
          <div className="flex justify-between">
            <h3 className="font-semibold">{c.title}</h3>
            <span style={{ backgroundColor: statusColors[c.status], color: "white", padding: "2px 6px", borderRadius: "4px" }}>{c.status}</span>
          </div>
          <p>Created By: {c.createdBy}</p>

          {c.signature && <img src={c.signature} alt="Signature" className="border mt-2" style={{ width: 150, height: 80 }}/>}

          {c.status !== "Approved" && <button onClick={() => updateContractStatus(c.id, "Approved", "Manager")} className="px-3 py-1 bg-yellow-600 text-white rounded mt-2 hover:bg-yellow-700">Approve</button>}

          <div className="mt-2">
            <strong>Audit Trail:</strong>
            {c.auditTrail.length === 0 ? <p>No actions yet</p> : <ul>
              {c.auditTrail.map((a, i) => <li key={i}>{a.status} by {a.actor} at {new Date(a.timestamp).toLocaleString()}</li>)}
            </ul>}
          </div>
        </div>))}
    </div>);
};
exports.default = ContractList;
