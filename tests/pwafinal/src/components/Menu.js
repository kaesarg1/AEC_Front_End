import React from "react";
import {  Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from '../img/icons/debarras_logo_96x96.ico';


export class Menu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
      
      <Navbar className="MenuItems">
        <Navbar.Brand href="/">
          <img
            alt=""
            src={logo}
            width="100"
            height="100"
            className="debarras d-inline-block align-top "
          />{' '}
          
        </Navbar.Brand>
        Débarras
        <NavLink className="linkItems" to="/AddItems">
              Ajouter
        </NavLink>
      </Navbar>

      </>
    );
  }
}

