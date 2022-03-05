import React from 'react';
import WithSwapi from "../hoc";
import {ItemDetails, Record} from "../item-details";

const ChildInPlanets = (View) => {
   return (props) => {
      return <View {...props}>
         <Record label='Population' fieldName='population'/>
         <Record label='Rotation Period' fieldName='rotationPeriod'/>
         <Record label='Diameter' fieldName='diameter'/>
      </View>
   }
}

const PlanetDetails = WithSwapi(
   ChildInPlanets(ItemDetails),
   (swapi) => ({
      getData: swapi.getPlanet,
      getImage: swapi.getPlanetImage
   })
)


export default PlanetDetails;