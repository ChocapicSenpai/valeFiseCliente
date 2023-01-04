import { Button, Card, Form} from "react-bootstrap"
import {Vale} from "./../utils/Funciones"

export function ValeC({nroVale, tipoGen,  periodo, fcaducidad}:Vale){
  return (

    <div className="card rounded-1 border-0 border-top mb-0">
      <div className="card-body">
        <div className="card-title">
          <span className="fs-2">{`${nroVale}`}</span>
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
