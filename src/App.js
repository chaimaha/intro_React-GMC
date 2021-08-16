import "./App.css";
import x from "./assest/bardo.jpg";
import dougga from "./assest/Dougga.jpg";
import jem from "./assest/Jem.jpg";
import { Form } from "react-bootstrap";
import React from "react";

import {
  Navbar,
  NavDropdown,
  Nav,
  Container,
  Card,
  CardGroup,
} from "react-bootstrap";
function App() {
  return (
    <div className="App">
      {/* navbar */}
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Tunisia Trip</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* ---------------------------------------------------------------------------- */}
      {/* Cards */}
      <CardGroup class="cards">
        <Card>
          <Card.Img variant="top" src={x} />
          <Card.Body>
            <Card.Title>Le musée national du Bardo</Card.Title>
            <Card.Text>
              Le musée national du Bardo est un musée de Tunis, situé dans la
              banlieue du Bardo. C’est l’un des plus importants musées du bassin
              méditerranéen et le second musée du continent africain après le
              musée égyptien du Caire par la richesse de ses collections.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={dougga} />
          <Card.Body>
            <Card.Title>Dougga</Card.Title>
            <Card.Text>
              Dougga est un site archéologique situé dans la délégation de
              Téboursouk au Nord-Ouest de la Tunisie.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={jem} />
          <Card.Body>
            <Card.Title>El Jem</Card.Title>
            <Card.Text>
              Dans la petite bourgade d’El Jem s’élèvent les ruines
              impressionnantes du plus grand colisée d’Afrique du Nord, immense
              amphithéâtre où pouvaient prendre place 35 000 spectateurs.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      {/* --------------------------------------------------------------- */}
      {/* forms */}
      <h2>Contact Us</h2>
      <Form className="formb">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
      {/* -------------------------------------------------------- */}
      {/* Footer */}
    </div>
  );
}

export default App;
