import { CartWidget } from "./CartWidget.jsx";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

export const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar-green">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Shop Valentine
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/category/bakery">
              Bakery
            </Nav.Link>
            <Nav.Link as={NavLink} to="/category/meat">
              Meat
            </Nav.Link>
            <Nav.Link as={NavLink} to="/category/fruit">
              Fruit
            </Nav.Link>
            <Nav.Link as={NavLink} to="/category/daily">
              Daily
            </Nav.Link>
          </Nav>
          <Nav className="me-4">
            <Nav.Link
              href="https://github.com/GMRuizMarquez"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contacto
            </Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/in/gonzaloruizmarquez/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  );
};
