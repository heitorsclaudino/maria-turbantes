import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/home";
import Produtos from "./pages/Produtos/produtos";


export default function Rotas() {
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<Produtos />}/>
        </Routes>
    </BrowserRouter>}