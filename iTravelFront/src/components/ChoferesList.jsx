import { useState, useEffect } from 'react';
import { getAllChoferes } from '../api/Empresas.api';
import { useNavigate } from "react-router-dom";
import '../styles/EmpresasList.css';

export function ChoferesList() {
    const [choferes, setChoferes] = useState([]);
    const navigate=useNavigate()

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

    const handleAgregarClick = () => {
        navigate('/choferes/create');
    };

    return (
        <div className="container sidebar-space">
            <h1>Lista de Choferes</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>DNI</th>
                        <th>Bus</th>
                        <th>Empresa de Transporte</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {choferes.map((chofer) => (
                    <tr key={chofer.id}>
                        <td onClick={()=>{
                                navigate('/chofer/'+ chofer.id)
                            }} >{chofer.nombre}</td>
                        <td>{chofer.dni}</td>
                        <td>{chofer.bus.placa}</td>
                        <td>{chofer.bus.empresa.nombre}</td>
                        <buttom className="btn-edit" onClick={()=>{
                                navigate('/choferes/'+ chofer.id)
                            }}>editar</buttom>
                    </tr>
                    ))}
                </tbody>
            </table>
            <br />
            <button onClick={handleAgregarClick}>Agregar</button>
        </div>
    );
}
