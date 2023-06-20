import { useState,useRef } from "react"
import { Button, Card, Form} from "react-bootstrap"
import axios  from "axios"
import { Grupo } from "../components/Grupo"
import { ValesG, isNumber} from "../utils/Funciones"
import {groupArrayByPeriod} from "../utils/Funciones"
import {config} from "../config"
import { FaMapMarkerAlt } from 'react-icons/fa';

import { useLocalStorage } from "../hooks/useLocalStorage"
import { useFise } from "../context/FiseContext"
import Spinner from 'react-bootstrap/Spinner';

import ReCAPTCHA from 'react-google-recaptcha';


type Estado = {
  loading : boolean
  error?: string | undefined
}

export function Consultar(){
  const [dni, setDni] = useState("")
  const [estado, setEstado]=useState<Estado>({loading:false, error:""})
  const [gVales, setGvales] = useState<ValesG[]>([])
  const [token] = useLocalStorage('token',"")
  const [agente] = useLocalStorage('agente',"")
  const [mostrarBoton, setMostrarBoton] = useState(false)
  const [recaptchaToken, setRecaptchaToken] = useState('');


  function setValor(valor:string){
    if (isNumber(valor))
      setDni(valor)
  }

  function consultaAgente(){
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

  function consultaLibre(){
    axios.post(`${config.urlBase}/obtenerfree`, {
      idapp: config.idApp,
      dni: dni
    },{timeout:config.timeOut})
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
      }else{
        setEstado({loading: false, error: error.message})
      }
    });

  }
  //
  // const captcha = useRef<ReCAPTCHA>(null);

  // const onChange=()=>{
  //   if (captcha.current) {
  //     console.log(captcha.current.getValue());
  //   }
  // }
  const handleRecaptchaChange = (token: string | null) => {
    if (token) {
      setRecaptchaToken(token);
      console.log(token)
      
    } 
  };

//

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
if (token){
  consultaAgente()
} else {
  consultaLibre()
}
setMostrarBoton(true); // Activar la visibilidad del botón
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
      <div>
      <h2>{agente?`Bienvenido Agente`:`Beneficiario FISE`}</h2>
      <h2>{`${agente}` }</h2>
      </div>

      <Form >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="mt-4">DNI </Form.Label>
              <Form.Control type="text"   value={dni} onChange={(e)=>setValor(e.target.value)} maxLength={8}/>

        <div className="text-danger">{estado.error}</div>
        
        <br/>

            
              {/* <div className="recaptcha">
                <ReCAPTCHA
                ref={captcha}
                sitekey="6Lfeqq8mAAAAANI2S78dn1zE22t2UdXZav_cB6jG"
                onChange={onChange}
                />                
              </div> */}
              <div className="recaptcha">
                <ReCAPTCHA
                
                  sitekey="6Lfeqq8mAAAAANI2S78dn1zE22t2UdXZav_cB6jG"
                  onChange={handleRecaptchaChange}
                />
              </div>

              <Button variant="primary" type="button" className="w-100 mt-2" onClick={()=>consulta()}
              >
              Consultar
            </Button>
            </Form.Group>
          </Form>


          {gVales.map((g) => (
            <div key={g.periodo}>
              <Grupo periodo={String(g.periodo)} items={g.items} />
              
             
            </div>
          ))}
            
            {mostrarBoton && (
              <Button variant="success"  className="w-100 mt-2 d-flex align-items-center" onClick={() => window.location.href='mapa'}>
              <FaMapMarkerAlt className="map-icon me-4 ms-3" size="8%" /> 
              <span className="me-3">   Consulta los lugares autorizados </span> 
              </Button>
            )}  
          
    </div>
    )
}
