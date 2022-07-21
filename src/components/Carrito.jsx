import React from "react";
import "./Style.css";
import Producto from "./producto";

const Carrito = ({ carrito, agregarProductos }) => (
  <div className="carrito">
    <h2> Carrito de Compras </h2>

    {carrito.length === 0 ? (
      <p>Esta Vacio el Carrito</p>
    ) : (
      carrito.map((producto) => (
        <Producto
          key={producto.id}
          producto={producto}
          carrito={carrito}
          agregarProductos={agregarProductos}
        />
      ))
    )}
  </div>
);

export default Carrito;
