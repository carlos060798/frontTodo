import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageInicio from "../pages/layaut";
import Home from "../pages/Inicio";
import RegistroUser from "../componetes/generales/Registro";
import LayautAdmin from "../componetes/Admin";
import Section from "../componetes/generales/Login";
import TasksComponet from "../componetes/generales/Tasks";
import TableList from "../componetes/generales/TableTask";
import Perfils from "../componetes/generales/Perfil";
import RutaPrivada from "../pages/RutaPrivada";

function RoutesApp() {
    return ( <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageInicio />}>
          <Route index element={<Home />} />
          <Route path="/inicio" element={<Home />} />
          <Route path="/Registro" element={<RegistroUser />} />
        
          <Route path="/login" element={<Section />} />
        </Route>
        <Route path="user" element={<RutaPrivada element={<LayautAdmin />} />}>
          <Route index element={<TasksComponet />} />
          <Route path="taskmanager" element={<TasksComponet />} />
          <Route path="listtask" element={<TableList/>} />
          <Route path="perfil" element={<Perfils />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </> );
}

export default RoutesApp;