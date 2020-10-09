import React from 'react';
import { Link } from 'react-router-dom';

function Navigation({ apps }) {
  return (
    <nav className="Navigation">
      <ul>
        {
          apps.map((app, index) => (
            <li key={index}>
              <Link to={`/${app}`}>{app}</Link>
            </li>
          ))
        }
      </ul>
    </nav>
  );
}

export default Navigation;
