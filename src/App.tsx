import { useEffect } from "react";
import { initGrafanaFaro } from "./util/grafanaFaro";
import "./App.module.css";
import EmployeePage from "./pages/EmployeePage";

export default function App() {
  useEffect(() => {
    if (window.location.hostname !== "localhost") initGrafanaFaro();
  }, []);

  return <EmployeePage />;
}
