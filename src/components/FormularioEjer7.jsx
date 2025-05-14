import { useState } from "react";




export default function FormularioProducto() {
  const [producto, setProducto] = useState({
    nombre: "Laptop",
    precio: 1200,
    detalles: {
      marca: "XYZ",
      modelo: "Pro 15"
    }
  });

    const handleNombreChange = (event)=>{
        setProducto({
            ...producto,
            nombre: event.target.value
        })
    }

    const handleMarcaChange = (event)=>{
        setProducto({
            ...producto,
            detalles:{
                ...producto.detalles,
                marca: event.target.value
            }
        })
    }

    return (
        <div>
            <h3>Formulario Producto sin Immer</h3>
            <input type="text" value={producto.nombre} onChange={handleNombreChange} />
            <input type="text" value={producto.detalles.marca} onChange={handleMarcaChange} />
            <p>Nombre: {producto.nombre}</p>
            <p>Marca: {producto.detalles.marca}</p>
        </div>
    )
}