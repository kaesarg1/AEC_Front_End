import React from "react";
import { Container } from 'react-bootstrap';
import {  Navbar, NavbarBrand } from "react-bootstrap";

class Footer extends React.Component{
    render() {
        return(
            <Container className="footer">  
                <Navbar bg="dark">
                    <Container >
                        <NavbarBrand className="navfooter">Copyright © Cesar Franco 2020</NavbarBrand>
                    </Container>
                </Navbar>
            </Container>
        )
    };
}

export default Footer;