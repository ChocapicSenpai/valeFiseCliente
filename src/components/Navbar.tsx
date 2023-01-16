import { Container, Navbar as NavbarBs, Nav, Button } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import  ensa  from "../assets/ensa.jpg"
// import { Logout } from "./Logout"

export function Navbar() {
    return (


          <div className="col-sm-12 col-md-4 bg-white shadow-sm" style={{background:"red"}}>

                {/* <NavbarBs className="bg-white shadow-sm" > */}

                        <Nav className="me-auto" >
                            <Nav.Link to="/" as={NavLink} className="m-0">
                                <img src={ensa} alt="ensa" height="40px" width="100px" className="d-inline-block" ></img>
                            </Nav.Link>

                        </Nav>
                         {/* <Logout /> */}
                {/* </NavbarBs> */}

        </div>



    )
}
