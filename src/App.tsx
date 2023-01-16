
import {Login} from "./pages/Login"
import { Routes, Route, useLocation } from "react-router-dom"
import {Validar} from "./pages/Validar"
import {ConsultarAgt} from "./pages/ConsultarAgt"
import {ConsultarBnf} from "./pages/ConsultarBnf"
import {Navbar} from "./components/Navbar"
import {FiseProvider} from "./context/FiseContext"
import { ProtectedRoute } from "./router/ProtectedRoute";
import "./pages/styles.css"
function App() {
  return (


    <FiseProvider>
      <div className="container">
      {/* <div  style={{ position: "sticky", top: "0", zIndex:"1020" }}> */}

        <header className="row justify-content-center sticky-top">

      <Navbar/>
        </header>
        <div className="row justify-content-center ">

        <div className="col-sm-12 col-md-4 border rounded-bottom fondo1 vh-100">
            <Routes>
              <Route  path="/" element={<ConsultarBnf/>} />
              <Route path="/agente" element={<ProtectedRoute><ConsultarAgt/></ProtectedRoute>} />
              <Route path="/validar" element={<Validar />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
    </div>
    </FiseProvider>)

}

export default App
