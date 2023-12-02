import { useEffect, useState } from 'react';
import { getAllBuses } from '../api/Empresas.api';
import '../css/EmpresasList.css';

export function BusesList() {
    const [buses, setBuses] = useState([]);

    useEffect(() => {
        async function loadBuses() {
            try {
                const response = await getAllBuses();
                console.log(response.data);
                setBuses(response.data);
            } catch (error) {
                console.error('Error al cargar empresas:', error);
            }
        }

        loadBuses();
    }, []);

    return (
        <div>
            <h1>Lista de Buses</h1>
            <table>
                <thead>
                    <tr>
                        <th>Placa</th>
                        <th>Empresa</th>
                        <th>Dirección</th>
                        <th>Teléfono</th>
                        <th>Rutas</th>
                        <th>Número de Asientos</th>
                    </tr>
                </thead>
                <tbody>
                    {buses.map((bus) => (
                        <tr key={bus.id}>
                            <td>{bus.placa}</td>
                            <td>{bus.empresa.nombre}</td>
                            <td>{bus.empresa.direccion}</td>
                            <td>{bus.empresa.telefono}</td>
                            <td>{bus.empresa.rutas}</td>
                            <td>{bus.numeroasientos}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
