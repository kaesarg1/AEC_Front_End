import React from 'react';
import { AddItems } from './AddItems';
import GetItems from './GetItems';
import {Menu} from './Menu';
import { Container, Row } from 'react-bootstrap';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { FormEditerItem } from './EditItems';
import Anime, {anime} from 'react-anime';
import Footer from './Footer';




export class App extends React.Component{
  render(){
    return( 
    
        <Container className="content">


        <BrowserRouter> 
          <Menu></Menu>
          <Switch>
          <Anime delay={anime.stagger(100)}
          scale={[.1, .9]}>
            <Route path="/" exact component={GetItems} />
            <Route path="/AddItems" component={AddItems} />
            <Route path="/EditItems" component={FormEditerItem} />
            </Anime>
          </Switch>
        </BrowserRouter>
        <Container className="Footer">
          <Footer></Footer>
        </Container>

        </Container>


    
    );
  }
}

export default App;
