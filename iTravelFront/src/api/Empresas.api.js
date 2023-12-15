import axios from 'axios';

export const getAllEmpresas = () => {
  return axios.get('http://127.0.0.1:9090/empresas/');
};

export const createEmpresa = (empresa) => {
  return axios.post('http://127.0.0.1:9090/empresas/', empresa);
};

export const updateEmpresa = (id, empresa) => {
  return axios.put(`http://127.0.0.1:9090/empresas/${id}/`, empresa);
};

export const deleteEmpresa = (id) => {
  return axios.delete(`http://127.0.0.1:9090/empresas/${id}/`);
};

export const getEmpresa = (id) => {
    return axios.get(`http://127.0.0.1:9090/empresas/${id}/`);
}

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

export const createBus = (bus) => {
  return axios.post('http://127.0.0.1:9090/buses/', bus);
};

export const updateBus = (id, bus) => {
  return axios.put(`http://127.0.0.1:9090/buses/${id}/`, bus);
};

export const deleteBus = (id) => {
  return axios.delete(`http://127.0.0.1:9090/buses/${id}/`);
};

export const getBus = (id) => {
    return axios.get(`http://127.0.0.1:9090/buses/${id}/`);
}

export const getAllBoletos = () => {
  return axios.get('http://127.0.0.1:9090/boletos/');
};

export const createBoleto = (boleto) => {
  return axios.post('http://127.0.0.1:9090/boletos/', boleto);
};

export const updateBoleto = (id, boleto) => {
  return axios.put(`http://127.0.0.1:9090/boletos/${id}/`, boleto);
};

export const deleteBoleto = (id) => {
  return axios.delete(`http://127.0.0.1:9090/boletos/${id}/`);
};

export const getBoleto = (id) => {
    return axios.get(`http://127.0.0.1:9090/boletos/${id}/`);
};

export const getAllChoferes = () => {
  return axios.get('http://127.0.0.1:9090/choferes/');
};

export const createChofer = (chofer) => {
  return axios.post('http://127.0.0.1:9090/choferes/', chofer);
};

export const updateChofer = (id, chofer) => {
  return axios.put(`http://127.0.0.1:9090/choferes/${id}/`, chofer);
};

export const deleteChofer = (id) => {
  return axios.delete(`http://127.0.0.1:9090/choferes/${id}/`);
};

export const getChofer = (id) => {
    return axios.get(`http://127.0.0.1:9090/choferes/${id}/`);
}

export const getAllItinerarios = () => {
  return axios.get('http://127.0.0.1:9090/itinerarios/');
};

export const createItinerario = (itinerario) => {
  return axios.post('http://127.0.0.1:9090/itinerarios/', itinerario);
};

export const updateItinerario = (id, itinerario) => {
  return axios.put(`http://127.0.0.1:9090/itinerarios/${id}/`, itinerario);
};

export const deleteItinerario = (id) => {
  return axios.delete(`http://127.0.0.1:9090/itinerarios/${id}/`);
};

export const getItinerario = (id) => {
    return axios.get(`http://127.0.0.1:9090/itinerarios/${id}/`);
}

export const getAllRutas = () => {
  return axios.get('http://127.0.0.1:9090/rutas/');
};

export const createRuta = (ruta) => {
  return axios.post('http://127.0.0.1:9090/rutas/', ruta);
};

export const updateRuta = (id, ruta) => {
  return axios.put(`http://127.0.0.1:9090/rutas/${id}/`, ruta);
};

export const deleteRuta = (id) => {
  return axios.delete(`http://127.0.0.1:9090/rutas/${id}/`);
};

export const getRuta = (id) => {
    return axios.get(`http://127.0.0.1:9090/rutas/${id}/`);
}