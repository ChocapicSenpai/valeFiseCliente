
import { Container } from "react-bootstrap";
import {Login} from "./pages/Login"
import { Routes, Route } from "react-router-dom"
import {Validar} from "./pages/Validar"
import {ConsultarAgt} from "./pages/ConsultarAgt"
import {ConsultarBnf} from "./pages/ConsultarBnf"
import {Navbar} from "./components/Navbar"
import {FiseProvider} from "./context/FiseContext"
import { useLocalStorage } from "./hooks/useLocalStorage";
import { ProtectedRoute } from "./router/ProtectedRoute";
function App() {
  const [value] = useLocalStorage('token',"")
  console.log('token final',value)
  return (
    <FiseProvider>
    <Navbar/>
    <Container>

    <Routes>

        <Route path="/" element={<ConsultarBnf/>} />
        <Route path="/agente" element={<ProtectedRoute><ConsultarAgt/></ProtectedRoute>} />
          <Route path="/validar" element={<Validar />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    </Container>
    </FiseProvider>
  )
}

export default App
