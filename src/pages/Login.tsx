
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import config from "../../env.json"
import { useState } from 'react';
import axios  from "axios"
import {useFise} from "./../context/FiseContext"

type InputEvent = React.ChangeEvent<HTMLInputElement>;
type Estado = {
  loading : boolean
  error?: string | undefined
}
export function Login() {
  const {data, setData} = useFise();
  const navigate = useNavigate();

  const [estado, setEstado]=useState<Estado>({loading:false, error:""})
 const urlBase = "http://ense26ln060:5090"


 const validar = ()=>{
  setEstado({loading:true})
  axios.post(`${urlBase}/autenticacion/login`, {
    idapp: config.ID_APP,
    telefono: data.telefono
  })
  .then(function (response) {

    console.log(response);
    if (response.status=== 200){
      const {token} = response.data
      setData({...data,token})
      setEstado({loading: false})
      navigate(`/validar`)
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
  setEstado({loading: false})

}

 if (estado.loading)
  return <h1>Cargando</h1>
if (estado.error)
return <h1>{`Hubo un error: ${estado.error}`}</h1>
 else
  return (
    <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center" >

      <Form >

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <h1> Beneficiario FISE</h1>
        <Form.Label>Telefono</Form.Label>
        <Form.Control type="text"  value={data.telefono} onChange={(e: InputEvent)=>setData({...data,telefono:e.target.value})}/>
        <Button variant="primary" type="button" className="w-100" onClick={() => validar()}>
        Enviar
      </Button>
      </Form.Group>

    </Form>
    </div>
  )
}
