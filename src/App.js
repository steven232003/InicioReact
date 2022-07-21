import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Producto from "./components/producto";
import Carrito from "./components/Carrito";

function App() {
  //Crear Listado de productos
  const [productos, guardarProductos] = useState([
    { id: 1, nombre: "Camisa React", precio: 50 },
    { id: 2, nombre: "Camisa Express", precio: 40 },
    { id: 3, nombre: "Camisa Electron", precio: 35 },
    { id: 4, nombre: "Camisa Vue", precio: 25 },
  ]);

  //state carrito de compras
  const [carrito, agregarProductos] = useState([]);



  
  // Fecha Actual
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header titulo="Tienda virtual" />

      <h1>Lista de Productos</h1>
      {productos.map((producto) => (
        <Producto
          producto={producto}
          key={producto.id}
          carrito={carrito}
          productos={productos}
          agregarProductos={agregarProductos}
        />
      ))}

      <Carrito carrito={carrito} agregarProductos={agregarProductos} />

      <Footer fecha={fecha} />
    </Fragment>
  );
}

export default App;
