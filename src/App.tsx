import { useEffect } from "react";
import { initGrafanaFaro } from "./util/grafanaFaro";
import "./App.module.css";
import TemplatePage from "./pages/TemplatePage";

const App = ({ gjelderId }: { gjelderId?: string }) => {
  useEffect(() => {
    initGrafanaFaro();
  }, []);

  return <TemplatePage />;
};

export default App;
