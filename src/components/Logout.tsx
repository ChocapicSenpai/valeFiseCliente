import { useEffect, useRef,useState } from "react"
import { Button } from "react-bootstrap"
import { useLocalStorage } from "../hooks/useLocalStorage"
import styles from './Logout.module.css';
import { useNavigate } from "react-router-dom";
import {useFise} from "./../context/FiseContext"

type ModalParams = {
  nombres?: string
}

export function Logout(){
  const {data, setValores } = useFise()

  const ref = useRef<HTMLDivElement | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  function handleCloseSesion(){
    if (typeof window !== "undefined") {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('agente');
    }
    setValores({...data, token:"", agente:""})
    setIsMenuOpen(false)
    navigate('/valesfise/login')
  }
  function handleLogin(){

    setIsMenuOpen(false)
    navigate('/valesfise/login')
  }

  function ModalLogout({nombres}:ModalParams){
    return <div id="myDropdown" className={styles.dropdownContent}>
    {data.token&&<span onClick={handleCloseSesion}>Cerrar sesion</span>}
    {!data.token&&<span onClick={handleLogin}>Soy agente</span>}
  </div>
  }


  useEffect(()=>{
    const checkIfClickedOutside = (e: MouseEvent) =>{

      if (ref.current && !ref.current.contains(e.target as HTMLElement)){
        setIsMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", checkIfClickedOutside)
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [isMenuOpen])
  const handleClick=()=>{
    setIsMenuOpen((prevVar)=>!prevVar)
  }
  return (
    <>
    <div className={styles.dropdown} ref={ref}>


  <Button style={{ width: "2.5rem", height: "2.5rem", position: "relative", marginTop:"5px" }}
  variant="outline-primary"
  className="rounded-circle dropbtn"
  onClick={handleClick}
>
<svg viewBox="0 0 64 64"
xmlns="http://www.w3.org/2000/svg"
strokeWidth="3"
stroke="#000000"
fill="none">
  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
  <g id="SVGRepo_iconCarrier">
    <circle cx="32" cy="18.14" r="11.14"></circle>
    <path d="M54.55,56.85A22.55,22.55,0,0,0,32,34.3h0A22.55,22.55,0,0,0,9.45,56.85Z"></path>
    </g>
  </svg>

</Button>


{isMenuOpen&&<ModalLogout nombres={data.agente}/>}
</div>
</>
)
}
