
import { Container } from "react-bootstrap";
import {Login} from "./pages/Login"
import { Routes, Route } from "react-router-dom"
import {Validar} from "./pages/Validar"
import {ConsultarAgt} from "./pages/ConsultarAgt"
import {ConsultarBnf} from "./pages/ConsultarBnf"
import {Navbar} from "./components/Navbar"
import {FiseProvider} from "./context/FiseContext"
import { ProtectedRoute } from "./router/ProtectedRoute";
function App() {
  return (
    <FiseProvider>
    <Navbar/>      
    
    <div className="container ps-2 pe-2">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-4 border rounded-bottom fondo1 fullHeight ">
            <Routes>
              <Route path="/" element={<ConsultarBnf/>} />
              <Route path="/agente" element={<ProtectedRoute><ConsultarAgt/></ProtectedRoute>} />
              <Route path="/validar" element={<Validar />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
    </div>
    </FiseProvider>
  )
}

export default App
