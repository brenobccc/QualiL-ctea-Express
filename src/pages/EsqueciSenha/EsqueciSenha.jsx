import React from "react";
import './EsqueciSenha.css';
import Button from "../../components/Button/Button";

function EsqueciSenha() {
    return <div id="recuperar">
        <div id="recuperar-box">
            <div id="recuperar-fields">
                <h3>Esqueci minha senha</h3>
                <p> Para redefinir sua senha, informe o usuário ou e-mail cadastrado na sua conta e lhe enviaremos um link com as instruções</p>

            </div>
            <form id="recuperar-form" action="/login" method="get">
                <div>
                    <label>E-mail ou Número de Telefone</label>
                    <input type="text">
                    </input>
                </div>
                <div>
                  <Button nome="Enviar"/>
                </div>
            </form>
        </div>
    </div>
}

export default EsqueciSenha;