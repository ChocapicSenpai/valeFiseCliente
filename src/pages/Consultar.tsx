import { useState } from "react"
import { Button, Card, Form} from "react-bootstrap"
import axios  from "axios"
import {useFise} from "./../context/FiseContext"
const urlBase = "http://ense26ln060:5090"
import config from "../../env.json"
type Estado = {
  loading : boolean
  error?: string | undefined
}
type ValeProps = {
  idVale: string
  dni: string
  nroVale: string
  periodo: string
  fcaducidad: string
}

function Vale({idVale, dni, nroVale, periodo, fcaducidad}:ValeProps){
  return (
<Card className="h-100">
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span className="fs-2">{idVale}</span>

                </Card.Title>
                <div className="mt-auto">
                    {`Nro Vale: ${nroVale}`}
                </div>
            </Card.Body>
        </Card>
  )
}
export function Consultar(){
  const [dni, setDni] = useState("")
  const [estado, setEstado]=useState<Estado>({loading:false, error:""})
  const [vales, setVales] = useState<ValeProps[]>([])
  function consulta(dni: string){
    const {data, setData} = useFise()

    axios.post(`${urlBase}/valesfise/obtener`, {
      idapp: config.ID_APP,
      dni: dni
    },{ headers: {"Authorization" : `Bearer ${data.token}`} })
    .then(function (response) {
      if (response.status=== 200){
        setVales(response.data.vales)
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
<h1>Relacion de vales FISE</h1>
<Form >

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <h1> Consultar </h1>
        <Form.Label>DNI</Form.Label>
        <Form.Control type="text"  value={dni} onChange={(e)=>setDni(e.target.value)}/>
        <Button variant="primary" type="button" className="w-100"
        >
        Consultar
      </Button>
      </Form.Group>

    </Form>
{vales.map((vale)=><Vale {...vale}/>)}



    </div>)
}
