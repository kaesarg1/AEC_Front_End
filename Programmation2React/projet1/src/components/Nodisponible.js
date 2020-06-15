import React from 'react'; 
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export class Nodisponible extends React.Component {  

    render() {  

       return (
      <Container>
        <Row>
       
        
          <Col className="pt-5 ml-3 text-white">

            <h1>Désolé</h1>
            <p>Le contenu sélectionné n'est pas disponible</p>
          </Col>
        </Row>
          

      </Container>
       
       );

    }  

    
};  

