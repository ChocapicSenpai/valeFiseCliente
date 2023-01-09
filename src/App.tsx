
import { Container } from "react-bootstrap";
import {Login} from "./pages/Login"
import { Routes, Route, useLocation } from "react-router-dom"
import {Validar} from "./pages/Validar"
import {ConsultarAgt} from "./pages/ConsultarAgt"
import {ConsultarBnf} from "./pages/ConsultarBnf"
import {Navbar} from "./components/Navbar"
import {FiseProvider} from "./context/FiseContext"
import { ProtectedRoute } from "./router/ProtectedRoute";
import {config} from "./config"

function App() {
const location = useLocation()
  const path = config.path
  return (
    <FiseProvider>
    <Navbar/>

    <div className="container ps-2 pe-2">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-4 border rounded-bottom fondo1 fullHeight">
            <Routes>
              <Route  path="/valesfise" element={<ConsultarBnf/>} />
              <Route path="/valesfise/agente" element={<ProtectedRoute><ConsultarAgt/></ProtectedRoute>} />
              <Route path="/valesfise/validar" element={<Validar />} />
              <Route path="/valesfise/login" element={<Login />} />
            </Routes>
          </div>
        </div>
    </div>
    </FiseProvider>
  )
}

export default App
