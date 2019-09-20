import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory} from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './containers/app';
import Login from './containers/Login';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import logger from './store/logger';


// Global styles
import './styles/index.css';
import 'antd/dist/antd.css'

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
