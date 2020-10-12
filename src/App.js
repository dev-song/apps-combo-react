import React from 'react';
import { Route, Switch, useParams } from 'react-router-dom';

import Navigation from './components/Navigation';
import Todo from './components/Todo';
import Grid from './components/Grid';
import Modal from './components/Modal';
import Async from './components/Async';

import CounterContainer from './containers/CounterContainer';

import './App.css';

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
    new AppInfo('counter', <CounterContainer />),
    new AppInfo('async', <Async />)
  ];

  return (
    <div className="App">
      <Navigation apps={apps} />
      <main className="App__main">
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
  return <h1 className='App__main--title'>{appName}</h1>;
}

export default App;
