import React from "react";
import ItemList from "../item-list";
import WithSwapi from "../hoc";

const ChildIn = (View, renderFunc) => {
   return (props) => {
      return <View {...props}>{renderFunc}</View>
   }
}

const PeopleList = WithSwapi(
   ChildIn(ItemList, (item) => item.name),
   (swapi) => ({
      getData: swapi.getAllPeople
   })
)

const PlanetList = WithSwapi(
   ChildIn(ItemList, (item) => item.name),
   (swapi) => ({
      getData: swapi.getAllPlanets
   })
)

const StarshipsList = WithSwapi(
   ChildIn(ItemList, (item) => item.name),
   (swapi) => ({
      getData: swapi.getAllStarships
   })
)

export {PeopleList, PlanetList, StarshipsList}