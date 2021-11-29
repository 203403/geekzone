import React from "react";

const CrudTableFila = ({el, setDatoEditar, borrarRegistro}) =>{
    let{id, usuario, apodo, contrasenia}=el;
    return (
        <tr>
            <td>{usuario}</td>
            <td>{apodo}</td>
             <td>
                <button onClick={() => setDatoEditar(el) }>Editar</button>
                <button onClick={() => borrarRegistro(id) }>Eliminar</button>
             </td>
        </tr>
    );
};

export default CrudTableFila;