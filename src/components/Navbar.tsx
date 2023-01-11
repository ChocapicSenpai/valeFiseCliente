import { Container, Navbar as NavbarBs, Nav, Button } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import  ensa  from "../assets/ensa.jpg"
// import { Logout } from "./Logout"

export function Navbar() {
    return (
        <Container style={{ position: "sticky", top: "0", zIndex:"1020" }}>
        <div className="row justify-content-center">
            <div className="col-sm-12 col-md-4 p-0" >
                <NavbarBs className="bg-white shadow-sm" >

                        <Nav className="me-auto" >
                            <Nav.Link to="/valesfise" as={NavLink} className="m-0">
                                <img src={ensa} alt="ensa" height="40" className="d-inline-block" ></img>
                            </Nav.Link>

                        </Nav>
                        {/* <Logout /> */}
                </NavbarBs>
            </div>
        </div>

        </Container>
    )
}
