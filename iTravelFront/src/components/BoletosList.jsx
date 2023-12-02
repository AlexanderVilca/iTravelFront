import { useEffect, useState } from 'react';
import { getAllBoletos } from '../api/Empresas.api';

export function BoletosList() {
    const [boletos, setBoletos] = useState([]);

    useEffect(() => {
        async function loadBoletos() {
            try {
                const response = await getAllBoletos();
                console.log(response.data);
                setBoletos(response.data);
            } catch (error) {
                console.error('Error al cargar boletos:', error);
            }
        }

        loadBoletos();
    }, []);

    return (
        <div>
            <h1>Lista de Boletos</h1>
            <table>
                <thead>
                    <tr>
                        <th>Placa del Bus</th>
                        <th>Número de Asientos</th>
                        <th>Nombre Completo</th>
                        <th>Telefono</th>
                        <th>Rol</th>
                        <th>uid</th>
                        <th>Estado</th>
                        <th>Precio</th>
                        <th>Fecha de Compra</th>
                        <th>Estado del Boleto</th>
                    </tr>
                </thead>
                <tbody>
                    {boletos.map((boleto) => (
                        <tr key={boleto.id}>
                            <td>{boleto.bus.placa}</td>
                            <td>{boleto.bus.numeroasientos}</td>
                            <td>{boleto.usuario.nombrecompleto}</td>
                            <td>{boleto.usuario.telefono}</td>
                            <td>{boleto.usuario.rol}</td>
                            <td>{boleto.usuario.uid}</td>
                            <td>{boleto.usuario.estado}</td>
                            <td>{boleto.precio}</td>
                            <td>{boleto.fechacompra}</td>
                            <td>{boleto.estado}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
