import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import EsqueciSenha from "./pages/EsqueciSenha";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login/>} />
        <Route path="cadastro" element={<Cadastro/>} />
        <Route path="esquecisenha" element={<EsqueciSenha/>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;


