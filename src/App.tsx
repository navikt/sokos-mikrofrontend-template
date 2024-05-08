import { useEffect } from "react";
import "./App.module.css";
import TemplatePage from "./pages/TemplatePage";
import { initGrafanaFaro } from "./util/grafanaFaro";

const App = () => {
  useEffect(() => {
    initGrafanaFaro();
  }, []);

  return <TemplatePage />;
};

export default App;
