import { Outlet } from "react-router-dom";
import Menu from "../componetes/generales/Navbar";

function PageInicio() {
    return (<>
      <Menu/>
     <Outlet/>

    
   
    
     
    
    </>  );
}

export default PageInicio;