import { useState } from "react";

export default function FormularioProducto2() {
  const [producto, setProducto] = useState({
    nombre: "Laptop",
    precio: 1200,
    detalles: {
      marca: "XYZ",
      modelo: "Pro 15"
    }
  });

  const modificarPrecioYModelo = () => {
    const precioActual = producto.precio;
    const modeloActual = producto.detalles.modelo;

    setProducto({
      ...producto,
      precio: 400, 
      detalles: {
        ...producto.detalles,
        modelo: "3000" 
      }
    });

    console.log("Precio antes:", precioActual);
    console.log("Modelo antes:", modeloActual);
  };

  return (
    <div>
      <h3>Formulario Producto Ejercicio 10</h3>
      <button onClick={modificarPrecioYModelo}>Modificar</button>
      <p>Nombre: {producto.nombre}</p>
      <p>Precio: {producto.precio}</p>
      <p>Marca: {producto.detalles.marca}</p>
      <p>Modelo: {producto.detalles.modelo}</p>
    </div>
  );
}
