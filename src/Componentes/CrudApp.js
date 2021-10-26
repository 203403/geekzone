import React, { useState } from "react";
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';


const DatosInicial=[
    {id:1,
    usuario:"@user_01",
    apodo:"Manolo",
    contrasenia:"pass01",},

    {id:2,
    usuario:"@user_02",
    apodo:"Ariana",
    contrasenia:"pass02",},
    
    {id:3,
    usuario:"@user_03",
    apodo:"Paolo",
    contrasenia:"pass03",},

    {id:4,
    usuario:"@user_04",
    apodo:"Hachi",
    contrasenia:"pass04",},

    {id:5,
    usuario:"@user_05",
    apodo:"Filanito",
    contrasenia:"pass05",},
];

const CrudApp=() =>{
    const [db, setDb] = useState(DatosInicial);
    const [datoEditar, setDatoEditar] = useState(null);

    const agregarRegistro=(data)=>{
        data.id=Date.now();
        console.log(data);
        setDb([...db, data]);
        DatosInicial.push(setDb);
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
            <h2 id="titulo">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◐Administración de usuarios◑</h2>
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

export default CrudApp