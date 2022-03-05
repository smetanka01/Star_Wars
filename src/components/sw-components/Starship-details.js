import React from 'react';
import WithSwapi from "../hoc";
import {ItemDetails, Record} from "../item-details";


const ChildInStarship = (props) => {
   return (
      <ItemDetails {...props}>
         <Record label='Model' fieldName='model'/>
         <Record label='Manufacturer' fieldName='manufacturer'/>
         <Record label='cost in credits' fieldName='costInCredits'/>
         <Record label='Passengers' fieldName='passengers'/>
      </ItemDetails>
   )
}

const StarshipDetails = WithSwapi(
   ChildInStarship,
   (swapi) => ({
      getData: swapi.getStarship,
      getImage: swapi.getStarshipImage
   })
)


export default StarshipDetails;