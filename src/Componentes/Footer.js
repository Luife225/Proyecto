import React from "react";

export default function Footer() {
  return (
    <footer className="bg-success text-white mt-5">
      <div className="container py-4">
        <div className="row">
          {/* Logo y descripción */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Farma CIA</h5>
            <p className="small">
              Tu farmacia de confianza. Brindamos productos de calidad y el mejor servicio para cuidar tu salud.
            </p>
          </div>

          {/* Links rápidos */}
          <div className="col-md-4 mb-3">
            <h6 className="fw-bold">Enlaces rápidos</h6>
            <ul className="list-unstyled">
              <li><a href="#productos" className="text-white text-decoration-none">Productos</a></li>
              <li><a href="#ofertas" className="text-white text-decoration-none">Ofertas</a></li>
              <li><a href="#contacto" className="text-white text-decoration-none">Contáctanos</a></li>
              <li><a href="#nosotros" className="text-white text-decoration-none">Nosotros</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="col-md-4 mb-3">
            <h6 className="fw-bold">Contáctanos</h6>
            <p className="small mb-1">📍 Av. Nicolas de Pierola, Trujillo - Perú</p>
            <p className="small mb-1">📞 +51 999 699 234</p>
            <p className="small mb-1">✉️ github@farmacia.com</p>
            <div>
              <a href="https://facebook.com" className="me-2 text-white"><i className="bi bi-facebook"></i></a>
              <a href="https://instagram.com" className="me-2 text-white"><i className="bi bi-instagram"></i></a>
              <a href="https://twitter.com" className="text-white"><i className="bi bi-twitter-x"></i></a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-dark text-center py-2">
        <small>© 2025 Farma CIA - Todos los derechos reservados</small>
      </div>
    </footer>
  );
}
