

export default function ComponentePadre(){

    const handleClickPadre = () => {
        
        console.log("Se ha hecho click en el componente Padre.")
        alert("¡Botón clickeado! Hijo padre")
    }

    return (

        <div onClick={handleClickPadre}>
            <p>Component Padre</p>
            <ComponenteHijo />
        </div>
    )
}

function ComponenteHijo(){

    const handleClickHijo = (event) => {
        console.log("Se ha hecho click  en el componente Hijo.")
        alert("Click en el componente Hijo.")

    }

    return <button onClick={handleClickHijo}>Click</button>
}