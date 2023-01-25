import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";
import "./App.css";
import { initializeAmplitude } from "./utils/amplitude";

const Mikrofrontend = () => {
  initializeAmplitude();

  return (
    <QueryClientProvider client={new QueryClient()}>
      <App />
    </QueryClientProvider>
  );
};

export default Mikrofrontend;
