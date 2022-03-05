import React, { useState} from 'react';
import {StarshipsList, StarshipDetails} from "../sw-components";
import Row from "../row";


const StarshipPage = () => {
   const [selectedItemId, setSelectedItemId] = useState(2)

   const leftElement = <StarshipsList setSelectedItemId={setSelectedItemId}/>
   const rightElement = <StarshipDetails  selectedItemId={selectedItemId}/>

   return <Row left={leftElement} right={rightElement}/>
}

export default StarshipPage;