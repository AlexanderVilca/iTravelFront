import { useState, useEffect } from 'react';
import { getAllChoferes } from '../api/Empresas.api';
import '../css/EmpresasList.css';

export function ChoferesList() {
    const [choferes, setChoferes] = useState([]);

    useEffect(() => {
        async function loadChoferes() {
            try {
                const response = await getAllChoferes();
                console.log(response.data);
                setChoferes(response.data);
            } catch (error) {
                console.error('Error al cargar los choferes:', error);
            }
        }

        loadChoferes();
    }, []);

    return (
        <div>
            <h1>Lista de Choferes</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>DNI</th>
                        <th>Bus</th>
                        <th>Empresa de Transporte</th>
                    </tr>
                </thead>
                <tbody>
                    {choferes.map((chofer) => (
                    <tr key={chofer.id}>
                        <td>{chofer.nombre}</td>
                        <td>{chofer.dni}</td>
                        <td>{chofer.bus.placa}</td>
                        <td>{chofer.bus.empresa.nombre}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
