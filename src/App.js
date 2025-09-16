import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


import { Header } from './Componentes/Header';
import Footer from './Componentes/Footer';
import { Contenido } from './Componentes/Contenido';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar de Bootstrap */}

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">MiProyecto</Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/inicio">Inicio</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/acerca">Pruebas</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/productos">Productos</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contacto">Contacto</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Contenedor principal para el contenido de la página */}
        <main className="container mt-4">
          {/*
            Aquí se define el sistema de rutas.
            React Router renderizará el contenido del `element` que coincida con la URL.
          */}
          <Routes>
            {/* Ruta para la página principal */}
            <Route path="/" element={<div><h2>Página Principal</h2><p>Bienvenido a la página de inicio.</p></div>} />

            {/* Ruta para el componente de Inicio */}
            <Route path="/inicio" element={<Header></Header>} />

            {/* Ruta para el componente Acerca de */}
            <Route path="/acerca" element={<div><h2>Página de nosotros</h2><p>Bienvenido a la página de nosotros</p></div>} />

            {/* Ruta para el componente Productos */}
            <Route path="/productos" element={<Contenido></Contenido>} />
            
            {/* Ruta para el componente Contacto */}
            <Route path="/contacto" element={<div><h2>Componente de Contacto</h2><p>Aquí irá el formulario de contacto.</p></div>} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;