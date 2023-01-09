
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios  from "axios"
import {config} from "./../config/"
import {useFise} from "./../context/FiseContext"
import { useLocalStorage } from '../hooks/useLocalStorage';
import Spinner from 'react-bootstrap/Spinner';

type InputEvent = React.ChangeEvent<HTMLInputElement>;
type Estado = {
  loading : boolean
  error?: string | undefined
}

export function Validar() {
  const location = useLocation()
  const {data, setData} = useFise()
  const navigate = useNavigate();
  const [token, setToken] = useLocalStorage('token',"");
  const [agente, setAgente] = useLocalStorage('agente',"");
  const [estado, setEstado]=useState<Estado>({loading:false, error:""})


  const validate = ()=>{

    if (!data.codigo || data.codigo === ""){
      setEstado({loading: false, error:"Ingrese Código"})
      return
    }
    if (data.codigo.length !== 4){
      setEstado({loading: false, error:"Código inválido"})
      return
    }
    setEstado({loading:true})

    axios.post(`${config.urlBase}/validate`, {
      idapp: config.idApp,
      telefono: data.telefono,
      codigo: data.codigo

    },{ headers: {"Authorization" : `Bearer ${data.token}`},timeout:config.timeOut })
    .then(function (response) {
      if (response.status=== 200){
        const {token, agente} = response.data
        setData({...data,token, agente: agente})
        setToken(token);
        setAgente(agente);
        setEstado({loading: false})
        navigate(`/valesfise/agente`)
      }

    })
    .catch(function (error) {
      if(error.response.status=== 401){
        setEstado({loading: false,error: 'Código incorrecto'})
      } else{
        setEstado({loading:false, error:error})
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
      <Form >
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <h2> Ingresa el código de seguridad que te enviamos a tu teléfono via SMS</h2>
        <Form.Label className="mt-4">Código de seguridad</Form.Label>
        <Form.Control type="text" value={data.codigo} onChange={(e: InputEvent)=>setData({...data,codigo:e.target.value})}  />
        {estado.error}
        <Link to="/login">Volver a enviar el código</Link>
        <Button variant="primary" type="button" className="w-100 mt-4" onClick={() => validate()}>
        Verificar
      </Button>

      </Form.Group>
    </Form>
    </div>

  )
}
