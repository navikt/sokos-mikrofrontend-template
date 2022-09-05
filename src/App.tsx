import "@navikt/ds-css";
import { useQuery } from "react-query";
import { fetcher } from "./api/api";
import { apiUrl } from "./api/urls";
import "./App.css";
import Komponent from "./components/Komponent";

function App() {
  const { data } = useQuery(apiUrl, fetcher);

  return (
    <main className="main">
      <div className="app">
        <section className="page-wrapper-microfrontend">
          <Komponent tekst={data?.tekst} />
        </section>
      </div>
    </main>
  );
}

export default App;
