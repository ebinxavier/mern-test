import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from "../Containers/Auth/Login"
import SignUp from "../Containers/Auth/SignUp"
import AdminDashboard from '../Containers/AdminDashboard'
import UserDashboard from '../Containers/UserDashboard'

import './App.css'
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/admin/dashboard" component={AdminDashboard} />
          <Route path="/dashboard" component={UserDashboard} />



        </Switch>
      </BrowserRouter>
    </div>
  )
}
