import { Button, Card, Form} from "react-bootstrap"
import { ValeC } from "./Vale"
import {ValesG} from "./../utils/Funciones"
import { getStringPeriod } from "../utils/StringPeriod"
export function Grupo({periodo, items}:ValesG) {

  return (
   <>

<div className="card text-dark bg-light">
  <div className="card-body">
    <div className="card-title">
    <h1>{getStringPeriod(periodo)}</h1>
    </div>
    {items.map((vale)=><ValeC key={vale.idVale} {...vale}/>)}
  </div>
</div>

    </>
  )
}
