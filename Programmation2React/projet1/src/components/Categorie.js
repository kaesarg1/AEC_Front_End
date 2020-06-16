import React from "react";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row";
import './Categorie.css';
import { Artist } from "./Artist";
import { tabAlbums } from "./albums";



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
          id={element.id}
          songList={element.songsList}
        //onHover={this.handleHover}
        ></Artist>

      ));
    }
  }
};

