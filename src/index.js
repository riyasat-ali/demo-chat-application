// import 'es5-shim';
// import 'es6-shim';
// import 'es6-promise';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory} from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './containers/app';


// Global styles
import './styles/index.css';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import logger from './store/logger';
import Login from './Login';

const store = createStore(rootReducer,applyMiddleware(logger));

ReactDOM.render(
  <div>
    <Provider store={ store }>
      <Router history={browserHistory}>
       <Route exact path = "/" component={ Login } />
       <Route path ="/Home" component={ App } />
      </Router>
    </Provider>
  </div>,
  document.getElementById('root')
);
