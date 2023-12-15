import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmpresasPages from "../pages/EmpresasPages";
import UsuariosPages from '../pages/UsuariosPages';
import BusesPages from '../pages/BusesPages';
import BoletosPages from '../pages/BoletosPages';
import ChoferesPages from '../pages/ChoferesPages';
import ItinerariosPages from '../pages/ItinerariosPages';
import RutasPages from '../pages/RutasPages';
import Login from "../components/Login";
import {UsuarioFormPage} from "../pages/UsuarioFormPage";
import { EmpresaFormPage } from "../pages/EmpresaFormPage";
import { ChoferFormPage } from "../pages/ChoferFormPage";

export function MyRoutes() {
  return (
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path='/empresas' element={<EmpresasPages />} />

    {/*Usuarios */}
    <Route path='/usuarios' element={<UsuariosPages />} />
    <Route path='/usuarios/create' element={<UsuarioFormPage />} />
    <Route path='/usuarios/:id' element={<UsuarioFormPage />} />
    <Route path='/empresas/create' element={<EmpresaFormPage />} />
    <Route path='/empresas/:id' element={<EmpresaFormPage />} />
    <Route path='/choferes/create' element={<ChoferFormPage />} />
    <Route path='/choferes/:id' element={<ChoferFormPage />} />






    <Route path='/buses' element={<BusesPages />} />
    <Route path='/boletos' element={<BoletosPages />} />
    <Route path='/choferes' element={<ChoferesPages />} />
    <Route path='/itinerarios' element={<ItinerariosPages />} />
    <Route path='/rutas' element={<RutasPages />} />
    
  </Routes>
  );
}