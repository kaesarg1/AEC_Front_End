import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container"
import { createHashHistory } from 'history'
import { Link } from "react-router-dom";
import { Row, InputGroup, Button, FormControl } from "react-bootstrap";
import { Deconnexion } from "./Deconnexion";
import { tabAlbums, lyrics } from "./albums"

export const history = createHashHistory();


export class Artist extends React.Component {

  constructor(props) {
    super(props);
    this.state = { hovered: false };
  }
  test(songsList) {
    history.push('songs');
    this.setState({ songs: songsList });
  }

  render() {
    return (
      <Col xs lg="2">
        <Link to={'/songs/' + this.props.id}>
          <img
            src={this.props.src}
            alt={this.props.alt}
            title={this.props.title}
            className="img-fluid"
            onMouseOut={() => this.setState({ hovered: false })}
            onMouseOver={() => this.setState({ hovered: true })}
            style={{ transform: `${this.state.hovered ? 'scale(1.5,1.5)' : 'scale(1,1)'}` }}
            onClick={() => { this.test(this.props.songList) }}

          />
        </Link>

      </Col>

    );
  }
}

export class Songs extends React.Component {


  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            {/* <img src={logo} alt="Spotify" width="100px" /> */}
          </Col>
          <Col>
            <Link to="/home">Back</Link>
            <Link to="/" ><Deconnexion /></Link>

          </Col>
        </Row>
        <Row>
          <ul>
            <SongsList songs={tabAlbums[(this.props.location.pathname[this.props.location.pathname.length - 1]) - 1].songsList}></SongsList>
          </ul>
        </Row>

      </Container>
    );
  }


}

export class SongsList extends React.Component {

  render() {
    return this.props.songs.map((element, i) => (
      <li key={i}><Link to={'/lyrics/' + element}>{element}</Link></li>
    ))
  }

}


export class SongLyrics extends React.Component {

  render() {
    var song = this.props.location.pathname.slice(8, this.props.location.pathname.length);

    var lyricsInfo = lyrics.find(({ title }) => title === song);


    return <Container fluid>
      <Row>

        <Col>
          <Link to="/home">Back</Link>
          <Link to="/" ><Deconnexion /></Link>

        </Col>
      </Row>
      <Row>
        <span>{lyricsInfo.title}</span><br />
      </Row>
      <Row>

        <span>{lyricsInfo.lyrics}</span>
      </Row>

    </Container>
  }

}

export class Recherche extends React.Component {
  constructor(props) {
    super(props);
    this.state = {Rechercher:"",
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

    export default Artist;
    