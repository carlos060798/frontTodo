import { Outlet } from "react-router-dom";
import NabarAdmin from "./generales/NavbarAdmin";


function LayautAdmin() {
    return (<>
      <NabarAdmin/>
    <Outlet/>
    </>  );
}

export default LayautAdmin;