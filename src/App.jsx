import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/organisms/Navbar"; 
import Home from "./pages/Home";
import IniciarSesion from "./pages/IniciarSesion";

function App() {
    return (
        <div className="app-container">
            <NavBar />             
            <main className="contenido-main">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/iniciarsesion" element={<IniciarSesion />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;