import React from 'react';
import Col from "react-bootstrap/Col";
import showImage from "../../img/theomen.jpg";


let image ={
    src: showImage,
    alt: 'theomen.',
    title: 'theomen.'
}

export class TvShow extends React.Component{
    render(){
        return (
            <Col xs lg="2">
                <img src={image.src}
                    alt= {image.alt}
                    title= {image.title}
                    className="img-fluid"
                    />
            </Col>
        )
    }
}