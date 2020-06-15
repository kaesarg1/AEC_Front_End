import React from "react";
import logo from '../img/Spotify.png';
import Container from "react-bootstrap/Container"; 
import Row from "react-bootstrap/Row"; 
import Col from "react-bootstrap/Col"; 
import './Accueil.css';
import {Client} from './Client'
import {Connexion} from './Connexion'
import {Deconnexion} from './Deconnexion'
import { Catalogue } from "./Catalogue";

export class Catalogue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {connecter: false};
    this.gererConnexion = this.gererConnexion.bind(this);
    this.verifierConnexion = this.verifierConnexion.bind(this);
  }

  verifierConnexion(Connexion){
    this.setState({connecter:Connexion});
  }

  gererConnexion(){
    if(this.state.connecter){
      return (
        
        <Container fluid>
          <Row>
            <Col>
              <img src={logo} alt="Spotify" width="100px"/>
            </Col>
            <Col>
              <Deconnexion onClick={this.verifierConnexion} />
            </Col>
          </Row>
          <Catalogue />
        </Container>  
      )
    }
    else{
      return(
        <Connexion onClick={this.verifierConnexion} />
      )
    }
  }
  render() {
    return (
        this.gererConnexion()
    );
  }
  
}