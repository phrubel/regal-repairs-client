
import './App.css';
import { createContext, useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login'
// import Sidebar from './components/Dashboard/Sidebar/Sidebar';
import AddService from './components/Dashboard/AddService/AddService';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';
import ManageService from './components/Dashboard/ManageService/ManageService';
import Testimonial from './components/Testimonial/Testimonial';
import Order from './components/Order/Order';
import OrderList from './components/Dashboard/OrderList/OrderList';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute'
import AdminOrder from './components/Dashboard/AdminOrder/AdminOrder';

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>

          <PrivateRoute path='/adminOrder'>
           <AdminOrder></AdminOrder>
          </PrivateRoute>

          <PrivateRoute path='/addService'>
            <AddService></AddService>
          </PrivateRoute>

          <PrivateRoute path='/makeAdmin'>
           <MakeAdmin></MakeAdmin>
          </PrivateRoute>

          <PrivateRoute path='/manageService'>
           <ManageService></ManageService>
          </PrivateRoute>

          <PrivateRoute path='/order/:_id'>
            <Order></Order>
          </PrivateRoute>
         
          <PrivateRoute path='/orderList'>
           <OrderList></OrderList>
          </PrivateRoute>

          <PrivateRoute path='/testimonial'>
           <Testimonial></Testimonial>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
