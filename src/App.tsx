import { BlueprintProvider } from "./context/BlueprintContext";
import { ContractProvider } from "./context/ContractContext";
import BlueprintBuilder from "./components/BlueprintBuilder";
import ContractForm from "./components/ContractForm";
import ContractList from "./components/ContractList";
import ContractDetails from "./components/ContractDetails";

export default function App() {
  return (
    <BlueprintProvider>
      <ContractProvider>
        <h1>Contract Management Platform</h1>
        <BlueprintBuilder />
        <ContractForm />
        <ContractList />
        <ContractDetails />
      </ContractProvider>
    </BlueprintProvider>
  );
}
