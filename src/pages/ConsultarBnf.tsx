import { useState } from "react"
import { Button, Card, Form} from "react-bootstrap"
import axios  from "axios"
import { Grupo } from "../components/Grupo"
import { ValesG} from "./../utils/Funciones"
import {groupArrayByPeriod} from "./../utils/Funciones"
import "./styles.css"

const urlBase = "http://ense26ln060:5090"
import config from "../../env.json"
type Estado = {
  loading : boolean
  error?: string | undefined
}


export function ConsultarBnf(){
  const [dni, setDni] = useState("")
  const [estado, setEstado]=useState<Estado>({loading:false, error:""})
  const [gVales, setGvales] = useState<ValesG[]>([])

  function consulta(){
    setEstado({loading: true})
    setGvales([])
    axios.post(`${urlBase}/valesfise/obtenerfree`, {
      idapp: config.ID_APP,
      dni: dni
    })
    .then(function (response) {
      if (response.status=== 200){
        const g = groupArrayByPeriod(response.data.vales)
        setGvales(g)
        setEstado({loading: false})

      }

    })
    .catch(function (error) {
      if(error.response.status=== 400){
        // cambio
        setEstado({loading: false, error: 'DNI inválido'})
      } else{
        setEstado({loading: false, error: error.message})
      }
    });

  }
  if (estado.loading)
  return <h1>Cargando</h1>
 else
    return (

<div className="p-4">
    <h2 className="text-center">Beneficiario FISE</h2>
    <Form >
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

            <Form.Label className="mt-4">DNI</Form.Label>
            <Form.Control type="text"  value={dni} onChange={(e)=>setDni(e.target.value)}/>
            <div className="text-danger">{estado.error}</div>
            <Button variant="primary" type="button" className="w-100 mt-2" onClick={()=>consulta()}
            >
            Consultar
          </Button>
          </Form.Group>

        </Form>
    {gVales.map((g)=><Grupo key={g.periodo} periodo={g.periodo} items={g.items}/>)}

</div>          )
}
