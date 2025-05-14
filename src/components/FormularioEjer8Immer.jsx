import { useState } from "react";
import { produce } from "immer";

export default function FormularioProductoImmer() {
  const [producto, setProducto] = useState({
    nombre: "Laptop",
    precio: 1200,
    detalles: {
      marca: "XYZ",
      modelo: "Pro 15"
    }
  });

  const handleNombreChange = (event) => {
    setProducto(
      produce((draft) => {
        draft.nombre = event.target.value;
      })
    );
  };

  const handleMarcaChange = (event) => {
    setProducto(
      produce((draft) => {
        draft.detalles.marca = event.target.value;
      })
    );
  };

  return (
    <div>
      <h3>Formulario Producto usando Immer</h3>
      <input type="text" value={producto.nombre} onChange={handleNombreChange} />
            <input type="text" value={producto.detalles.marca} onChange={handleMarcaChange} />
            <p>Nombre: {producto.nombre}</p>
            <p>Marca: {producto.detalles.marca}</p>
    </div>
  );
}
