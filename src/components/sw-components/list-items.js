import React from "react";
import ItemList from "../item-list";
import WithSwapi from "../hoc";

// const PeopleList = (props) => {
//    return (
//       <ItemList {...props}>
//          {(data) => data.name}
//       </ItemList>
//    )
// }

const ChildIn = (props) => {
   return (
      <ItemList {...props}>
         {(data) => data.name}
      </ItemList>
   )
}

const PeopleList = WithSwapi(
   ChildIn,
   (swapi) => ({
      getData: swapi.getAllPeople
   })
)

const PlanetList = WithSwapi(
   ChildIn,
   (swapi) => ({
      getData: swapi.getAllPlanets
   })
)

const StarshipsList = WithSwapi(
   ChildIn,
   (swapi) => ({
      getData: swapi.getAllStarships
   })
)

export {PeopleList, PlanetList, StarshipsList}