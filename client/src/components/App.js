import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from "../Containers/Auth/Login"
import SignUp from "../Containers/Auth/SignUp"
import AdminDashboard from '../Containers/AdminDashboard'
import UserDashboard from '../Containers/UserDashboard'
import AdminRoutes from '../Routes/AdminRoutes'
import UserRoutes from '../Routes/UserRoutes'
import Category from "../Containers/AdminDashboard/Category"
import './App.css'
export default function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Header /> */}
        {/* <Sidebar /> */}
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/signup" component={SignUp} />
          <AdminRoutes path="/admin/dashboard" component={AdminDashboard} />
          <AdminRoutes path="/admin/category/create" component={Category} />

          <UserRoutes path="/dashboard" component={UserDashboard} />



        </Switch>
      </BrowserRouter>
    </div>
  )
}
