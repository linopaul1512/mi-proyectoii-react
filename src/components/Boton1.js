

export default function Boton(props){

    const handleClick = () => {
        alert("¡Botón clickeado! ejerccio 1 del examen")
    }

    return (
        <button onClick={handleClick}>Clickeame</button>
    )
}