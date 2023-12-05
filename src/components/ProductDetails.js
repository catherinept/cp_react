import React from 'react';
import { useParams } from 'react-router-dom';
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
  { id: 850221, nombre: 'Arnes Industrial', precio: 132000, descripcion: 'Arnes industrial con hebillas y argollas laterales y de cadera. Pasadores de plásticos y tensor dorsal en tirantas.', imagen: producto1Image },
  { id: 900315, nombre: 'Botas Industriales', precio: 84000, descripcion: 'Bota industrial para construcción e industria livina. Viene en capellada de cuero y forro textil.', imagen: producto2Image },
  { id: 601122, nombre: 'Casco', precio: 96000, descripcion: 'Casco industrial en general, refinería y minería. Resistente a golpes y rayaduras, cuenta con 4 puntos de apoyo, slot lateral universal compatible con protectores auditivos tipo copa y visores faciales, visera corta y tafilete con banda antisudor.', imagen: producto3Image },
  { id: 430703, nombre: 'Gafas', precio: 19000, descripcion: 'Gafas de seguridad industrial con marco en nylon. Brazo entensible ajustable a 4 posiciones y protección lateral.', imagen: producto4Image },
  { id: 260712, nombre: 'Guantes', precio: 56000, descripcion: 'Par guante ergo en material cuero tela. Garantía de 60 días por defectos de fábrica.', imagen: producto5Image },
  { id: 837793, nombre: 'Tapa Oído', precio: 9000, descripcion: 'Protector de oido tipo copa para construcción. Es un protector auditivo dieléctrico ya que no posee componentes metálicos. Posee un espacio para generar el acople a todo tipo de orejas.', imagen: producto6Image },
  { id: 460783, nombre: 'Arena', precio: 190000, descripcion: 'Arena para construcción. Aplicación y uso para muros, paredes, divisiones y estructuras.', imagen: producto7Image },
  { id: 163718, nombre: 'Grava', precio: 266000, descripcion: 'Grava para construcción. Se recomienda aplicar sobre una superficie plana, libre de humedad y cubrir de la lluvia.', imagen: producto8Image },
  { id: 537690, nombre: 'Ladrillo', precio: 2900, descripcion: 'Ladrillo de alta calidad, resistente y duradero, compacto en su estructura con garantía de 1 año.', imagen: producto9Image },
];




function ProductDetail() {
  const { id } = useParams();

  const producto = productos.find((producto) => producto.id === Number(id));

  if (!producto) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2 className="titulo">Detalles del Producto</h2>
          <img src={producto.imagen} alt={producto.nombre} className="product-image" />
          <p>ID: {producto.id}</p>
          <p>Nombre: {producto.nombre}</p>
          <p>Precio: ${producto.precio.toFixed(2)}</p>
          <p>Descripción: {producto.descripcion}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;