import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FaMapMarkerAlt } from 'react-icons/fa';
import { CiUser } from "react-icons/ci";
import { CiLock } from "react-icons/ci";



function Home() {
  return (
    <div className="homecontainer d-flex justify-content-center">
    <div className="d-grid gap-2 justify-content-center ">
      <Button variant="success" className="btnhome" size="lg"  onClick={() => window.location.href='valesfise/consultar'}>
      <CiUser className="map-icon me-4 ms-3" size="40%" /> <br/> <br/> 
        <h1 className="display-5">BENEFICIARIO</h1>
      </Button>      
      <Button variant="primary"  className="btnhome" size="lg" onClick={() => window.location.href='valesfise/login'}>
      <CiLock className="map-icon me-4 ms-3" size="40%" /> <br/> <br/>    
        <h1 className="display-5">AGENTE</h1>
      </Button>
    </div>
    </div>
  );
}

export default Home;
