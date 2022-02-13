import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './view/login/Login';
import Home from './view/home/Home';
import AddCustomer from './view/addCutomer/AddCustomer';
import AddRoute from './view/addroute/Addroute';
import CustomerAccount from './view/customeraccount/CustomerAccount';
import DailyEntry from './view/dailyentry/DailyEntry';

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route exact path="/add/customer" component={AddCustomer} />
          <Route exact path="/add/route" component={AddRoute} />
          <Route exact path="/add/customeraccount" component={CustomerAccount} />
          <Route exact path="/add/dailyentry" component={DailyEntry} />
        </Switch>
      </Router>
    </React.Fragment>
  )
};

export default App;