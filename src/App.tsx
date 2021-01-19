import "./App.css";
import { useMemo } from "react";
import { Table } from "./components/table/table";
import React from "react";

function App() {
  const gameIds = useMemo(() => {
    return (
      new URL(window?.location?.href || "").searchParams.get("gameIds") ?? ""
    ).split(",");
  }, [window.location.href]);
  return (
    <div className="App">
      <Table gameIds={gameIds} />
    </div>
  );
}

export default App;
