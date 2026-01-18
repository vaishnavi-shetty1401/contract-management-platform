// src/components/Dashboard.tsx
import React from "react";

// Contract status type
export type ContractStatus = string; // dynamic, allows any status

// Contract interface
interface Contract {
  id: string;
  title: string;
  status: ContractStatus;
}

// Props interface
interface DashboardProps {
  contracts: Contract[];
}

const Dashboard: React.FC<DashboardProps> = ({ contracts }) => {
  // Dynamic status count object
  const statusCount: Record<string, number> = {};

  // Count contracts per status
  contracts.forEach((c) => {
    if (!statusCount[c.status]) {
      statusCount[c.status] = 0;
    }
    statusCount[c.status]++;
  });

  // Total unique contracts by ID
  const uniqueContracts = new Set(contracts.map((c) => c.id));

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Contract Dashboard</h2>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginTop: "20px" }}>
        {Object.entries(statusCount).map(([status, count]) => (
          <div
            key={status}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "15px",
              minWidth: "120px",
              textAlign: "center",
              backgroundColor: "#f9f9f9",
            }}
          >
            <strong>{status}</strong>
            <div style={{ fontSize: "18px", marginTop: "5px" }}>{count}</div>
          </div>
        ))}
      </div>

      <p style={{ marginTop: "20px", fontWeight: "bold" }}>
        Total Unique Contracts: {uniqueContracts.size}
      </p>
    </div>
  );
};

export default Dashboard;
