import EmployeePage from "./pages/Employee.page";
import classes from "./Mikrofrontend.module.css";
const Mikrofrontend = () => {
  return (
    <div className={classes.page_wrapper_microfrontend}>
      <EmployeePage />
    </div>
  );
};

export default Mikrofrontend;
