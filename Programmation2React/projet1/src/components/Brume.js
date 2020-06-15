import React from 'react'; 
import albumbrume from '../img/brume.jpg';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export class Brume extends React.Component {  

    render() {  

       return (
      <Container>
        <Row>
          <Col className="col-2 pt-5">
            <img src={albumbrume} width="200px" alt="Fiers et Victoreux"/>
          </Col>
        
          <Col className="pt-5 ml-3 text-white">
            <p>Album</p>
            <h1>Fiers et Victorieux</h1>
            <p>Par Brume d'Automne</p>
          </Col>
        </Row>
          
        <Row>
          <Col className="pt-5 col-4">
            <ul class="list-group bg-dark">
            <a href="../albums/Brume d'automne - Fiers et Victorieux/01. La Mort d'un Patriote.mp3" class="list-group-item list-group-item-action list-group-item-dark">La mort d'un Patriote</a>
            <a href="../albums/Brume d'automne - Fiers et Victorieux/02. Le Sacrifice de Guerriers Paysans.mp3" class="list-group-item list-group-item-action list-group-item-dark">Le Sacrifice de Guerriers Paysans</a>
            <a href="../albums/Brume d'automne - Fiers et Victorieux/03. La Foret Est Leur Tombe.mp3" class="list-group-item list-group-item-action list-group-item-dark">La Foret Est Leur Tombe</a>
            <a href="../albums/Brume d'automne - Fiers et Victorieux/04. Traditionelle.mp3" class="list-group-item list-group-item-action list-group-item-dark">Traditionelle</a>
            <a href="../albums/Brume d'automne - Fiers et Victorieux/05. Notre Heritage.mp3" class="list-group-item list-group-item-action list-group-item-dark">Notre Heritage</a>
            <a href="../albums/Brume d'automne - Fiers et Victorieux/06. Le Combat de Nos Peres.mp3" class="list-group-item list-group-item-action list-group-item-dark">Le Combat de Nos Peres</a>
            <a href="../albums/Brume d'automne - Fiers et Victorieux/07. Traditionelle II.mp3" class="list-group-item list-group-item-action list-group-item-dark">Traditionelle II</a>
            <a href="../albums/Brume d'automne - Fiers et Victorieux/08. Le Visage de la Haine.mp3" class="list-group-item list-group-item-action list-group-item-dark">Le Visage de la Haine</a>
            <a href="../albums/Brume d'automne - Fiers et Victorieux/09. Fiers et Victorieux.mp3" class="list-group-item list-group-item-action list-group-item-dark">Fiers et Victorieux</a>
            <a href="../albums/Brume d'automne - Fiers et Victorieux/10. Quand les Morts s'Agitent.mp3" class="list-group-item list-group-item-action list-group-item-dark">Quand les Morts s'Agitent</a>
            <a href="../albums/Brume d'automne - Fiers et Victorieux/11. Traditionelle III.mp3" class="list-group-item list-group-item-action list-group-item-dark">Traditionelle III</a>

            </ul>
          </Col>
        </Row>

      </Container>
       
       );

    }  

    
};  

