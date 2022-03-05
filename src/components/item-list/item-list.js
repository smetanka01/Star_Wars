import React, { useState, useEffect } from 'react';
import WithSwapi from "../hoc";
import './item-list.css';

const ItemList = ({ setSelectedItemId, getData , children}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData()
      .then(data => setData(data))
      .catch(error => error)
  }, [])

  const elements = data.map((person) => {

    return (<li
      key={person.id}
      className="list-group-item"
      onClick={() => setSelectedItemId(person.id)}
    >
      {children(person)}
    </li>)
  })


  return (
    <ul className="item-list list-group">{elements}</ul>
  );
}

const getSwapi = (swapi) => ({
  getData: swapi.getAllPeople
})

export default WithSwapi(ItemList, getSwapi);
