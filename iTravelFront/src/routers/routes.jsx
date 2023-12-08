import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmpresasPages from "../pages/EmpresasPages";
import UsuariosPages from '../pages/UsuariosPages';
import BusesPages from '../pages/BusesPages';
import BoletosPages from '../pages/BoletosPages';
import ChoferesPages from '../pages/ChoferesPages';
import ItinerariosPages from '../pages/ItinerariosPages';
import RutasPages from '../pages/RutasPages';
import Login from "../components/Login";

export function MyRoutes() {
  return (
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path='/empresas' element={<EmpresasPages />} />
    <Route path='/usuarios' element={<UsuariosPages />} />
    <Route path='/buses' element={<BusesPages />} />
    <Route path='/boletos' element={<BoletosPages />} />
    <Route path='/choferes' element={<ChoferesPages />} />
    <Route path='/itinerarios' element={<ItinerariosPages />} />
    <Route path='/rutas' element={<RutasPages />} />
  </Routes>
  );
}