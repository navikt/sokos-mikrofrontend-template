import App from "./App";
import "./App.css";
import { initializeAmplitude } from "./utils/amplitude";

const Mikrofrontend = () => {
  initializeAmplitude();

  return <App />;
};

export default Mikrofrontend;
