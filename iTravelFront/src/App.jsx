import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import EmpresasPages from "./pages/EmpresasPages";
import UsuariosPages from './pages/UsuariosPages';
import EmpresaFormpage from "./pages/EmpresaFormPages";
import LoginPage from "./components/Login";
import BusesPages from './pages/BusesPages';
import BoletosPages from './pages/BoletosPages';
import ChoferesPages from './pages/ChoferesPages';
import ItinerariosPages from './pages/ItinerariosPages';
import RutasPages from './pages/RutasPages';

function RedirectToEmpresas() {
  return <Navigate to="/empresas" />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/empresas' element={<EmpresasPages />} />
        <Route path='/usuarios' element={<UsuariosPages />} />
        <Route path='/buses' element={<BusesPages />} />
        <Route path='/boletos' element={<BoletosPages />} />
        <Route path='/create' element={<EmpresaFormpage />} />
        <Route path='/choferes' element={<ChoferesPages />} />
        <Route path='/itinerarios' element={<ItinerariosPages />} />
        <Route path='/rutas' element={<RutasPages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
