
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import config from "../../env.json"
import { useState } from 'react';
import axios  from "axios"
import {useFise} from "./../context/FiseContext"
import Spinner from 'react-bootstrap/Spinner';

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

    if (response.status=== 200){
      const {token} = response.data
      setData({...data,token})
      setEstado({loading: false})
      navigate(`/validar`)
    }
  })
  .catch(function (error) {
    console.log(error)
    if(error.response.status=== 401){
      setEstado({loading: false, error: 'Acceso no autorizado'})
    } else{
      setEstado({loading: false, error: error.message})
    }

  });
  setEstado({loading: false})

}

if (estado.loading)
return (
  <Spinner animation="border" role="status" variant="primary">
    <span className="visually-hidden">Loading...</span>
  </Spinner>)
  return (

<div className="p-4">
  <Form >
    <Form.Group controlId="exampleForm.ControlInput1">
        <h2>Ingresa tu número de teléfono para validar tu acceso:</h2>
          <Form.Label className="mt-4">Telefono</Form.Label>
          <Form.Control type="text"  value={data.telefono} onChange={(e: InputEvent)=>setData({...data,telefono:e.target.value})}/>
          <div className="text-danger">{estado.error}</div>
          <Button variant="primary" type="button" className="w-100 mt-2" onClick={() => validar()}>
          Enviar
        </Button>
        </Form.Group>
  </Form>    
</div>

  )
}
