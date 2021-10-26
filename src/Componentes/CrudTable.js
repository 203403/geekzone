import React from "react";
import CrudTableFila from "./CrudTableFIla"

const CrudTable = ({data, setDatoEditar, borrarRegistro}) =>{
    return(
        <div class="tercer">
            <h3 class="segundo">Tabla de Datos</h3>
            <table>
                <tbody>
                    <tr>
                        <th >Usuario</th>
                        <th >Apodo</th>
                        <th >Opciones</th>
                    </tr>
                    {data.length > 0?
                        
                        (data.map((el)=>(<CrudTableFila
                            key={el.id}
                            el={el}
                            setDatoEditar={setDatoEditar}
                            borrarRegistro={borrarRegistro}
                        />))):
                        (<tr>
                            <td colSpan="3">Sin Datos</td>
                        </tr>) }
                </tbody>
            </table>
        </div>
    )
}

export default CrudTable