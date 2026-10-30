import StorageCard from "./StorageCard";

function App() {
  const storageUnits = [
    {
      name: "Freezer A-01",
      temperature: -18,
      status: "Normal",
    },
    {
      name: "Freezer A-02",
      temperature: -20,
      status: "Normal",
    },
  ];
  return (
    <div className="app">
      <header>
        <h1>ColdChain Sentinel</h1>
        <p>Temperature monitoring and incident management.</p>
      </header>

      <main>
        <h2>Dashboard</h2>
        <p>Your cold storage monitoring overview.</p>
        <div className="metrics">
          <div className="metric-card">
            <p>Total Storage Units</p>
            <h3>12</h3>
            <p>Units being monitored</p>
          </div>

          <div className="metric-card">
            <p>Active Alerts</p>
            <h3>3</h3>
            <p>Require attention</p>
          </div>

          <div className="metric-card">
            <p>Temperature Compliant</p>
            <h3>9 / 12</h3>
            <p>Units within safe limits</p>
          </div>
        </div>
        <section className="storage-section">
          <h2>Storage Units</h2>
          <p>Current temperature readings</p>

          <div className="storage-cards">
            <StorageCard
              name="Freezer A-01"
              temperature={-18}
              status="Normal"
            />

            <StorageCard
              name="Freezer A-02"
              temperature={-20}
              status="Normal"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;