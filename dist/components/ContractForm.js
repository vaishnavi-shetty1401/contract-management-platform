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
const ContractForm = ({ blueprintId }) => {
    const { addContract } = (0, ContractContext_1.useContracts)();
    const [title, setTitle] = (0, react_1.useState)("");
    const [createdBy, setCreatedBy] = (0, react_1.useState)("");
    const [fields, setFields] = (0, react_1.useState)([
        { id: "f1", type: "text", label: "Field 1", value: "" },
        { id: "f2", type: "checkbox", label: "Field 2", value: false },
    ]);
    const handleSubmit = (e) => {
        e.preventDefault();
        addContract({ blueprintId, title, createdBy, date: new Date().toISOString(), parentId: undefined, fields });
        setTitle("");
        setCreatedBy("");
    };
    return (<form onSubmit={handleSubmit} className="p-4 border rounded mb-4">
      <div>
        <label>Contract Title:</label>
        <input value={title} onChange={e => setTitle(e.target.value)} className="border ml-2 px-2 py-1"/>
      </div>
      <div className="mt-2">
        <label>Created By:</label>
        <input value={createdBy} onChange={e => setCreatedBy(e.target.value)} className="border ml-2 px-2 py-1"/>
      </div>
      <button type="submit" className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Add Contract</button>
    </form>);
};
exports.default = ContractForm;
