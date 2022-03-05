import React, {useState, useEffect, useContext} from 'react';
import './random-planet.css';
import Loader from "../loader";
import ErrorMessage from "../error-message";
import {Consumer} from "../swapi-context";

const RandomPlanet = () => {

   const [data, setData] = useState({
      loading: true,
      error: false,
      errorMes: '',
   })
   const swapi = useContext(Consumer)

   useEffect(() => {
      const updatePlanet = () => {
         const id = Math.floor(Math.random() * (20 - 1) + 1);
         swapi.getPlanet(id).then(planet => {
            setData({...data, ...planet, loading: false})
         }).catch(error => {
            setData({...data, loading: false, error: true, errorMes: error.message})
            clearInterval(planetInterval)
         })
      }

      updatePlanet()
      const planetInterval = setInterval(() => {
         // setPlanetId(planetId + 1)
         updatePlanet()
      }, 2100)

      return () => clearInterval(planetInterval)
   }, [])

   const {id, name, population, rotationPeriod, diameter} = data;
   const imageUrl = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`

   if (data.loading) {
      return <Loader/>
   }

   if (data.error) {
      return <ErrorMessage error={data.errorMes}/>
   }


   return (
      <div className="random-planet jumbotron rounded">
         <img className="planet-image" src={imageUrl}/>
         <div>
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
               <li className="list-group-item">
                  <span className="term">Population</span>
                  <span>{population}</span>
               </li>
               <li className="list-group-item">
                  <span className="term">Rotation Period</span>
                  <span>{rotationPeriod}</span>
               </li>
               <li className="list-group-item">
                  <span className="term">Diameter</span>
                  <span>{diameter}</span>
               </li>
            </ul>
         </div>
      </div>
   );
}

export default RandomPlanet;


