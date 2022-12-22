import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartNav from "./CartNav";
import { useContext } from "react";
import { context } from "../App";

function NavBarComponent() {
  const { setView } = useContext(context);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">sneakers</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex justify-content-end align-items-center">
            <Nav.Link
              onClick={() => {
                setView("products");
              }}
            >
              Collections
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                setView("products");
              }}
            >
              Men
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                setView("products");
              }}
            >
              Women
            </Nav.Link>
            <Nav.Link>About</Nav.Link>
            <Nav.Link className="flex-grow-1 me-5 pe-5">Contact</Nav.Link>
            <CartNav></CartNav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;
