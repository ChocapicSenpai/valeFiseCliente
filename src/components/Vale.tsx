import { Button, Card, Form} from "react-bootstrap"
import {Vale} from "./../utils/Funciones"

export function ValeC({nroVale, tipoGen,  periodo, fcaducidad}:Vale){
  return (
<Card className="h-100">
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span className="fs-2">{`Vale: ${nroVale}`}</span>
                </Card.Title>
                <div className="mt-auto">
                  <Card.Text>
                  {`Caduca: ${fcaducidad}`}
                  <br/>
                  {`Tipo: ${tipoGen}`}
                  </Card.Text>

                </div>
            </Card.Body>
        </Card>
  )
}
