import React from 'react';
import { Link } from 'react-router-dom';

import './Navigation.css';

function Navigation({ apps }) {
  return (
    <nav className='Navigation'>
      <ul className='Navigation__container'>
        {apps.map(({ name }, index) => (
          <li key={index} className='Navigation__link--container'>
            <Link to={`/${name}`} className='Navigation__link'>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
