<<<<<<< HEAD
import { BlueprintProvider } from "./context/BlueprintContext";
import { ContractProvider } from "./context/ContractContext";
import ContractList from "./components/ContractList";

function App() {
=======
import React from "react";
import { BlueprintProvider } from "./context/BlueprintContext";
import { ContractProvider } from "./context/ContractContext";

import BlueprintBuilder from "./components/BlueprintBuilder";
import CreateContractFromBlueprint from "./components/CreateContractFromBlueprint";
import ContractList from "./components/ContractList";
import ContractDetails from "./components/ContractDetails";

const App: React.FC = () => {
>>>>>>> 01cd8d5 (Initial commit: Contract Management Platform)
  return (
    <BlueprintProvider>
      <ContractProvider>
        <h1>Contract Management Platform</h1>
<<<<<<< HEAD
        <ContractList />
      </ContractProvider>
    </BlueprintProvider>
  );
}

export default App;

=======

        <BlueprintBuilder />
        <CreateContractFromBlueprint />

        <ContractList />
        <ContractDetails />
      </ContractProvider>
    </BlueprintProvider>
  );
};

export default App;
>>>>>>> 01cd8d5 (Initial commit: Contract Management Platform)
