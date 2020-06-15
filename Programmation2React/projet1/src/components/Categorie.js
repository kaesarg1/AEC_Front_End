import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { Client } from "./Client";


const liste = [
  {
    artist: "Brume d'automne",
    album: "Fiers et Victorieux",
    src: require("../img/brumes.jpg"),
  },
  {
    artist: "Délétère",
    album: "Les Heures de la Peste",
    src: require("../img/deletere.jpg"),
  },
  {
    artist: "Forteresse",
    album: "Métal Noir Québecois",
    src: require("../img/forteresse.jpg"),
  },
  {
    artist: "Gris",
    album: "Neurasthénie",
    src: require("../img/gris.jpg"),
  },
  {
    artist: "Monarque",
    album: "Lys Noir",
    src: require("../img/monarque.jpg"),
  },
  {
    artist: "Sombres Forêts",
    album: "Quintessence",
    src: require("../img/sombre.jpg"),
  },
  
];


export class Categorie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {rechercher:"",
                  listeClients : liste};
    this.Rechercher = this.Rechercher.bind(this);
    this.Effacer = this.Effacer.bind(this);
  }
  Rechercher(){
    let nom = document.getElementById("inputRechercher").value;
    this.setState({rechercher:nom});
  }
  Effacer(){
    document.getElementById("inputRechercher").value = "";
    this.setState({rechercher:""});
  }
  render() {
    return (
    
      <Container fluid>
        <Row>
        <Col className="col-4">
        <Form>
        <InputGroup className="mb-3">
          <FormControl
            id="inputRechercher"
            placeholder="Rechercher"
            aria-label="Rechercher"
            aria-describedby="Rechercher"
            onChange={this.Rechercher}
          />
          <InputGroup.Append>
            <Button variant="outline-secondary" onClick={this.Rechercher}>Rechercher</Button>
          </InputGroup.Append>
          <InputGroup.Append>
            <Button variant="outline-secondary" onClick={this.Effacer}>Annuler</Button>
          </InputGroup.Append>
        </InputGroup>
  
        </Form>
        </Col>
        <Col className="col-4"></Col>

        <Col className="col-4">
    
      <Button variant="outline-secondary" onClick={() => this.handleDeconnexion()}>
        Déconnexion
      </Button>

        </Col>
        </Row>
        <Row>
            <Col>
                <h1 className="text-white">Albums</h1>
            </Col>
        </Row>
            <div class="p-2 mb-2 bg-white"></div>
        <Row className="text-dark">{this.AfficherAlbums()}</Row>
        
      </Container>
    );
  }

  AfficherAlbums() {
    if(this.state.rechercher === ""){
       return this.state.listeClients.map((element, i) => (
        <Client
          key={"perso" + i}
          src={element.src}
          artist={element.artist}
          album={element.album}
        ></Client>
      ));
    }
    else{
      const searchResult = this.state.listeClients.filter(l => l.nom.toLowerCase().includes(this.state.rechercher.toLowerCase()));
      return searchResult.map((element, i) => (
        <Client
          key={"perso" + i}
          src={element.src}
          artist={element.artist}
          album={element.album}
        ></Client>
      ));
    }
  }
}