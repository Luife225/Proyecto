import React from 'react'

export const Contenido = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <h2 className="text-center mb-4">Inventario de Farmacia</h2>
          
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th scope="col">Código</th>
                <th scope="col">Medicamento</th>
                <th scope="col">Categoría</th>
                <th scope="col">Stock</th>
                <th scope="col">Precio</th>
                <th scope="col">Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">M001</th>
                <td>Paracetamol 500mg</td>
                <td><span className="badge bg-primary">Analgésico</span></td>
                <td>150</td>
                <td>S/ 8.50</td>
                <td><span className="badge bg-success">Disponible</span></td>
              </tr>
              <tr>
                <th scope="row">M002</th>
                <td>Amoxicilina 500mg</td>
                <td><span className="badge bg-warning">Antibiótico</span></td>
                <td>45</td>
                <td>S/ 25.00</td>
                <td><span className="badge bg-warning">Bajo Stock</span></td>
              </tr>
              <tr>
                <th scope="row">M003</th>
                <td>Omeprazol 20mg</td>
                <td><span className="badge bg-info">Antiácido</span></td>
                <td>80</td>
                <td>S/ 15.75</td>
                <td><span className="badge bg-success">Disponible</span></td>
              </tr>
              <tr>
                <th scope="row">M004</th>
                <td>Ibuprofeno 400mg</td>
                <td><span className="badge bg-primary">Analgésico</span></td>
                <td>5</td>
                <td>S/ 12.00</td>
                <td><span className="badge bg-danger">Agotándose</span></td>
              </tr>
              <tr>
                <th scope="row">M005</th>
                <td>Loratadina 10mg</td>
                <td><span className="badge bg-secondary">Antihistamínico</span></td>
                <td>95</td>
                <td>S/ 18.50</td>
                <td><span className="badge bg-success">Disponible</span></td>
              </tr>
              <tr>
                <th scope="row">M006</th>
                <td>Aspirina 100mg</td>
                <td><span className="badge bg-primary">Analgésico</span></td>
                <td>0</td>
                <td>S/ 6.75</td>
                <td><span className="badge bg-dark">Agotado</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}