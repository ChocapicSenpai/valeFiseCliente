
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios  from "axios"
import config from "../../env.json"
import {useFise} from "./../context/FiseContext"
import { useLocalStorage } from '../hooks/useLocalStorage';
type InputEvent = React.ChangeEvent<HTMLInputElement>;
type Estado = {
  loading : boolean
  error?: string | undefined
}

export function Validar() {
  const {data, setData} = useFise()
  const navigate = useNavigate();
  const [token, setToken] = useLocalStorage('token',"");
  const [estado, setEstado]=useState<Estado>({loading:false, error:""})
 const urlBase = "http://ense26ln060:5090"

  const validate = ()=>{

    setEstado({loading:true})

    axios.post(`${urlBase}/autenticacion/validate`, {
      idapp: config.ID_APP,
      telefono: data.telefono,
      codigo: data.codigo

    },{ headers: {"Authorization" : `Bearer ${data.token}`} })
    .then(function (response) {
      console.log(response);
      if (response.status=== 200){
        const {token} = response.data
        setData({...data,token})
        console.log('token', token)
        setToken(token);
        setEstado({loading: false})
        navigate(`/consultar`)
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

      <Form >

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <h1> Verificación de seguridad</h1>
        <Form.Label>Código de seguridad</Form.Label>
        <Form.Control type="text" value={data.codigo} onChange={(e: InputEvent)=>setData({...data,codigo:e.target.value})}  />
        <Link to="/">Volver a enviar el código</Link>
        <br/>
        <br/>
        <Button variant="primary" type="button" className="w-100" onClick={() => validate()}>
        Verificar
      </Button>
      </Form.Group>

    </Form>
    </div>
  )
}
