import React from 'react';
import { Route, Switch, useParams } from 'react-router-dom';

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
      <main>
        <Route path='/:appName'>
          <Title />
        </Route>

        <Switch>
          {apps.map(({ name, component }, index) => (
            <Route path={`/${name}`} key={index}>
              {component}
            </Route>
          ))}
        </Switch>
      </main>
    </div>
  );
}

function Title() {
  let { appName } = useParams();
  return <h1 className='app__title'>{appName}</h1>;
}

export default App;
