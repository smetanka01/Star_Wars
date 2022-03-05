import React from 'react';
import WithSwapi from "../hoc";
import {ItemDetails, Record} from "../item-details";

const ChildInPlanets = (props) => {
   return (
      <ItemDetails {...props}>
         <Record label='Population' fieldName='population'/>
         <Record label='Rotation Period' fieldName='rotationPeriod'/>
         <Record label='Diameter' fieldName='diameter'/>
      </ItemDetails>
   )
}

const PlanetDetails = WithSwapi(
   ChildInPlanets,
   (swapi) => ({
      getData: swapi.getPlanet,
      getImage: swapi.getPlanetImage
   })
)


export default PlanetDetails;