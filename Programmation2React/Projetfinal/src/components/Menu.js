import React from "react";
import {  Container} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from '../images/icons/debarras_logo_96x96.ico';
import '../styles/styles.sass';

export class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <>
      <Container className="col-md-6 col-md-offset-3 col-sm-12">
        <NavLink activeClassName="selected col-sm-12" to="/"><img src={logo} alt="Logo" /></NavLink>
        <NavLink activeClassName="selected debarras col-sm-12" to="/" style={{ textDecoration: 'none' }}>  Débarras</NavLink>
        <NavLink activeClassName="selected debarras col-sm-12" to="/AddItems">Ajouter</NavLink>
      </Container>
      </>
    );
  }
}