import { Container, Navbar as NavbarBs, Nav, Button } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import  ensa  from "../assets/ensa.jpg"
import { Logout } from "./Logout"

export function Navbar() {
    return (
<div className="row">
          <div className="col-2">
                        <Nav className="me-auto" >
                            <Nav.Link to="/valesfise" as={NavLink} className="m-0">
                                <img src={ensa} alt="ensa" height="40px" width="100px" className="d-inline-block" ></img>
                            </Nav.Link>

                        </Nav>
        </div>
        <div className="col-8">

        </div>
        <div className="col-2">

        <Logout />
        </div>
</div>


    )
}
