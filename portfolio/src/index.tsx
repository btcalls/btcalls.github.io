import React from 'react';

import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WebFont from 'webfontloader';

import About from 'containers/About';
import Home from 'containers/Home';
import Portfolio from 'containers/Portfolio';
import { Paths } from 'components/NavBar';

import * as serviceWorker from './serviceWorker';
import './index.scss';
import './scss/animations.scss';

WebFont.load({
  google: {
    families: ['Montserrat:300,400,700', 'sans-serif'],
  },
});

const App = (): React.ReactElement => (
  <BrowserRouter>
    <Switch>
      <Route exact path={Paths.home} component={Home} />
      <Route exact path={Paths.portfolio} component={Portfolio} />
      <Route path={Paths.about} component={About} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
