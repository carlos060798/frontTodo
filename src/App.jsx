import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageInicio from "./pages/layaut";
import Nosotros from "./pages/About";
import LayautAdmin from "./componetes/Admin";
import Home from "./pages/Inicio";
import Perfils from "./componetes/generales/Perfil";
import TasksComponet from "./componetes/generales/Tasks";
import RegistroUser from "./componetes/generales/Registro";
import Section from "./componetes/generales/Login";
import RutaPrivada from "./pages/RutaPrivada";
import TableList from "./componetes/generales/TableTask";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageInicio />}>
          <Route index element={<Home />} />
          <Route path="/inicio" element={<Home />} />
          <Route path="/Registro" element={<RegistroUser />} />
          <Route path="/about" element={<Nosotros />} />
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
  );
}

export default App;