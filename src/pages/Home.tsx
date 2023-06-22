import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FaMapMarkerAlt } from 'react-icons/fa';
import { CiUser } from "react-icons/ci";
import { CiLock } from "react-icons/ci";



function Home() {
  return (
   
    <div className="homecontainer ">

      <div className="container text-center">
      <br></br>

        <div className=" row align-items-center justify-align-center headhome " style={{height:"20vh"}}>    
      
          
            <h1>¿Como deseas iniciar?</h1>     
          
        </div>
        
        <br></br><br></br><br></br>
        
        <div className="container">
          <div className="d-grip gap-2  align-items-center justify-align-center bodyhome">

          <Button variant="success" className="btnhome" size="lg"  onClick={() => window.location.href='valesfise/consultar'}>
          <CiUser className="map-icon me-4 ms-3" size=" 40%" /> 
            <h2 className="">BENEFICIARIO</h2>
          </Button> 
          <br></br><br></br><br></br>

          <Button variant="primary"  className="btnhome" size="lg" onClick={() => window.location.href='valesfise/login'}>
          <CiLock className="map-icon me-4 ms-3" size="40%" />
            <h2 className="" >AGENTE</h2>
          </Button>

          </div>
        </div>


      </div>
    </div>  
    
 

   
   
  );
}

export default Home;
