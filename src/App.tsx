import { useEffect } from "react";
import { initGrafanaFaro } from "./util/grafanaFaro";
import "./App.module.css";
import { Route, BrowserRouter, Routes, Navigator, Location } from "react-router-dom";
import EmployeePage from "./pages/Employee.page";
import FooPage from "./pages/Foo.page";

const App = () => {
  useEffect(() => {
    initGrafanaFaro();
  }, []);

  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<EmployeePage />} />
      <Route path="/foo" element={<FooPage />} />
    </Routes>
  </BrowserRouter>
};

export default App;
