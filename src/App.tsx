import { useEffect } from "react";
import "./App.module.css";
import TemplatePage from "./pages/TemplatePage";
import { initGrafanaFaro } from "./util/grafanaFaro";

export default function App() {
  useEffect(() => {
    initGrafanaFaro();
  }, []);

  return <TemplatePage />;
}
