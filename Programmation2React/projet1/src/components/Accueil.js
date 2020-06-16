import React from "react";
import logo from '../img/Spotify.png';
import Container from "react-bootstrap/Container"; 
import Row from "react-bootstrap/Row"; 
import Col from "react-bootstrap/Col"; 
import './Accueil.css';
import { Artist, Recherche} from './Artist'
// import {Connexion} from './Connexion'
import {Deconnexion} from './Deconnexion';
import {Catalogue} from './Catalogue';
import { Link } from "react-router-dom";
  // import { Form } from "react-bootstrap";


export class Accueil extends React.Component {
  
  constructor(props) {
    
    super(props);
    this.state = {connecter: false};
    this.gererConnexion = this.gererConnexion.bind(this);
  }



  gererConnexion(){
      return (
        
        <Container fluid>
          <Row>
            <Col>
              <Recherche></Recherche>
            </Col>
            <Col>
              <Link to="/"> <Deconnexion /></Link>
              
            </Col>
          </Row>
          <Row>
            <Col>
            <Catalogue></Catalogue>
            </Col>
          </Row>
          <Artist />
        </Container>  
      )
  
  }
  render() {
    return (
        this.gererConnexion()
    );
  }
  
}