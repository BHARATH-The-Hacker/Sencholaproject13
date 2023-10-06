import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <div>
      <Navbar expand="lg" className="bg-dark fw-bold">
        <Container>
          <Navbar.Brand href="/">
            <h4 className="text-light">
              Authentication Form
            </h4>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-white" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link href="/" className="text-warning">
              <i class="bi bi-shield-lock"></i> Login
              </Nav.Link>
              <Nav.Link href="/Register" className="text-warning">
                <i class="bi bi-person-lines-fill"></i> Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
