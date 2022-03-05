import React from 'react';
import './header.css';
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        <Link to="/">
          Star DB
        </Link>
      </h3>
      <ul className="d-flex">
         <Link to="/people/">
            <li>
               <div>People</div>
            </li>
         </Link>

         <Link to="/planets/">
            <li>
               <div>Planets</div>
            </li>
         </Link>

         <Link to="/starships/">
            <li>
               <div>Starships</div>
            </li>
         </Link>
      </ul>
    </div>
  );
};

export default Header;
