import React from 'react';
import WithSwapi from "../hoc";
import {ItemDetails, Record} from "../item-details";


const ChildInStarship = (View) => {
   return (props) => (
      <View {...props}>
         <Record label='Model' fieldName='model'/>
         <Record label='Manufacturer' fieldName='manufacturer'/>
         <Record label='cost in credits' fieldName='costInCredits'/>
         <Record label='Passengers' fieldName='passengers'/>
      </View>
   )
}

const StarshipDetails = WithSwapi(
   ChildInStarship(ItemDetails),
   (swapi) => ({
      getData: swapi.getStarship,
      getImage: swapi.getStarshipImage
   })
)


export default StarshipDetails;