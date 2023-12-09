import { useEffect, useState } from 'react';
import { getAllRutas } from '../api/Empresas.api';
import '../styles/EmpresasList.css';

export function RutasList() {
    const [rutas, setRutas] = useState([]);

    useEffect(() => {
        async function loadRutas() {
            try {
                const response = await getAllRutas();
                console.log(response.data);
                setRutas(response.data);
            } catch (error) {
                console.error('Error al cargar las rutas:', error);
            }
        }

        loadRutas();
    }, []);

    return (
        <div>
            <h1>Lista de Rutas</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Origen Ciudad</th>
                        <th>Destino Ciudad</th>
                        <th>Duración del Viaje</th>
                        <th>Distancia</th>
                        <th>Precio</th>
                        <th>Empresa de Transporte</th>
                    </tr>
                </thead>
                <tbody>
                    {rutas.map(ruta => (
                    <tr key={ruta.id}>
                        <td>{ruta.id}</td>
                        <td>{ruta.origenciudad}</td>
                        <td>{ruta.destinociudad}</td>
                        <td>{ruta.duracionviaje}</td>
                        <td>{ruta.distancia}</td>
                        <td>{ruta.precio}</td>
                        <td>{ruta.empresa.nombre}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
