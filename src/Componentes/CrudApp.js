import React, { useState } from "react";
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';


const DatosInicial=[
    {id:1,
    usuario:"@fulanito_01",
    apodo:"Feannor",
    contrasenia:"lotr001",},

    {id:2,
    usuario:"@fulanito_02",
    apodo:"Finwe",
    contrasenia:"lotr002",},
    
    {id:3,
    usuario:"@fulanito_03",
    apodo:"Idril",
    contrasenia:"lotr003",},

    {id:4,
    usuario:"@fulanito_04",
    apodo:"Morgoth",
    contrasenia:"lotr004",},

    {id:5,
    usuario:"@fulanito_05",
    apodo:"Fingolfin",
    contrasenia:"lotr005",},
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
            <h2>Crud APP</h2>
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