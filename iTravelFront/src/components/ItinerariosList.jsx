import { useEffect, useState } from 'react';
import { getAllItinerarios } from '../api/Empresas.api';
import '../styles/EmpresasList.css';

export function ItinerariosList() {
    const [itinerarios, setItinerarios] = useState([]);

    useEffect(() => {
        async function loadItinerarios() {
            try {
                const response = await getAllItinerarios();
                console.log(response.data);
                setItinerarios(response.data);
            } catch (error) {
                console.error('Error al cargar los Itinerarios:', error);
            }
        }

        loadItinerarios();
    }, []);

    return (
        <div className="container sidebar-space">
            <h1>Lista de Itinerarios</h1>
            <table>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Boleto</th>
                    <th>Hora de Salida</th>
                    <th>Hora de Llegada</th>
                    <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {itinerarios.map((itinerario) => (
                    <tr key={itinerario.id}>
                        <td>{itinerario.id}</td>
                        <td>{itinerario.boleto.id}</td>
                        <td>{itinerario.horasalida}</td>
                        <td>{itinerario.horallegada}</td>
                        <td>{itinerario.estado}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
