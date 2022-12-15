
import { Container } from "react-bootstrap";
import {Login} from "./pages/Login"
import { Routes, Route } from "react-router-dom"
import {Validar} from "./pages/Validar"
import {Consultar} from "./pages/Consultar"
import {Navbar} from "./components/Navbar"
import {FiseProvider} from "./context/FiseContext"
function App() {


  return (
    <FiseProvider>
    <Navbar/>
    <Container>

    <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/validar" element={<Validar />} />
          <Route path="/consultar" element={<Consultar />} />
        </Routes>
    </Container>
    </FiseProvider>
  )
}

export default App
