import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import producto1Image from '../assets/arnes.jpeg';
import producto2Image from '../assets/botas.jpeg';
import producto3Image from '../assets/casco.jpeg';
import producto4Image from '../assets/gafas.jpeg';
import producto5Image from '../assets/guantes.jpeg';
import producto6Image from '../assets/tapaoido.jpeg';
import producto7Image from '../assets/matcons-arena.jpg';
import producto8Image from '../assets/matcons-grava.jpg';
import producto9Image from '../assets/matcons-ladrillo.jpg';

const productos = [
  { id: 850221, nombre: 'Arnes Industrial', precio: 132000, imagen: producto1Image },
  { id: 900315, nombre: 'Botas Industriales', precio: 84000, imagen: producto2Image },
  { id: 601122, nombre: 'Casco', precio: 96000, imagen: producto3Image },
  { id: 430703, nombre: 'Gafas', precio: 19000, imagen: producto4Image },
  { id: 260712, nombre: 'Guantes', precio: 56000, imagen: producto5Image },
  { id: 837793, nombre: 'Tapa Oído', precio: 9000, imagen: producto6Image },
  { id: 460783, nombre: 'Arena', precio: 190000, imagen: producto7Image },
  { id: 163718, nombre: 'Grava', precio: 266000, imagen: producto8Image },
  { id: 537690, nombre: 'Ladrillo', precio: 2900, imagen: producto9Image },
];

const Catalog = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2 className="titulo">Catálogo de Productos</h2>
          <ul className="puntos">
            {productos.map((producto) => (
              <li key={producto.id}>
                <Link to={`/item/${producto.id}`}>
                  <div className="producto">
                    <img src={producto.imagen} alt={producto.nombre} className="product-image" /> 
                    <div>
                      <h4 className="lineas">{producto.nombre}</h4>
                      <p>Precio: ${producto.precio.toFixed(2)}</p>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Catalog;

