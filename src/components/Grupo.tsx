import { Button, Card, Form} from "react-bootstrap"
import { ValeC } from "./Vale"
import {ValesG} from "./../utils/Funciones"
import { getStringPeriod } from "../utils/StringPeriod"
export function Grupo({periodo, items}:ValesG) {

  return (
   <>

<div className="card text-dark bg-light mb-3">
  <div className="card-body ps-0 pe-0 pb-0">
    <div className="card-title">
    <h2 className="ps-2 text-center">{getStringPeriod(periodo)}</h2>
    </div>
    {items.map((vale)=><ValeC key={vale.idVale} {...vale}/>)}
  </div>
</div>

    </>
  )
}
