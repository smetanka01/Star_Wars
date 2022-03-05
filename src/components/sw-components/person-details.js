import React from 'react';
import WithSwapi from "../hoc";
import {ItemDetails, Record} from "../item-details";

const ChildInPeople = (props) => {
   return (
      <ItemDetails {...props}>
         <Record label='Gender' fieldName='gender'/>
         <Record label='Eye color' fieldName='eyeColor'/>
         <Record label='Birth year' fieldName='birthYear'/>
      </ItemDetails>
   )
}

const PersonDetails = WithSwapi(
   ChildInPeople,
   (swapi) => ({
      getData: swapi.getPerson,
      getImage: swapi.getPersonImage
   })
)


export default PersonDetails;