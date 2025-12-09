import React from "react";
import "../Sass/header.css"

function header(){
    return(
        <div>
        <p className="email">abogadosEspaciales@gmail.com</p>

        <div className="idioma">
            <a href="#">ES|</a>
            <a href="#">DE|</a>
            <a href="#">ENG</a>
        </div>
        <p className="telefono">Tlf. 333 666 999</p>
        </div>
    )
}
export default header;