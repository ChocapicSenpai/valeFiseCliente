import { Login } from "./pages/Login";
import { Routes, Route, useLocation } from "react-router-dom";
import { Validar } from "./pages/Validar";
import { Consultar } from "./pages/Consultar";
import MapView from "./pages/Map";
import Home from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { FiseProvider } from "./context/FiseContext";
import "./pages/styles.css";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();

  return (
    <FiseProvider>
      <div className="container">

        <header className="row justify-content-center sticky-top">
          <div className="col-sm-12 col-md-4 bg-white shadow-sm" style={{ background: "red" }}>
            {location.pathname !== "/valesfise" && (
              <Navbar />
            )}
          </div>
        </header>

        <div className="d-flex justify-content-center">
          <div className="col-sm-12 col-md-4 border fondo1" style={{ minHeight: "89vh" }}>
            <Routes>           
              <Route path="/valesfise" element={<Home />} />
              <Route path="/valesfise/consultar" element={<Consultar />} />
              <Route path="/valesfise/validar" element={<Validar />} />
              <Route path="/valesfise/login" element={<Login />} />
              <Route path="/valesfise/mapa" element={<MapView />} />
            </Routes>


          </div>                     
        </div>

        <div className="d-flex justify-content-center">
          <div className="col-sm-12 col-md-4 border fondo2" >
        <Footer/>
        </div>                     
        </div>
        
      </div>  
    </FiseProvider>
  );
}

export default App;
