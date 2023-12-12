import { useForm } from 'react-hook-form';
import { createUsuario,deleteUsuario, getUsuario, updateUsuario } from "../api/Empresas.api";
import { useNavigate,useParams } from "react-router-dom";
import { useEffect } from "react";

export function UsuarioFormPage(){
    const {
        register,
        handleSubmit, 
        formState:{errors},
        setValue
    
    }=useForm()

    const navigate=useNavigate();
    const params=useParams();
    


    const onSubmit=handleSubmit(async data=>{
        if (params.id) {
            await updateUsuario(params.id,data)
        }else{
            await createUsuario(data);
        }
        navigate("/usuarios");
    })

    useEffect(()=>{
        async function loadUser() {
            if(params.id){
                console.log("opteniendo los datos")
                const re= await getUsuario(params.id)
                setValue('uid',re.data.uid)
                setValue('rol',re.data.rol)
                setValue('foto',re.data.foto)
                setValue('nombrecompleto',re.data.nombrecompleto)
                setValue('telefono',re.data.telefono)
                setValue('estado',re.data.estado)
            }
        }
        loadUser();
    },[])
    return(
        <div>
            <form onSubmit={onSubmit}>
                <input type="number" placeholder='uid' {...register("uid",{required:true})} />{errors.uid && <span>this field is required</span>}
                <input type="number" placeholder='rol'{...register("rol",{required:true})}  />{errors.rol && <span>this field is required</span>}
                <input type="text" placeholder='foto' {...register("foto",{required:true})} />{errors.foto && <span>this field is required</span>}
                <input type="text" placeholder='nombrecompleto' {...register("nombrecompleto",{required:true})} />{errors.nombrecompleto && <span>this field is required</span>}
                <input type="text" placeholder='telefono' {...register("telefono",{required:true})} />{errors.telefono && <span>this field is required</span>}
                <input type="number" placeholder='estado' {...register("estado",{required:true})} />{errors.estado && <span>this field is required</span>}
                <button type="submit">Guardar</button>
            </form>
            {params.id && (<button onClick={async ()=>{
                const accepted = window.confirm("estas seguro")
                if(accepted){
                   await deleteUsuario(params.id)
                   navigate("/usuarios")
                }
            }} >Eliminar</button>) }
        </div>
    )
}