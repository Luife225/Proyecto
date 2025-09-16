import React from 'react'

export const Contenido = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <h2 className="text-center mb-4">Tabla de Contenido</h2>
          
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Título</th>
                <th scope="col">Categoría</th>
                <th scope="col">Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Introducción a React</td>
                <td><span className="badge bg-primary">Tutorial</span></td>
                <td><span className="badge bg-success">Completado</span></td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Componentes y Props</td>
                <td><span className="badge bg-primary">Tutorial</span></td>
                <td><span className="badge bg-warning">En progreso</span></td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Estado y Ciclo de Vida</td>
                <td><span className="badge bg-info">Conceptos</span></td>
                <td><span className="badge bg-secondary">Pendiente</span></td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Manejo de Eventos</td>
                <td><span className="badge bg-primary">Tutorial</span></td>
                <td><span className="badge bg-secondary">Pendiente</span></td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Hooks en React</td>
                <td><span className="badge bg-danger">Avanzado</span></td>
                <td><span className="badge bg-secondary">Pendiente</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}