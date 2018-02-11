import React from 'react';
import {BrowserRouter,Switch} from 'react-router-dom'
import {Route} from 'react-router';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

import App from './Home/index';
import Detail from './Detail';


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path={"/apartment/:apartmentId"} component={Detail} />
          <Route path={"/"} component={App} />
        </Switch>
      </div>

    </BrowserRouter>
  </Provider>
  ,document.getElementById('root'));
