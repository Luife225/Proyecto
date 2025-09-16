import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export const Header = () => {
  return (
    <div>
      {/* Barra superior */}
      <header className="bg-success text-white text-center py-3 shadow-sm">
        <h1 className="fw-bold">Farma CIA</h1>
        <p className="mb-0">Tu farmacia de confianza</p>
      </header>

      {/* Carrusel */}
      <div id="carouselFarmaCIA" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://www.farmaconsulting.es/wp-content/uploads/2018/11/01461-604x321.jpg"
              className="d-block w-100"
              alt="Medicamentos"
              style={{ maxHeight: "500px", objectFit: "cover" }}
            />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
              <h5>Medicamentos de calidad</h5>
              <p>Productos certificados para tu salud y bienestar.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://www.asefarma.com/wp-content/uploads/2019/04/como-se-atiende-en-la-farmacia.jpg"
              className="d-block w-100"
              alt="Atención en farmacia"
              style={{ maxHeight: "500px", objectFit: "cover" }}
            />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
              <h5>Atención personalizada</h5>
              <p>Te asesoramos con dedicación y confianza.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtNtzW9ThGdv963Qh2Si1ysCHsjSFUIgbnhg&s"
              className="d-block w-100"
              alt="Salud preventiva"
              style={{ maxHeight: "500px", objectFit: "cover" }}
            />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
              <h5>Salud preventiva</h5>
              <p>Encuentra vitaminas y suplementos para tu bienestar.</p>
            </div>
          </div>
        </div>

        {/* Botones de control */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselFarmaCIA"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselFarmaCIA"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>

      {/* Sección bienvenida */}
      <section className="container my-5">
        <div className="text-center">
          <h2 className="fw-bold text-success">Bienvenido a Farma CIA</h2>
          <p className="lead">
            Nos especializamos en productos farmacéuticos, cuidado personal y suplementos de alta calidad.
          </p>
        </div>
      </section>

      {/* Sección productos destacados */}
      <section className="container my-5">
        <h3 className="fw-bold text-success mb-4">Productos destacados</h3>
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="card shadow-sm h-100">
              <img
                src="https://tufarmaciavirtual.com/cache/medium/product/2650/vDke9BmBnaduAkSgTUphhnvtkzSTsXwbIwJpSmgp.jpg"
                className="card-img-top"
                alt="Medicamento"
              />
              <div className="card-body">
                <h5 className="card-title">Analgésicos</h5>
                <p className="card-text">Alivio rápido y seguro para tus dolores.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card shadow-sm h-100">
              <img
                src="https://tufarmaciavirtual.com/cache/medium/product/4056/58hJS7CsrvimA5SDcyV6UBcPMmSVbFpz6h3XHbef.jpg"
                className="card-img-top"
                alt="Vitaminas"
              />
              <div className="card-body">
                <h5 className="card-title">Vitaminas</h5>
                <p className="card-text">Refuerza tus defensas y tu energía diaria.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card shadow-sm h-100">
              <img
                src="https://tufarmaciavirtual.com/cache/medium/product/3712/gCMVtBiFTEZMZ3L2gvl90TDh5ho3hkm2Fe13WKCc.jpg"
                className="card-img-top"
                alt="Cuidado personal"
              />
              <div className="card-body">
                <h5 className="card-title">Cuidado personal</h5>
                <p className="card-text">Todo lo que necesitas para tu bienestar diario.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
