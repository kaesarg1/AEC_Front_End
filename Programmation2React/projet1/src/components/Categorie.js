import React from "react";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row";
import './Categorie.css';
import { Artist } from "./Artist";

const tabAlbums = [
  {
    src: require("../img/brumes.jpg"),
    alt: "Brume d'automne",
    title: "Brume d'automne",
  
  },
  {
    src: require("../img/deletere.jpg"),
    alt: "Délétère",
    title: "Délétère",
  },
  {
    src: require("../img/forteresse.jpg"),
    alt: "Forteresse",
    title: "Forteresse",
  },
  {
    src: require("../img/gris.jpg"),
    alt: "Gris",
    title: "Gris",
  },
  {
    src: require("../img/monarque.jpg"),
    alt: "Monarque",
    title: "Monarque",
  },
  {
    src: require("../img/sombre.jpg"),
    alt: "Sombres Forêts",
    title: "Sombres Forêts",
  },
];

export class Categorie extends React.Component {

  render() {
    return (
      <>
        <Container className="bg-dark text white">
          <Row className="bg-dark text-white">
            <h1>{this.props.nom}</h1>
          </Row>
          <Row>{this.AfficherCategorie()}</Row>
        </Container>
      </>
    );
  };

  AfficherCategorie() {
    if (this.props.nom === "Albums") {
      return tabAlbums.map((element, i) => (
        <Artist
          key={"Albums" + i}
          src={element.src}
          alt={element.alt}
          title={element.title}
          //onHover={this.handleHover}
        ></Artist>

      ));
  }}};

