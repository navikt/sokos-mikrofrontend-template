import "./App.css";
import EmployeePage from "./pages/employee/Employee.page";

const App = () => {
  return (
    <main className="main">
      <div className="app">
        <section className="page-wrapper-microfrontend">
          <EmployeePage />
        </section>
      </div>
    </main>
  );
};

export default App;
