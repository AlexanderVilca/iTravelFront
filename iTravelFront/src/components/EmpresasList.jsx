import { useEffect, useState } from 'react';
import { getAllEmpresas } from '../api/Empresas.api';
import { useNavigate } from "react-router-dom";
import '../styles/EmpresasList.css';

export function EmpresasList() {
    const [empresas, setEmpresas] = useState([]);
    const navigate=useNavigate()

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

    const handleAgregarClick = () => {
        navigate('/empresas/create');
    };

    return (
        <div className="container sidebar-space">
            <h1>Lista de Empresas</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Direccion</th>
                        <th>Telefono</th>
                        <th>Rutas</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {empresas.map((empresa) => (
                        <tr key={empresa.id}>
                            <td onClick={()=>{
                                navigate('/empresas/'+ empresa.id)
                            }}>{empresa.nombre}</td>
                            <td>{empresa.direccion}</td>
                            <td>{empresa.telefono}</td>
                            <td>{empresa.rutas}</td>
                            <td>
                            <buttom className="" onClick={()=>{
                                navigate('/empresas/'+ empresa.id)
                            }}>editar</buttom></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br />
            <button onClick={handleAgregarClick}>Agregar</button>
        </div>
    );
}
