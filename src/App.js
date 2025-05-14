import logo from './logo.svg';
import './App.css';
import Boton from './components/Boton1';
import Boton3props from './components/Mostrar3props';
import  ComponentePadre from './components/HijoPadre4';
import  ComponenteHijo from './components/HijoPadre4';

import ComponentePadreStop from './components/DetenerPropagacion5';
import ComponenteHijoStop from './components/DetenerPropagacion5';

import ContadorTimeout from './components/ContadorsetTimeout';
import FormularioProducto from './components/FormularioEjer7';
import FormularioProductoImmer from './components/FormularioEjer8Immer';
import AgregarItemArreglo from './components/AgregarElementoAlArreglo';
import FormularioProducto2 from './components/Ejercicio10';


function App() {
  const manejarOnClick2 = (id) =>{
  console.log(`Botón clickeado con el id ${id}`)
  }

  const manejarOnClick = (usuario) =>{
  console.log(`El usuario ${usuario} ha clickeado el botón.`)
  }
  return (
    <div className="App">
      <hr>
      </hr>
      <Boton /> 
      <hr>
      </hr>
      <Boton3props 
        texto="Enviar"
        mensaje="Botón clickeado, se están manejando 3 props"
        usuario="Lino Paul"
        onClick={manejarOnClick}
      />
      <hr>
      </hr>
      <ComponenteHijo onClick={manejarOnClick2} id={123}/>
      <ComponentePadre />
      <hr>
      </hr>
      <ComponenteHijoStop onClick={manejarOnClick2} id={345}/>
      <ComponentePadreStop />
      <hr>
      </hr>
      <ContadorTimeout />
      <hr>
      </hr>
      <FormularioProducto />
      <hr>
      </hr>
      <FormularioProductoImmer />
      <hr>
      </hr>
      <AgregarItemArreglo />
      <hr>
      </hr>
      <FormularioProducto2 />
    </div>
  );
}

export default App;

