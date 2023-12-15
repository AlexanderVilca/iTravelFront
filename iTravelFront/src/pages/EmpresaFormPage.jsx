import { useForm } from 'react-hook-form';
import { createEmpresa, deleteEmpresa, getEmpresa, updateEmpresa } from "../api/Empresas.api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import '../styles/UsuarioFormPage.css';

export function EmpresaFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateEmpresa(params.id, data);
    } else {
      await createEmpresa(data);
    }
    navigate("/empresas");
  });

  useEffect(() => {
    async function loadEmpresa() {
      if (params.id) {
        try {
          console.log("obteniendo los datos");
          const response = await getEmpresa(params.id);
          setValue('nombre', response.data.nombre);
          setValue('direccion', response.data.direccion);
          setValue('telefono', response.data.telefono);
          setValue('rutas', response.data.rutas);
        } catch (error) {
          console.error('Error al cargar datos de empresa:', error);
        }
      }
    }
    loadEmpresa();
  }, [params.id, setValue]);

  return (
    <div className="containeruser">
      <form onSubmit={onSubmit}>
        <input type="text" placeholder='Nombre' {...register("nombre", { required: true })} />
        {errors.nombre && <span>Este campo es obligatorio</span>}
        <input type="text" placeholder='Direccion' {...register("direccion", { required: true })} />
        {errors.direccion && <span>Este campo es obligatorio</span>}
        <input type="text" placeholder='Telefono' {...register("telefono", { required: true })} />
        {errors.telefono && <span>Este campo es obligatorio</span>}
        <input type="text" placeholder='Rutas' {...register("rutas", { required: true })} />
        {errors.rutas && <span>Este campo es obligatorio</span>}
        <button type="submit">Guardar</button>
      </form>
      {params.id && (
        <button className="delete-button" onClick={async () => {
          const accepted = window.confirm("¿Estás seguro?");
          if (accepted) {
            try {
              await deleteEmpresa(params.id);
              navigate("/empresas");
            } catch (error) {
              console.error('Error al eliminar empresa:', error);
            }
          }
        }}>Eliminar</button>
      )}
    </div>
  );
}
