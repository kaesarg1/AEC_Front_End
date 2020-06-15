import React from "react";
import Col from "react-bootstrap/col";
import Card from "react-bootstrap/card";




export class Client extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hovered: false};
  }
  render() {
    return (
      <Col md lg="2">
        <Card className="text-dark"
        
        src={this.props.src}
        artist={this.props.artist}
        album={this.props.album}
        
        className="img-fluid"
        onMouseOut={() => this.setState({hovered: false})}
        onMouseOver={() => this.setState({hovered: true})}
        style={{transform: `${this.state.hovered ? 'scale(1.2,1.2)' : 'scale(1,1)'}`}}
      >
          <Card.Img variant="top" src={this.props.src}/>
          <Card.Body>
              <Card.Title>{this.props.artist}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{this.props.album}</Card.Subtitle>
          </Card.Body>
      
        </Card>
      </Col>

  
 

    );
  }
  

      


}
