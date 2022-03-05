import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import {PeoplePage, StarshipPage, PlanetPage} from '../pages';
import {Provider} from "../swapi-context";
import SwapiService from '../../services/swapi-service';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './app.css';

const swapi = new SwapiService();

const App = () => {
  return (
    <div>
       <Provider value={swapi}>
          <Router>
             <Header />
             <RandomPlanet />

             <Route path='/' exact render={() => <h1>Hello welcome!!</h1>}/>

             <Route path='/people/:id?' render={({match}) => {
                const selectedItemId = match.params.id;
                if (selectedItemId === undefined){
                   return <PeoplePage selectedItemId={1}/>
                } else {
                   return <PeoplePage selectedItemId={selectedItemId}/>
                }
             }}/>

             <Route path='/planets/:id?' render={({match}) => {
                const selectedItemId = match.params.id;
                if (selectedItemId === undefined){
                   return <PlanetPage selectedItemId={1} />
                } else {
                   return <PlanetPage selectedItemId={selectedItemId} />
                }
             }}/>

             <Route path='/starships/:id?' render={({match}) => {
                const selectedItemId = match.params.id;
                if (selectedItemId === undefined){
                   return <StarshipPage selectedItemId={2}/>
                } else {
                   return <StarshipPage selectedItemId={selectedItemId}/>
                }
             }}/>

          </Router>
      </ Provider>
    </div>
  );
};

export default App;
