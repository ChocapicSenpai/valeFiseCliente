import { useState } from "react"
import { Button, Card, Form} from "react-bootstrap"
import axios  from "axios"
import { Grupo } from "../components/Grupo"
import { ValesG, isNumber} from "../utils/Funciones"
import {groupArrayByPeriod} from "../utils/Funciones"
import {config} from "./../config/"

import { useLocalStorage } from "../hooks/useLocalStorage"
import { useFise } from "../context/FiseContext"
import Spinner from 'react-bootstrap/Spinner';
type Estado = {
  loading : boolean
  error?: string | undefined
}

export function ConsultarAgt(){
  const [dni, setDni] = useState("")
  const [estado, setEstado]=useState<Estado>({loading:false, error:""})
  const [gVales, setGvales] = useState<ValesG[]>([])
  const [token] = useLocalStorage('token',"")
  const [agente] = useLocalStorage('agente',"")

  function setValor(valor:string){
    if (isNumber(valor))
      setDni(valor)
  }

  function consulta(){
    if (!dni || dni === ""){
      setEstado({loading: false, error:"Ingrese DNI"})
      return
    }
    if (dni.length !== 8){
      setEstado({loading: false, error:"DNI debe ser 8 dígitos"})
      return
    }
    setGvales([])
    setEstado({loading: true})
    axios.post(`${config.urlBase}/obtener`, {
      idapp: config.idApp,
      dni: dni
    },{ headers: {"Authorization" : `Bearer ${token}`},timeout: config.timeOut })
    .then(function (response) {
      if (response.status=== 200){
        const g = groupArrayByPeriod(response.data.vales)
        setGvales(g)
        setEstado({loading: false})

      }

    })
    .catch(function (error) {

      if(error.response?.status=== 400){
        setEstado({loading: false, error: error.response.data.message})
      } else{
        setEstado({loading: false, error: error.message})
      }
    });

  }
  if (estado.loading)
  return (
    <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
<Spinner animation="border" role="status" variant="primary">
      <span className="visually-hidden">Loading...</span>
    </Spinner>

    </div>
    )
    return (

    <div className="p-4">
      <h2>Bienvenido Agente</h2>
      <h2>{`${agente}` }</h2>
      <Form >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="mt-4">DNI </Form.Label>
              <Form.Control type="text"   value={dni} onChange={(e)=>setValor(e.target.value)} maxLength={8}/>

        <div className="text-danger">{estado.error}</div>
              <Button variant="primary" type="button" className="w-100 mt-2" onClick={()=>consulta()}
              >
              Consultar
            </Button>
            </Form.Group>
          </Form>

          {gVales.map((g)=><Grupo key={g.periodo} periodo={String(g.periodo)} items={g.items}/>)}
    </div>)

}
