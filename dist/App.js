"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ContractContext_1 = require("./context/ContractContext");
const ContractForm_1 = __importDefault(require("./components/ContractForm"));
const ContractDetails_1 = __importDefault(require("./components/ContractDetails"));
const ContractList_1 = __importDefault(require("./components/ContractList"));
const App = () => (<ContractContext_1.ContractProvider>
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Contract Manager Demo</h1>
      <ContractForm_1.default blueprintId="blueprint-1"/>
      <ContractDetails_1.default />
      <ContractList_1.default />
    </div>
  </ContractContext_1.ContractProvider>);
exports.default = App;
