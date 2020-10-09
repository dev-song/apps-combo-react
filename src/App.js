import React from 'react';

import Navigation from './components/Navigation';
import Todo from './components/Todo';
import Grid from './components/Grid';
import Modal from './components/Modal';
import Counter from './components/Counter';
import Async from './components/Async';

class AppInfo {
  constructor(name, component) {
    this.name = name;
    this.component = component;
  }
}

function App() {
  const apps = [
    new AppInfo('todo', <Todo />),
    new AppInfo('grid', <Grid />),
    new AppInfo('modals', <Modal />),
    new AppInfo('counter', <Counter />),
    new AppInfo('async', <Async />)
  ];

  return (
    <div className="App">
      <Navigation apps={apps} />
    </div>
  );
}

export default App;
