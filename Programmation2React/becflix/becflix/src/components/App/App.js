import React from "react";
import logo from '../../img/goat-pentagram.png';
import './App.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Catalogue } from '../Catalogue/Catalogue';


function App() {
  return (
    <Container fluid>
      <Catalogue />
      <Row>
        <Col>
          <img src={logo} alt="Becflix" width="100px" />
        </Col>
      </Row>
    </Container>
  )
}

export default App;