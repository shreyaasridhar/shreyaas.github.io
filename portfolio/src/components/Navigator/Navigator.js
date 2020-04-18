import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Navigator.css";
class Navigator extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="#home">Shreyaa</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Skills</Nav.Link>
          <Nav.Link href="#">Work</Nav.Link>
          <Nav.Link href="#">Contact</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}
export default Navigator;
