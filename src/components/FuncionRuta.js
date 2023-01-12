
import { useState } from "react";

function FuncionRuta() {
    const [isShown, setIsShown] = useState(false);
    const [buttIndex, setButtIndex] = useState(0);

    const handleClick = event => {
        event.preventDefault();
        
        setIsShown(current => !current);
        setButtIndex(Number(event.target.id))

    };
    return (
        <div>
            <h1>Funcion que les puede servir hasta que veamos la rutas</h1>
            <div>
                <button id={1} onClick={handleClick}>boton 1</button>
                {isShown && buttIndex === 1 && <p>boton 1 </p>}
            </div>
            <div>
                <button id={2} onClick={handleClick}>boton 2</button>
                {isShown && buttIndex === 2 && <h1>boton 2 </h1>}
            </div>
        </div>
    );
  }
  
  export default FuncionRuta;
