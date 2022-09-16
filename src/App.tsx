import "@navikt/ds-css";
import "./App.css";
import TestSide from "./pages/testside/TestSide.page";

function App(): JSX.Element {
  return (
    <main className="main">
      <div className="app">
        <section className="page-wrapper-microfrontend">
          <TestSide />
        </section>
      </div>
    </main>
  );
}

export default App;
