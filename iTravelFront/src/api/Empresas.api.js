import axios from 'axios';

export const getAllEmpresas = () => {
  return axios.get('http://127.0.0.1:9090/empresas/');
};

export const getAllUsuarios = () => {
  return axios.get('http://127.0.0.1:9090/usuarios/');
};

export const createUsuario = (usuario) => {
  return axios.post('http://127.0.0.1:9090/usuarios/', usuario);
};

export const updateUsuario = (id, usuario) => {
  return axios.put(`http://127.0.0.1:9090/usuarios/${id}/`, usuario);
};

export const deleteUsuario = (id) => {
  return axios.delete(`http://127.0.0.1:9090/usuarios/${id}/`);
};

export const getUsuario = (id) => {
    return axios.get(`http://127.0.0.1:9090/usuarios/${id}/`);
  };

export const getAllBuses = () => {
  return axios.get('http://127.0.0.1:9090/buses/');
};

export const getAllBoletos = () => {
  return axios.get('http://127.0.0.1:9090/boletos/');
};

export const getAllChoferes = () => {
  return axios.get('http://127.0.0.1:9090/choferes/');
};

export const getAllItinerarios = () => {
  return axios.get('http://127.0.0.1:9090/itinerarios/');
};

export const getAllRutas = () => {
  return axios.get('http://127.0.0.1:9090/rutas/');
};
