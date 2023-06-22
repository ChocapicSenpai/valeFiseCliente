import React from "react";
import fiseimg from "../assets/fs.png"

function Footer(){
  return(
    // <div className="main-footer">
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-md-3 col-sm-6">
    //         <div className="logo">
    //           <img src={fiseimg} alt="FISE Logo" height="100px" width="100px" />
    //         </div>
    //       </div>

    //       <div className="col-md-3 col-sm-6 ">
    //         <span style={{fontSize:20}}>Telefonos</span> 

    //         <ul className="list-unstyled">
    //           <li style={{fontSize:10}}>987654321</li>
    //           <li style={{fontSize:10}}>987654321</li>
    //           <li style={{fontSize:10}}>987654321</li>            
    //         </ul>      
    //       </div>

    //       <div className="col-md-3 col-sm-6 ">
    //         <span style={{fontSize:20}}>Telefonos</span> 

    //         <ul className="list-unstyled">
    //           <li style={{fontSize:10}}>987654321</li>
    //           <li style={{fontSize:10}}>987654321</li>
    //           <li style={{fontSize:10}}>987654321</li>            
    //         </ul>      
    //       </div>

    //       <div className="col-md-3 col-sm-6 ">
    //         <span style={{fontSize:20}}>Telefonos</span> 

    //         <ul className="list-unstyled">
    //           <li style={{fontSize:10}}>987654321</li>
    //           <li style={{fontSize:10}}>987654321</li>
    //           <li style={{fontSize:10}}>987654321</li>            
    //         </ul>      
    //       </div>

    //     </div>
    //   </div>     
    // </div>
    <div className="main-footer" >
      <div className="container">
        <div className="row">
          <div className="col-4  container text-center">
            <div className="logo align-items-center">
              <img src={fiseimg} alt="FISE Logo" height="55px" width="100px" style={{marginTop:"5px", marginBottom:"5px "}}/>
            </div>
          </div>

          <div className="col-8 ">
            <div className="footer-section">
              <div className="row" style={{fontSize:13}}>
                <div className="col-md-12" >
                    <span >987654321</span> - <span >987654321</span> -  <span >987654321</span>
                </div>
                <div className="col-md-12">
                <a href="google.com.pe" className="link-style"><span>fise@distriluz.com.pe</span></a>
                </div>
                <div className="col-md-12">
                    <a href="google.com.pe" className="link-style"><span>San Martin 250, Chiclayo, Perú</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer;