import React, { useState} from 'react';
import {PlanetList, PlanetDetails} from "../sw-components";
import Row from "../row";


const PlanetPage = () => {
   const [selectedItemId, setSelectedItemId] = useState(1)

   const leftElement = <PlanetList setSelectedItemId={setSelectedItemId}/>
   const rightElement = <PlanetDetails  selectedItemId={selectedItemId}/>

   return <Row left={leftElement} right={rightElement}/>
}

export default PlanetPage;