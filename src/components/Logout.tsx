import { useState } from "react"
import { Button } from "react-bootstrap"
import { useLocalStorage } from "../hooks/useLocalStorage"
import styles from './Logout.module.css';
type ModalParams = {
  nombres: string
}
function ModalLogout({nombres}:ModalParams){
  return <div id="myDropdown" className="dropdown-content">
  <a href="#">Link 1</a>
  <a href="#">Link 2</a>
  <a href="#">Link 3</a>
</div>
}
export function Logout(){
  const [token] = useLocalStorage('token',"")
  const [agente] = useLocalStorage('agente',"")
  const [mostrar, setMostrar] = useState(false)
  const handleClick=()=>{
    setMostrar(true)
  }
  return (
    <>
    <div>


  {token&&<Button style={{ width: "3rem", height: "3rem", position: "relative" }}
  variant="outline-primary"
  className="rounded-circle"
  onClick={handleClick}
>
<svg viewBox="0 0 64 64"
xmlns="http://www.w3.org/2000/svg"
stroke-width="3"
stroke="#000000"
fill="none">
  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
  <g id="SVGRepo_iconCarrier">
    <circle cx="32" cy="18.14" r="11.14"></circle>
    <path d="M54.55,56.85A22.55,22.55,0,0,0,32,34.3h0A22.55,22.55,0,0,0,9.45,56.85Z"></path>
    </g>
  </svg>

</Button>

}
{mostrar&&<ModalLogout nombres={agente}/>}
</div>
</>
)
}
