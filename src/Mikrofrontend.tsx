import { QueryClientProvider } from "react-query";
import queryClient from "./utils/query";
import App from "./App";
import "./App.css";

function Mikrofrontend(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
}

export default Mikrofrontend;
