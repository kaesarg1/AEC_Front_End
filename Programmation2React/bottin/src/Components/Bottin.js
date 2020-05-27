import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { Client } from "./Client";

const liste = [
  {
    nom: "Abigor",
    travail: "Grand duc de l'enfer",
    src: require("../img/abigor.png"),
  },
  {
    nom: "Behemoth",
    travail: "Demon du désir et de la glottonie",
    src: require("../img/behemoth.jpg"),
  },
  {
    nom: "Dantalian",
    travail: "Demon de mille faces",
    src: require("../img/dantalian.jpg"),
  },
  {
    nom: "Belphegor",
    travail: "Maître de l’envie",
    src: require("../img/belphegor.jpg"),
  },
  {
    nom: "Astaroth",
    travail: "Prince de trônes",
    src: require("../img/astaroth.jpg"),
  },
  {
    nom: "Belial",
    travail: "Roy de l'iniquité",
    src: require("../img/belial.jpg"),
  },
  {
    nom: "Samael",
    travail: "Poison de dieu",
    src: require("../img/samael.jpg"),
  },
  {
    nom: "Pazuzu",
    travail: "Roy de demons du vent",
    src: require("../img/pazuzu.jpg"),
  },
  {
    nom: "Beelzebu",
    travail: "Septième princede l'enfer",
    src: require("../img/beelzebu.jpg"),
  },
  {
    nom: "Gremory",
    travail: "Devin du destin",
    src: require("../img/gremory.jpg"),
  },
  {
    nom: "Leviatan",
    travail: "Serpent de la mer",
    src: require("../img/leviatan.png"),
  },
  {
    nom: "Mephistopheles",
    travail: "plâtrier de mensonges",
    src: require("../img/mephisto.jpg"),
  },
];


export class Bottin extends React.Component {
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
        </Row>
        <Row>
          <h1>Bottin téléphonique de l'enfer</h1>
        </Row>
        <Row>{this.AfficherBottin()}</Row>
      </Container>
    );
  }

  AfficherBottin() {
    if(this.state.rechercher === ""){
       return this.state.listeClients.map((element, i) => (
        <Client
          key={"perso" + i}
          src={element.src}
          nom={element.nom}
          travail={element.travail}
        ></Client>
      ));
    }
    else{
      const searchResult = this.state.listeClients.filter(l => l.nom.toLowerCase().includes(this.state.rechercher.toLowerCase()));
      return searchResult.map((element, i) => (
        <Client
          key={"perso" + i}
          src={element.src}
          nom={element.nom}
          travail={element.travail}
        ></Client>
      ));
    }
  }
}