

export default function ComponentePadreStop(){

    const handleClickPadre = () => {
        
        console.log("Se ha hecho click en el componente Padre.")
    }

    return (

        <div onClick={handleClickPadre}>
            <p>Component Padre Stop</p>
            <ComponenteHijoStop />
        </div>
    )
}

function ComponenteHijoStop(){

    const handleClickHijo = (event) => {
        //Para detener la propagación del evento al componente Padre
        event.stopPropagation()
        console.log("Se ha hecho click en el componente Hijo.")
        alert("Click en el componente Hijo.")
    }

    return <button onClick={handleClickHijo}>Click</button>
}