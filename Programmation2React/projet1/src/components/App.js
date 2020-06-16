import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Accueil } from './Accueil';
import { Connexion } from './Connexion';
import { Accueil } from './Accueil';
import { Songs, SongLyrics } from './Artist';
// import {Connexion} from './Connexion';
// import {Accueil} from './Accueil';

function App() {
  return (
    <Router>
     <Switch>
     <Route path="/" exact component={Connexion} />
     <Route path="/home" component={Accueil} />
     <Route path="/songs" component={Songs} />
     <Route path="/lyrics" component={SongLyrics} />
     </Switch>
    </Router>
  );
}

export default App;