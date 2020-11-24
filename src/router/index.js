import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Main from '../containers/layouts/Main';
import MainAdmin from '../containers/layouts/MainAdmin';

// views
import About from '../containers/views/Main/About';
import Home from '../containers/views/Main/Home';
import Login from '../containers/views/Main/Login';
import Signup from '../containers/views/Main/Signup';
import Blog from '../containers/views/Main/Blog';
import Contact from '../containers/views/Main/Contact';
// services
import Ui from '../containers/views/Main/Services/UI';
import Web from '../containers/views/Main/Services/WEB';
import Angular from '../containers/views/Main/Services/Angular';

// admin Views
import Dashboard from '../containers/views/Admin/Dashboard'
import Setting from '../containers/views/Admin/Setting'


export default () => {

  return (
    <Router>
      <Switch>
        <Route path='/admin/:path?' exact>
          <MainAdmin>
            <Switch>
              <Route path='/admin' exact component={Dashboard} />
              <Route path='/admin/setting' component={Setting} />
            </Switch>
          </MainAdmin>
        </Route>
        <Route>
          <Main>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/about' component={About} />
            </Switch>
            <Route path='/services/:path?' exact>
              <Switch>
                <Route path='/services/Ui' exact component={Ui} />
                <Route path='/services/Web' component={Web} />
                <Route path='/services/Angular' component={Angular} />
              </Switch>
            </Route>
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route path='/blog' component={Blog} />
            <Route path='/contact' component={Contact} />
          </Main>
        </Route>
      </Switch>
    </Router>
  )

}

