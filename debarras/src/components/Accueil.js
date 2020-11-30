import React from "react";
import { Form,Container,Row,Col } from "react-bootstrap";

export class Accueil extends React.Component {
    constructor(props) {
      super(props);
      this.ajouter = this.ajouter.bind(this);
    }
  
    async ajouter(nom, lien, details ) { 
      try{ 
        const response = await fetch('https://crudcrud.com/api/b400b4194cfc4ae08f3d79a15d203b4f/ajout', { 
          method:'POST', 
          headers: {'Content-Type': 'application/json'  }, 
          body:JSON.stringify({
            nom: nom,  
            lien: lien,
            details: details,
          }) 
        }); 
        if(response.ok){ 
          const jsonResponse = await response.json(); 
          this.props.history.push("/");
          //toast.success("Ajout" + nom);
  
          return jsonResponse; 
        } 
        throw new Error('Request failed!'); 
    } 
     catch(error){ 
        console.log(error); 
     } 
  }
  
    handleAdd(event){
      event.preventDefault();
      
      const nom = document.getElementById('nom').value;
      const lien = document.getElementById('lien').value;
      const details = document.getElementById('details').value;
 
      this.adjout(nom, lien, details);
    }
  

  
  
    render() {
      console.log(this.props.history);
      return (
        <>
        <Container>
          <Row>
            <Col>
              <Form>
              <Form.Group controlId="nom">
                  <Form.Label>nom</Form.Label>
                  <Form.Control type="text" placeholder="Entrer le prénom de l'étudiant" />
                </Form.Group>
                <Form.Group controlId="lien">
                  <Form.Label>lien photo</Form.Label>
                  <Form.Control type="text" placeholder="Entrer le nom de l'étudiant" />
                </Form.Group>
                <Form.Group controlId="details">
                  <Form.Label>Détails</Form.Label>
                  <Form.Control type="text" placeholder="Entrer une URL valide" onBlur={this.handlePhoto}/>
                </Form.Group>
              
              </Form>  
              </Col>    
            </Row>
          </Container>
        </>
      );
    }
  }


  export default Accueil;