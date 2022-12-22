import { Button, Card, Form} from "react-bootstrap"
import {Vale} from "./../utils/Funciones"

export function ValeC({nroVale, tipoGen,  periodo, fcaducidad}:Vale){
  return (

    <div className="card">
      <div className="card-body">
        <div className="card-title">
          <span className="fs-2">{`Vale: ${nroVale}`}</span>
        </div>
        <p className="card-text">
        {`Caduca: ${fcaducidad}`}
        <br/>
        {`Tipo: ${tipoGen}`}
        </p>

      </div>
    </div>


  ) 
}
