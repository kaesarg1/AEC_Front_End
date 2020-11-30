import React from 'react';
import { Route, Switch } from "react-router-dom";
import { useLocation } from 'react-router-dom' 
import { Form,Container,Row,Col } from "react-bootstrap";
import { Accueil } from "./Accueil";
import { Ajouter } from "./Ajouter.js";
import { Header } from './Header'; 
import { Footer } from "./Footer.js";




function App() {
  let location = useLocation(); 
  console.log(location.pathname); 
  return (
  
   <div className='bg container-fluid'>
      <Header/>
      <Switch>
          <Route path="/" exact component={Accueil} /> 
          <Route path="/Accueil" component={Accueil} /> 
          <Route path="/Ajouter" component={Ajouter} /> 
      </Switch>
      <Footer/>
  </div>
  );
}

export default App;