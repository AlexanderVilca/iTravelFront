import { useEffect, useState } from 'react';
import { getAllUsuarios } from '../api/Empresas.api';
import { useNavigate } from "react-router-dom";

export function UsuariosList() {
    const [usuarios, setUsuarios] = useState([]);
    const navigate=useNavigate()

    useEffect(() => {
        async function loadUsuarios() {
            try {
                const response = await getAllUsuarios();
                console.log(response.data);
                setUsuarios(response.data);
            } catch (error) {
                console.error('Error al cargar empresas:', error);
            }
        }

        loadUsuarios();
    }, []);

    const handleAgregarClick = () => {
        navigate('/usuarios/create');
    };

    return (
        <div className="container sidebar-space">
            <h1>Lista de Usuarios</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nombre Completo</th>
                        <th>Telefono</th>
                        <th>Rol</th>
                        <th>uid</th>
                        <th>Estado</th>
                        <th>Opcion</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario) => (
                        <tr key={usuario.id}>
                            <td onClick={()=>{
                                navigate('/usuarios/'+ usuario.id)
                            }} >{usuario.nombrecompleto}</td>
                            <td>{usuario.telefono}</td>
                            <td>{usuario.rol}</td>
                            <td>{usuario.uid}</td>
                            <td>{usuario.estado}</td>
                            <buttom className="" onClick={()=>{
                                navigate('/usuarios/'+ usuario.id)
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
