import React from 'react';
import {Card, Button, Container, Row} from 'react-bootstrap';




class GetItems extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }

    handleClick(itemId) {
      this.props.history.push({pathname: '/EditItems', state: {id:itemId}});
    }
  
    componentDidMount() {
      fetch("https://crudcrud.com/api/75decff3939b4ec9b5447b5bda52bb48/ajout")
        .then(res => res.json())
        .then(
          (result) => {
              console.log(result);
            this.setState({
              isLoaded: true,
              items: result
            });
          },
       
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }

    handlePhoto(event){
      const photos = document.getElementById('lienphoto').value;
      this.setState( {lienphoto : photos});
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Erreur : {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Chargement…</div>;
      } else {
        return (
          <Container>
            <Row style={{display: 'flex', flexDirection: 'row'}}>
   
                  {items.map(item => (
                    // <Card className="cards" bg="light" key={item.nom} style={{ width: '18rem', flex: 1}}>
                    //   <Card.Img className="pics" variant="top" src={item.lienphoto}/>
                    //     <Card.Body bg="light" >
                    //       <Card.Title><h3>{item.nom}</h3> </Card.Title>
                    //         <Card.Text>
                    //           {item.details}
                    //         </Card.Text>
                      

                    //       <Button className="btn btn-primary" onClick={() => this.handleClick(item._id)} variant="primary" message="1">Modifier</Button>
                         
                    //     </Card.Body>
                    // </Card>
                        <Card key={item.nom} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={item.lienphoto} />
                        <Card.Body bg="light">
                            <Card.Title><h3>{item.nom}</h3></Card.Title>
                            <Card.Text>
                            {item.details}
                            </Card.Text>
                            <Button variant="primary" onClick={() => this.handleClick(item._id)}>Détails</Button>
                        </Card.Body>
                        </Card>
                    
                  ))}
               
            </Row>
          </Container>
        );
      }
    }
  }

  export default GetItems;
