import React from 'react';
import {Categorie} from './Categorie';

export class Catalogue extends React.Component{
  render() {
    return (
      <>
      <Categorie nom="Albums"/>
      <Categorie/>
      </>
      )
  }
}