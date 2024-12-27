import React from "react";
import './Header.css';

function Header(){
    return <div id="header">
        <div id="header-content">
            <div id="header-logo">

            </div>
            <div id="header-search-bar">
                <input placeholder="Deseja realizar uma pesquisa? "></input>
                <button></button>
            </div>
        </div>
        <div id="header-nav">
            <div class="nav-option">Todos os Departamentos</div>
            <div class="nav-option">Bebidas Lácteas</div>
            <div class="nav-option">Queijos</div>
            <div class="nav-option">Outros</div>
        </div>
    </div>
}

export default Header;