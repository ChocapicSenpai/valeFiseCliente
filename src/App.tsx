
import {Login} from "./pages/Login"
import { Routes, Route, useLocation } from "react-router-dom"
import {Validar} from "./pages/Validar"
import {Consultar} from "./pages/Consultar"
import {Navbar} from "./components/Navbar"
import {FiseProvider} from "./context/FiseContext"
import "./pages/styles.css"
function App() {
  return (


    <FiseProvider>
      <div className="container">
        <header className="row justify-content-center sticky-top">
        <div className="col-sm-12 col-md-4 bg-white shadow-sm" style={{background:"red"}}>
      <Navbar/>
      </div>
        </header>
        <div className="row justify-content-center ">

        <div className="col-sm-12 col-md-4 border rounded-bottom fondo1" style={{minHeight:"92vh"}}>
            <Routes>
              <Route  path="/valesfise" element={<Consultar/>} />
              <Route path="/valesfise/validar" element={<Validar/>} />
              <Route path="/valesfise/login" element={<Login />} />
            </Routes>
          </div>
        </div>
    </div>
    </FiseProvider>)

}

export default App
