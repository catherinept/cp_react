import React from 'react';
import { Link } from 'react-router-dom';

const productos = [
  { id: 850221, nombre: 'Arnes Industrial', precio: 132000 },
  { id: 900315, nombre: 'Botas Industriales', precio: 84000 },
  { id: 601122, nombre: 'Casco', precio: 96000 },
  { id: 430703, nombre: 'Gafas', precio: 19000 },
  { id: 2607182, nombre: 'Guantes', precio: 56000 },
  { id: 837793, nombre: 'Tapa Oído', precio: 9000 },
  { id: 460783, nombre: 'Arena', precio: 190000 },
  { id: 163718, nombre: 'Grava', precio: 266000 },
  { id: 537690, nombre: 'Ladrillo', precio: 2900 },
];

function ItemListContainer() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2>Catálogo de Productos</h2>
          <ul>
            {productos.map((producto) => (
              <li key={producto.id}>
                <Link to={`/item/${producto.id}`}>
                  {producto.nombre} - ${producto.precio.toFixed(2)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ItemListContainer;
