import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import EmpresasPages from "./pages/EmpresasPages";
import UsuariosPages from './pages/UsuariosPages';
import EmpresaFormpage from "./pages/EmpresaFormPages";
import LoginPage from "./components/Login";
import BusesPages from './pages/BusesPages';
import BoletosPages from './pages/BoletosPages';

function RedirectToEmpresas() {
  return <Navigate to="/empresas" />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RedirectToEmpresas />} />
        <Route path='/empresas' element={<EmpresasPages />} />
        <Route path='/usuarios' element={<UsuariosPages />} />
        <Route path='/buses' element={<BusesPages />} />
        <Route path='/boletos' element={<BoletosPages />} />
        <Route path='/create' element={<EmpresaFormpage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
