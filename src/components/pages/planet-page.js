import React from 'react';
import {PlanetList, PlanetDetails} from "../sw-components";
import Row from "../row";
import {withRouter} from "react-router-dom";


const PlanetPage = ({ selectedItemId, history}) => {
   const setSelectedItemId = (id) => {
      history.push(id)
   }

   const leftElement = <PlanetList setSelectedItemId={setSelectedItemId}/>
   const rightElement = <PlanetDetails  selectedItemId={selectedItemId}/>

   return <Row left={leftElement} right={rightElement}/>
}

export default withRouter(PlanetPage);