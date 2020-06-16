
import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";


export const tabAlbums = [
    {
      id: 1,
      src: require("../img/brume.jpg"),
      alt: "Brume d'automne",
      title: "Brume d'automne",
      songsList: ["La_mort_d'un_Patriote", "Le_Sacrifice_de_Guerriers_Paysans", "La_Foret_Est_Leur_Tombe", "Traditionelle", "Notre_Heritage", "Le_Combat_de_Nos_Peres", "Traditionelle_II", "Le_Visage_de_la_Haine", "Fiers_et_Victorieux", "Quand_les_Morts_s'Agitent", "Traditionelle_III"]
  
    },
    {
      id: 2,
      src: require("../img/deletere.jpg"),
      alt: "Délétère",
      title: "Délétère",
      songsList: ["DeletereSong1", "DeletereSong2", "DeletereSong3"]
  
  
    },
    {
      id: 3,
      src: require("../img/forteresse.jpg"),
      alt: "Forteresse",
      title: "Forteresse",
      songsList: ["ForteresseSong1", "ForteresseSong2", "ForteresseSong3"]
  
    },
    {
      id: 4,
      src: require("../img/gris.jpg"),
      alt: "Gris",
      title: "Gris",
      songsList: ["GrisSong1", "GrisSong2", "GrisSong3"]
  
    },
    {
      id: 5,
      src: require("../img/monarque.jpg"),
      alt: "Monarque",
      title: "Monarque",
      songsList: ["Monarque1", "Monarque2", "Monarque3"]
  
    },
    {
      id: 6,
      src: require("../img/sombre.jpg"),
      alt: "Sombres Forêts",
      title: "Sombres Forêts",
      songsList: ["Sombres1", "Sombres2", "Sombres3"]
  
    },
  
  ];
  

  export const lyrics = [
    {
  
      title: "La_mort_d'un_Patriote",
      lyrics: "loremipsum"
  
    },
    {
  
      title: "Le_Sacrifice_de Guerriers_Paysans",
      lyrics: "No lyrics available"
  
    },
    {
  
      title: "BrumeSong3",
      lyrics: "loremipsum"
  
    },
    {
  
      title: "DeletereSong1",
      lyrics: "loremipsum"
  
    },
    {
  
      title: "DeletereSong2",
      lyrics: "No lyrics available"
  
    },
    {
  
      title: "DeletereSong3",
      lyrics: "loremipsum"
  
    },
    {
  
      title: "ForteresseSong1",
      lyrics: "loremipsum"
  
    },
    {
  
      title: "ForteresseSong2",
      lyrics: "loremipsum"
  
    },
    {
  
      title: "ForteresseSong3",
      lyrics: "loremipsum"
  
    },
    {
  
      title: "GrisSong1",
      lyrics: "loremipsum"
  
    },
    {
  
      title: "GrisSong2",
      lyrics: "loremipsum"
  
    },
    {
  
      title: "GrisSong3",
      lyrics: "loremipsum"
  
    },
    {
  
      title: "Monarque1",
      lyrics: "loremipsum"
  
    },
    {
  
      title: "Monarque2",
      lyrics: "loremipsum"
  
    },
    {
  
      title: "Monarque3",
      lyrics: "loremipsum"
  
    },
    {
  
      title: "Sombres1",
      lyrics: "loremipsum"
  
    },
    {
  
      title: "Sombres2",
      lyrics: "loremipsum"
  
    },
    {
  
      title: "Sombres3",
      lyrics: "loremipsum"
  
    },
  
  
  
  ];

  export class Albums extends React.Component {
    constructor(props) {
      super(props);
      this.state = {rechercher:"",
      tabAlbums : tabAlbums};
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
  
          <Col className="col-4"></Col>
        </Row>
      </Container>
      )}};