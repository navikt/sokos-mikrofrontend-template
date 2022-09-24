import { QueryClientProvider } from "react-query";
import queryClient from "./utils/query";
import App from "./App";
import "./App.css";

const Mikrofrontend = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
};

export default Mikrofrontend;
