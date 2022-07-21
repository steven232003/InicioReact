import React from "react";

const Producto = ({ producto, carrito, agregarProductos, productos }) => {
  const { nombre, precio, id } = producto;

  const SelecionarProducto = (id) => {
    const productos = carrito.filter((producto) => producto.id === id)[0];
    agregarProductos([...carrito, producto]);
  };

  const eliminarProducto = (id) => {
    const producto = carrito.filter((producto) => producto.id !== id);
    agregarProductos(producto);
  };

  return (
    <div>
      <h2>{producto.nombre}</h2>
      <p>{precio}</p>

      {productos ? (
        <button type="button" onClick={() => SelecionarProducto(id)}>
          Comprar{" "}
        </button>
      ) : (
        <button type="button" onClick={() => eliminarProducto(id)}>
          Eliminar{" "}
        </button>
      )}
    </div>
  );
};

export default Producto;
