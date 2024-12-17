import React from "react";
import './Login.css';
import Button from "../components/Button";

function Login() {
    return <div id="login">
        {/* <Button nome="Entrar"/> */}
        <form action="/cadastro" method="get">
            <div id="login-inputs">
                <input placeholder="E-mail" type="email">
                </input>
                <input placeholder="Senha" type="password">
                </input>
            </div>
            <div id="login-forgot-password">
                <a href="/esquecisenha">Esqueci a senha</a>
            </div>
            <div id="login-button">
                <button type="submit">ENTRAR</button>
            </div>
            <div id="login-create-account">
                Não tem conta?<a href="/cadastro">  Cadastre-se</a>
            </div>
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
    </div>

}

export default Login;