import React from 'react';
import { Link } from 'react-router-dom';

function Navigation({ apps }) {
  return (
    <nav className="Navigation">
      <ul>
        {
          apps.map(({ name }, index) => (
            <li key={index}>
              <Link to={`/${name}`}>{name}</Link>
            </li>
          ))
        }
      </ul>
    </nav>
  );
}

export default Navigation;
