import React from "react";
import { Form, Button, Image, Container, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify"

export class FormEditerItem extends React.Component {

  constructor(props) {
    console.log('opening edititems');
    super(props);
    this.state = {
      donneesRecues: { nom: '', lienphoto: "", details: "" },
      setErrors: {}
    };

    this.handleEdit = this.handleEdit.bind(this);
    this.handlePhoto = this.handlePhoto.bind(this);
    this.edititem = this.edititem.bind(this);
    this.removeitem = this.removeitem.bind(this);
  }


  async componentDidMount() {
    try {
      await this.setState({ ItemID: this.props.location.state.id });
      const response = await fetch("https://crudcrud.com/api/75decff3939b4ec9b5447b5bda52bb48/ajout/" + this.state.ItemID);
      const reponseDeApi = await response.json();
      console.log(this.responseDeApi);
      this.setState({ donneesRecues: reponseDeApi });
 
      console.log(this.state.donneesRecues);
      if (!response.ok) {
        throw Error(response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async edititem(_nom, _lienphoto, _details) {
    console.log(_nom, _lienphoto, _details);
    try {
      const response = await fetch('https://crudcrud.com/api/75decff3939b4ec9b5447b5bda52bb48/ajout/' + this.state.ItemID, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nom: _nom,
          lienphoto: _lienphoto,
          details: _details
        })
      });
      console.log('response');
      if (response.ok) {
        const jsonResponse = await response;
        this.props.history.push("/");
        toast.success("Modification " + _nom);

        return jsonResponse;
      }
      throw new Error('Request failed!');
    }
    catch (error) {
      console.log(error);
    }
  }

  async removeitem() {
    try {
      const response = await fetch('https://crudcrud.com/api/75decff3939b4ec9b5447b5bda52bb48/ajout/' + this.state.ItemID, {
        method: 'DELETE',
      });
      if (response.ok) {
        console.log(response);
        //const response = await response; 
        //const jsonResponse = await response.json(); 
        console.log("SUPPRESSION!");
        this.props.history.push("/");
        //return jsonResponse; 
        return response;
      }
      throw new Error('Request failed!');
    }
    catch (error) {
      console.log(error);
    }
  }

  handleEdit(event) {
    event.preventDefault();

    const nom = document.getElementById('nomitem').value;
    const lienphoto = document.getElementById('lienphotoitem').value;
    const details = document.getElementById('details').value;


    this.edititem(nom, lienphoto, details);
  }

  handlePhoto(event) {
    const photos = document.getElementById('lienphotoitem').value;
    this.setState({ photo: photos });
  }


  render() {

    return (
      <>
        <Container>
          <Row>
            <Col>
              <Form>
                <Form.Group controlId="nomitem">
                  <Form.Label>Nom</Form.Label>
                  <Form.Control type="text" defaultValue={this.state.donneesRecues.nom} /> 
              </Form.Group>
                <Form.Group controlId="lienphotoitem">
                  <Form.Label>URL d'une photo</Form.Label>
                  <Form.Control type="text" placeholder="Entrer une URL valide" onBlur={this.handlePhoto} defaultValue={this.state.donneesRecues.lienphoto} />
                </Form.Group>
                {this.state.donneesRecues.lienphoto !== "" && <Image src={this.state.donneesRecues.lienphoto} rounded width="125" />}
                <Form.Group controlId="details">
                  <Form.Label>Détails</Form.Label>
                  <Form.Control type="text" defaultValue={this.state.donneesRecues.details} />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={this.handleEdit}>
                  Enregistrer
            </Button>
              </Form>
            </Col>
          </Row>
          <button className="btn btn-secondary mt-5" variant="primary" onClick={this.removeitem}>Supprimer l'item</button>
        </Container>
      </>
    );
  }
}

export default FormEditerItem;