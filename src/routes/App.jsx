import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Outlet />
    </>
  );
}

export default App;
