import React, { useState, useEffect, useContext } from 'react';

import './item-list.css';
import {Context} from "../swapi-context/context";


const ItemList = ({ setSelectedItemId }) => {
  const [data, setData] = useState([]);
  const swapi = useContext(Context)

  useEffect(() => {
    swapi.getAllPeople()
      .then(data => setData(data))
      .catch(error => error)
  }, [])

  const elements = data.map((person) => {
    return (<li
      key={person.id}
      className="list-group-item"
      onClick={() => setSelectedItemId(person.id)}
    >
    {person.name}
    </li>)
  })

  return (
    <ul className="item-list list-group">{elements}</ul>
  );
}

export default ItemList;
