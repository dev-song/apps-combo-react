import React from 'react';

import Navigation from './components/Navigation';

function App() {
  const apps = [
    'todo',
    'grid',
    'modals',
    'counter',
    'async'
  ];

  return (
    <div className="App">
      <Navigation apps={apps} />
    </div>
  );
}

export default App;
