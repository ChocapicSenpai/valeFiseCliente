import { Button, Card, Form} from "react-bootstrap"
import { ValeC } from "./Vale"
import {ValesG} from "./../utils/Funciones"
export function Grupo({periodo, items}:ValesG) {
  return (
   <>

<div className="card text-dark bg-light mb-3">
  <div className="card-body p-0">
    <div className="card-title">
    <h2 className="ps-2">{periodo}</h2>
    </div>
    {items.map((vale)=><ValeC key={vale.idVale} {...vale}/>)}
  </div>
</div>

    </>
  )
}
