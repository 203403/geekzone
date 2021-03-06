import React, {useState, useEffect} from "react";

const initialForm={
    id:null,
    usuario:"",
    apodo:"",
    contrasenia:"",
};

const CrudForm=({agregarRegistro, actualizarRegistro, datoEditar, setDatoEditar})=>{
    const [form, setForm] = useState(initialForm);

    useEffect (()=>{
        if(datoEditar){
            setForm(datoEditar);
        }else {
            setForm(initialForm);
        }
    
    }, [datoEditar]);

    const handleChange=(e) =>{
        setForm({...form, [e.target.name]:e.target.value,});
    };

    const handleSubmit=(e) =>{
        e.preventDefault();
        if(!form.usuario || !form.apodo || !form.contrasenia){
            alert("Datos incompletos")
            return;
        }
        if(form.id===null){
            agregarRegistro(form);
        }else{
            actualizarRegistro(form);
        }

        handleReset();
    };

    const handleReset=(e) =>{
        setForm(initialForm);
        setDatoEditar(null);
    };

    return(
        <div class="pagregar">
            <h3 class="segundo">Agregar</h3>
            <form onSubmit={handleSubmit}>    
                <input type="text" name="usuario" class="redondeado" placeholder="@usuario" onChange={handleChange} value={form.usuario}/>
                <input type="text" name="apodo" class="redondeado" placeholder="Apodo"  onChange={handleChange} value={form.apodo}/>
                <input type="text" name="contrasenia" class="redondeado" placeholder="Contrasenia"  onChange={handleChange} value={form.contrasenia}/>
                <input type="submit" class="button-17" role="button" value="Enviar"/>
                <input type="reset" class="button-17" role="button" value="Limpiar" onClick={handleReset}/>
            </form>
        </div>
    )
}

export default CrudForm