import { useState } from "react"
import { Button, Card, Form} from "react-bootstrap"
import axios  from "axios"
import { Grupo } from "../components/Grupo"
import { ValesG} from "./../utils/Funciones"
import {groupArrayByPeriod} from "./../utils/Funciones"

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
    axios.post(`${urlBase}/valesfise/obtenerfree`, {
      idapp: config.ID_APP,
      dni: dni
    })
    .then(function (response) {
      if (response.status=== 200){
        const g = groupArrayByPeriod(response.data.vales)
        setGvales(g)
        setEstado({loading: false})

      }else if(response.status=== 401){
        setEstado({loading: false, error: 'No autorizado'})
      } else{
        setEstado({loading: false, error: 'Error desconocido'})
      }

    })
    .catch(function (error) {
      setEstado({loading:false, error:error})
      console.log(error);
    });

  }
  if (estado.loading)
  return <h1>Cargando</h1>
if (estado.error)
return <h1>{`Hubo un error: ${estado.error}`}</h1>
 else
    return (
     <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center" >
    {/* <div className="row justify-content-center align-items-center" > */}
    <div className="col-md-4 col-sm-12 pe-0 ps-0" >
    <h1>Beneficiario FISE</h1>
    <Form >
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <h1> Consultar </h1>
            <Form.Label>DNI</Form.Label>
            <Form.Control type="text"  value={dni} onChange={(e)=>setDni(e.target.value)}/>
            <Button variant="primary" type="button" className="w-100" onClick={()=>consulta()}
            >
            Consultar
          </Button>
          </Form.Group>

    </Form>
{gVales.map((g)=><Grupo key={g.periodo} periodo={g.periodo} items={g.items}/>)}



    </div> 
    </div>)
}
