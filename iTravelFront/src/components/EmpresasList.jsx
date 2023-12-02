import { useEffect, useState } from 'react';
import { getAllEmpresas } from '../api/Empresas.api';
import '../css/EmpresasList.css';

export function EmpresasList() {
    const [empresas, setEmpresas] = useState([]);

    useEffect(() => {
        async function loadEmpresas() {
            try {
                const response = await getAllEmpresas();
                console.log(response.data);
                setEmpresas(response.data);
            } catch (error) {
                console.error('Error al cargar empresas:', error);
            }
        }

        loadEmpresas();
    }, []);

    return (
        <div>
            <h1>Lista de Empresas</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Direccion</th>
                        <th>Telefono</th>
                        <th>Rutas</th>
                    </tr>
                </thead>
                <tbody>
                    {empresas.map((empresa) => (
                        <tr key={empresa.id}>
                            <td>{empresa.nombre}</td>
                            <td>{empresa.direccion}</td>
                            <td>{empresa.telefono}</td>
                            <td>{empresa.rutas}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
