import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import {Container, Row, Col} from "react-bootstrap";
import logo from '../img/Spotify.png';
// import { BrowserRouter as  Redirect } from "react-router-dom";
// import { Accueil } from "./Accueil";

export class Connexion extends React.Component {
  constructor(props) {  
    super(props);  
    this.handleConnexion = this.handleConnexion.bind(this);  
  } 
  handleConnexion(){
    let connecter = false;

    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    if (email.toLowerCase() === "shany.carle@gmail.com" && pass === "patate"){
      connecter = true;
      // this.props.onClick(connecter);  
      console.log('redirecting');
     this.props.history.push('home');

    }

    console.log(connecter);
  } 

  render() {
    return (
      <Container className="col-md-4">
        <Jumbotron  className="bg-dark">
          <Row className="text-center text-white justify-content-center">
            <Col-md-6>
             
              <img src={logo} alt="Spotify" width="100px" className="text-center"/>
              <h1 className="pt-3">De la musique pour tous</h1> 
            </Col-md-6>
          </Row>
          <Row  className="pt-3 text-center">
            <Col  className="pt-3 justify-content-center">
              <Form>
                <Form.Group controlId="email">
          
                  <Form.Control className="col" type="email" placeholder="Adresse courriel ou nom de l'utlisateur"/>
                </Form.Group>

                <Form.Group controlId="password">
                 
                  <Form.Control className="col" type="password" placeholder="Mot de passe"/>
                </Form.Group>

                <Button className="bg-white text-dark" onClick={this.handleConnexion}>
                  SE CONNECTER
                </Button>
              </Form>
            </Col>
          </Row>
        </Jumbotron>
      </Container> 
    );
  }
}