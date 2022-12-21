import { Button, Card, Form} from "react-bootstrap"
import { ValeC } from "./Vale"
import {ValesG} from "./../utils/Funciones"
export function Grupo({periodo, items}:ValesG) {
  return (
   <>
    <Card className="h-100">
    <Card.Body className="d-flex flex-column">
    <Card.Title className="d-flex center ">
    <h1>{periodo}</h1>
    </Card.Title>

    {items.map((vale)=><ValeC key={vale.idVale} {...vale}/>)}
    </Card.Body>
    </Card>
    </>
  )
}
