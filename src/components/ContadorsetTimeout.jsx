import React, { useState } from "react";

export default function ContadorTimeoutEjericio5(){

    const [contador, setContador] = useState(0)

    const incrementarContador = () => {

        setTimeout(() => {
            console.log("Contador dentro del setTimeout antes", contador)
            
            setContador(contador + 1)

            console.log("Contador dentro del setTimeout después", contador)
            alert("Contador dentro del setTimeout después")
        }, 3500);
    }

    return (
        <div>
           <p>Contador: {contador}</p>
           <button onClick={incrementarContador} type="button">Incrementar timeout (Ejericio 6)</button>
        </div>
    )
}