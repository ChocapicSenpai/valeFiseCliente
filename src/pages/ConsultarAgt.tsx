import { useState } from "react"
import { Button, Card, Form} from "react-bootstrap"
import axios  from "axios"
import { Grupo } from "../components/Grupo"
import { ValesG} from "../utils/Funciones"
import {groupArrayByPeriod} from "../utils/Funciones"
const urlBase = "http://ense26ln060:5090"
import config from "../../env.json"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { useFise } from "../context/FiseContext"
type Estado = {
  loading : boolean
  error?: string | undefined
}



export function ConsultarAgt(){
  const [dni, setDni] = useState("")
  const {data, setData} = useFise()
  const [estado, setEstado]=useState<Estado>({loading:false, error:""})
  const [gVales, setGvales] = useState<ValesG[]>([])
  const [token] = useLocalStorage('token',"")
  const [agente] = useLocalStorage('agente',"")


  function consulta(){
    setGvales([])
    setEstado({loading: true})
    axios.post(`${urlBase}/valesfise/obtener`, {
      idapp: config.ID_APP,
      dni: dni
    },{ headers: {"Authorization" : `Bearer ${token}`} })
    .then(function (response) {
      if (response.status=== 200){
        const g = groupArrayByPeriod(response.data.vales)
        setGvales(g)
        setEstado({loading: false})

      }

    })
    .catch(function (error) {
      if(error.response.status=== 400){
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
    <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center" >
<h1>{`Bienvenido ${agente}` }</h1>
<Form >

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <h1> Consultar </h1>
        <Form.Label>DNI</Form.Label>
        <Form.Control type="text"  value={dni} onChange={(e)=>setDni(e.target.value)}/>
        {estado.error}
        <Button variant="primary" type="button" className="w-100" onClick={()=>consulta()}
        >
        Consultar
      </Button>
      </Form.Group>

    </Form>
{gVales.map((g)=><Grupo key={g.periodo} periodo={g.periodo} items={g.items}/>)}



    </div>)
}
