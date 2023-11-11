import { Outlet } from "react-router-dom";
import Menu from "../componetes/generales/Navbar";

function PageInicio() {
    return (<>
    <div style={ {background: "black" } }
      >
      <Menu/>
     <Outlet/>
     </div>   
    </>  );
}

export default PageInicio;