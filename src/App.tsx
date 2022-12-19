
import { Container } from "react-bootstrap";
import {Login} from "./pages/Login"
import { Routes, Route } from "react-router-dom"
import {Validar} from "./pages/Validar"
import {Consultar} from "./pages/Consultar"
import {Navbar} from "./components/Navbar"
import {FiseProvider} from "./context/FiseContext"
import { useLocalStorage } from "./hooks/useLocalStorage";
import { ProtectedRoute } from "./router/ProtectedRoute";
function App() {
  const [value] = useLocalStorage('token',"")
  console.log(value)
  return (
    <FiseProvider>
    <Navbar/>
    <Container>

    <Routes>

        <Route path="/" element={<ProtectedRoute><Consultar /></ProtectedRoute>} />
          <Route path="/validar" element={<Validar />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    </Container>
    </FiseProvider>
  )
}

export default App
