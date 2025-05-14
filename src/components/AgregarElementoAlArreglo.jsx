import { useState } from "react";


export default function AgregarItemArreglo(){

    const [items, setItems] = useState(["perro", "gato", "pato", "caballo", "conejo"])
    const agregarItem = () => {
        setItems([...items, 'ganzo'])
    }

    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
                <li></li>
            </ul>
            <h3>Agregar elemento al arreglo (Ganzo)</h3>
            <button onClick={agregarItem}>Agregar item (Ganzo)</button>
        </div>
    )
}