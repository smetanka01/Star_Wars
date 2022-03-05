import React from 'react';
import {StarshipsList, StarshipDetails} from "../sw-components";
import Row from "../row";
import {withRouter} from "react-router-dom";


const StarshipPage = ({selectedItemId, history}) => {
   const setSelectedItemId = (id) => {
      history.push(id)
   }
   const leftElement = <StarshipsList setSelectedItemId={setSelectedItemId}/>
   const rightElement = <StarshipDetails  selectedItemId={selectedItemId}/>

   return <Row left={leftElement} right={rightElement}/>
}

export default withRouter(StarshipPage);