import "./App.module.css";
import EmployeePage from "./pages/Employee.page";

const App = ({ gjelderId }: { gjelderId: string }) => {
  console.log({ gjelderId });
  return <EmployeePage />;
};

export default App;
