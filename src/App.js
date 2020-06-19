import React from 'react';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/home" component={Home} />
        <Route path="/login" extract component={Login}/>
        <Redirect from="*" to="/login" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
