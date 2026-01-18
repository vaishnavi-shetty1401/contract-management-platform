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
exports.useContracts = exports.ContractProvider = void 0;
const react_1 = __importStar(require("react"));
const ContractContext = (0, react_1.createContext)(undefined);
const ContractProvider = ({ children }) => {
    const [contracts, setContracts] = (0, react_1.useState)([
        // Pre-populated sample contracts
        {
            id: crypto.randomUUID(),
            blueprintId: "blueprint-1",
            title: "Sales Agreement",
            createdBy: "Alice",
            date: new Date().toISOString(),
            version: 1,
            status: "Created",
            fields: [
                { id: "f1", type: "text", label: "Client Name", value: "Acme Corp" },
                { id: "f2", type: "date", label: "Start Date", value: "2026-01-18" },
                { id: "f3", type: "checkbox", label: "Signed NDA", value: true },
            ],
            auditTrail: [],
        },
    ]);
    const addContract = (newContract) => {
        const contract = {
            ...newContract,
            id: crypto.randomUUID(),
            version: 1,
            status: "Created",
            auditTrail: [],
        };
        setContracts(prev => [...prev, contract]);
    };
    const updateContractStatus = (contractId, status, actor) => {
        setContracts(prev => prev.map(c => c.id === contractId
            ? { ...c, status, auditTrail: [...c.auditTrail, { status, actor, timestamp: new Date().toISOString() }] }
            : c));
    };
    return (<ContractContext.Provider value={{ contracts, addContract, updateContractStatus }}>
      {children}
    </ContractContext.Provider>);
};
exports.ContractProvider = ContractProvider;
const useContracts = () => {
    const context = (0, react_1.useContext)(ContractContext);
    if (!context)
        throw new Error("useContracts must be used within a ContractProvider");
    return context;
};
exports.useContracts = useContracts;
exports.default = ContractContext;
