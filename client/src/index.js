import React from 'react';
import {BrowserRouter,Switch} from 'react-router-dom'
import {Route} from 'react-router';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

import App from './Home';
import AllApartments from './AllApartments';
import Detail from './Detail';
import Register from './Register';
import Login from './Login';
import Navigation from './Common';
import AddApartment from "./AddApartment";


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware}>
    <BrowserRouter>
      <div>
        <Navigation/>
        <Switch>
          <Route path={"/register"} component={Register}/>
          <Route path={"/login"} component={Login} />
          <Route path={"/addApartment"} component={AddApartment} />
          <Route path={"/apartments/:apartmentId"} component={Detail} />
          <Route path={"/apartments"} component={AllApartments}/>
          <Route path={"/"} component={App} />
        </Switch>
      </div>

    </BrowserRouter>
  </Provider>
  ,document.getElementById('root'));
