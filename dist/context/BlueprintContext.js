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
exports.useBlueprints = exports.BlueprintProvider = void 0;
const react_1 = __importStar(require("react"));
const BlueprintContext = (0, react_1.createContext)(null);
const BlueprintProvider = ({ children, }) => {
    const [blueprints, setBlueprints] = (0, react_1.useState)([
        {
            id: "blueprint-1",
            name: "Sample Contract",
            fields: [
                { id: "f1", label: "Name", type: "text" },
                { id: "f2", label: "Date of Birth", type: "date" },
                { id: "f3", label: "Agree to Terms", type: "checkbox" },
                { id: "f4", label: "Signature", type: "signature" },
            ],
        },
        {
            id: "blueprint-2",
            name: "NDA Contract",
            fields: [
                { id: "f1", label: "Employee Name", type: "text" },
                { id: "f2", label: "Start Date", type: "date" },
                { id: "f3", label: "Agree to NDA", type: "checkbox" },
            ],
        },
    ]);
    const addBlueprint = (bp) => setBlueprints((prev) => [...prev, bp]);
    return (<BlueprintContext.Provider value={{ blueprints, addBlueprint }}>
      {children}
    </BlueprintContext.Provider>);
};
exports.BlueprintProvider = BlueprintProvider;
const useBlueprints = () => {
    const ctx = (0, react_1.useContext)(BlueprintContext);
    if (!ctx)
        throw new Error("useBlueprints must be inside BlueprintProvider");
    return ctx;
};
exports.useBlueprints = useBlueprints;
