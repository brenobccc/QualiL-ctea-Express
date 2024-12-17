import React from "react";
import './Cadastro.css';
import Button from "../components/Button";

function Cadastro() {
    return <div id="cadastro">
        <form action="/login" method="get">
            <div id="cadastro-fields">
                <input type="text" placeholder="Nome Completo"></input>
                <input type="email" placeholder="E-mail"></input>
                <input type="text" placeholder="CPF"></input>
                <input type="text" placeholder="Telefone"></input>
                <input type="password" placeholder="Senha"></input>
                <input type="password" placeholder="Confirmar Senha"></input>
            </div>
            <div id="cadastro-button">
                <Button nome="Cadastrar"/>
            </div>
            {/* {/* <div id="login-inputs">
                <input placeholder="E-mail" type="email">
                </input>
                <input placeholder="Senha" type="password">
                </input>
            </div>
            <div id="login-forgot-password">
                <a href="/cadastro">Esqueci a senha</a>
            </div>
            <div id="login-button">
                <button type="submit">ENTRAR</button>
            </div>
            <div id="login-create-account">
                Não tem conta?<a href="/cadastro">  Cadastre-se</a> 
            </div> */}
            {/* <div>
                <label for="email">E-mail:</label>
                <input type="email" id="email" />
            </div>
            <div>
                <label for="senha" >Mensagem:</label>
                <input id="senha" type="password"></input>
            </div>
            <div class="button">
                <button type="submit">Enviar sua mensagem</button>
            </div> */}
        </form>
        {/* <Button nome="Cadastrar"/> */}
    </div>
}

export default Cadastro;