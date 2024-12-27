import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login.jsx";
import Cadastro from "../pages/Cadastro/Cadastro.jsx";
import EsqueciSenha from "../pages/EsqueciSenha/EsqueciSenha.jsx";
import PaginaPrincipal from "../pages/PaginaPrincipal/PaginaPrincipal.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="cadastro" element={<Cadastro />} />
        <Route path="esquecisenha" element={<EsqueciSenha />} />
        <Route path="paginaPrincipal" element={<PaginaPrincipal />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;


