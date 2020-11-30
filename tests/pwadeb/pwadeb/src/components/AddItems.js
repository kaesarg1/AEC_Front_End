import React from "react";
import { Form, Button,Image,Container,Row,Col } from "react-bootstrap";



export class AddItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {photo: "", setErrors : {}};

    this.handleAdd = this.handleAdd.bind(this);
    this.handlePhoto = this.handlePhoto.bind(this);
    this.AddItems = this.AddItems.bind(this);
  }

  async AddItems(nom,lien,details) { 
    try{ 
      const response = await fetch('https://crudcrud.com/api/75decff3939b4ec9b5447b5bda52bb48/ajout', { 
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
        // toast.success("Ajout" + nom);

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
    const lienphoto = document.getElementById('lienphoto').value;
    const details = document.getElementById('details').value;
   

    this.AddItems(nom,lienphoto,details);
  }

  handlePhoto(event){
    const photos = document.getElementById('lienphoto').value;
    this.setState( {lienphoto : photos});
  }


  render() {
    console.log(this.props.history);
    return (
      <>
      <Container className="wrapper">
        <Row>
            <Form>
              <Form.Group className="col-3" controlId="nom">
                <Form.Label>Nom</Form.Label>
                <Form.Control type="text" placeholder="nom" />
              </Form.Group>
              <Form.Group className="col-3" controlId="lienphoto">
                <Form.Label>URL d'une photo</Form.Label>
                <Form.Control type="text" placeholder="Entrer une URL valide" onBlur={this.handlePhoto}/>
              </Form.Group >
              {this.state.photo !== "" && <Image src={this.state.photo} rounded width="125"/>}
              <Form.Group className="col-3" controlId="details">
                <Form.Label>Details</Form.Label>
                <Form.Control type="text" placeholder="Details" />
              </Form.Group>

            <Button variant="primary" type="submit" onClick={this.handleAdd}>
                Enregistrer
            </Button>
            </Form>  
          </Row>
        </Container>
      </>
    );
  }
}