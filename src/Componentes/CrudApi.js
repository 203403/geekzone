import React, { useState } from "react";
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';


const CrudApi=() =>{
    const [db, setDb] = useState([]);
    const [datoEditar, setDatoEditar] = useState(null);

    const agregarRegistro=(data)=>{
        data.id=Date.now();
        //console.log(data);
        setDb([...db, data]);
    };

    const actualizarRegistro=(data)=>{
        let nuevoDato = db.map((el)=> (el.id===data.id? data:el));
        setDb(nuevoDato);
    };

    const borrarRegistro=(id)=>{
        let borrar = window.confirm(
            `Estas seguro de eliminar el registro?`
        );

        if(borrar){
            let nuevoDato=db.filter((el)=>el.id !== id);
            setDb(nuevoDato)
        }else{
            return;
        }
    };

    return(
        <div>
            <h2>Crud API</h2>
            <CrudForm
                agregarRegistro={agregarRegistro}
                actualizarRegistro={actualizarRegistro}
                datoEditar={datoEditar}
                setDatoEditar={setDatoEditar}
            />

            <CrudTable
                data={db}
                setDatoEditar={setDatoEditar}
                borrarRegistro={borrarRegistro}
            />

            <table></table>
        </div>
    )
}

export default CrudApi