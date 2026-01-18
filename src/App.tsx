import { BlueprintProvider } from "./context/BlueprintContext";
import { ContractProvider } from "./context/ContractContext";
import ContractList from "./components/ContractList";

function App() {
  return (
    <BlueprintProvider>
      <ContractProvider>
        <h1>Contract Management Platform</h1>
        <ContractList />
      </ContractProvider>
    </BlueprintProvider>
  );
}

export default App;

