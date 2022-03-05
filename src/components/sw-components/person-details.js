import React from 'react';
import WithSwapi from "../hoc";
import {ItemDetails, Record} from "../item-details";


const ChildInPeople = (View) => {
   return (props) => {
      return <View {...props}>
         <Record label='Gender' fieldName='gender'/>
         <Record label='Eye color' fieldName='eyeColor'/>
         <Record label='Birth year' fieldName='birthYear'/>
      </View>
   }
}

const PersonDetails = WithSwapi(
   ChildInPeople(ItemDetails),
   (swapi) => ({
      getData: swapi.getPerson,
      getImage: swapi.getPersonImage
   })
)


export default PersonDetails;