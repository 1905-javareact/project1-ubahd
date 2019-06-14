import React from 'react';
import './include/bootstrap' // import the bootstrap files so we can use it on react
import './App.css';
import { BrowserRouter, Switch, Route, Router } from 'react-router-dom';
// import { NavComponent } from './components/navcomponent/navcomponent';
import  loginComponent  from './components/logincomponent/login';
import { DashboardComponent } from './components/dashboardcomponent/dashboardcomponent';
import { homeComponent } from './components/homecomponent/homecomponent';
import { ReimbursementComponent } from './components/reimbursement/reimbursementcomponent';
import  ReimbursementViewComponent from './components/reimburseviewcomponent/reimburseview';
import  UpdateUserButton from './components/reimburseviewcomponent/UpdateUserButton';
import { Provider } from 'react-redux';
import { store } from './store';
import MgmtDashboardComponent from './components/dashboardcomponent/mgmtdashboardcomponent';
import  UserComponent  from './components/userrcomponent/usercomponent';
import userinfo from './components/userupdatecomponent/userinfo';

const App: React.FC = () => {
  return (
    <Provider store ={store}>
    <BrowserRouter>
    <div className="App">
      {/* <NavComponent/> */}
      <Switch>
        <Route path='/' exact component={loginComponent}/>
        <Route path='/dashboard' component={DashboardComponent}/>
        <Route path='/mgmtdashboard' component={MgmtDashboardComponent}/>
        <Route path='/reimbursements' component={ReimbursementComponent}/>
        <Route path='/reimburseview/:id' component={ReimbursementViewComponent}/>
        {/* <Route path='/reimburseview' component={ReimbursementViewComponent}/> */}
        <Route path='/userinfo' component={userinfo}/>
        <Route path='/users' component={UserComponent}/>
        <Route component={UpdateUserButton}/>
      </Switch>
    </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
