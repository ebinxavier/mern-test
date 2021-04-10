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
import CreateProduct from "../Containers/AdminDashboard/Products/Products"
import Products from "Containers/AdminDashboard/Products/GetProducts"
import UpdateProducts from "Containers/AdminDashboard/Products/UpdateProduct/Updateproduct"
import Users from "Containers/Users"
import UpdateUser from "Containers/Users/UpdateUser"
import Categories from 'Containers/AdminDashboard/Category/AllCategories'
import Orders from "Containers/Orders"
import './App.css'
export default function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Header /> */}
        {/* <Sidebar /> */}
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/signup" component={SignUp} />
          <AdminRoutes path="/admin/dashboard" component={AdminDashboard} />
          <AdminRoutes path="/admin/category" component={Categories} />
          <AdminRoutes path="/admin/category/create" component={Category} />
          <AdminRoutes path="/admin/products/update/:id" component={UpdateProducts} />
          <AdminRoutes path="/admin/products/create" component={CreateProduct} />
          <AdminRoutes path="/admin/products" component={Products} />
          <AdminRoutes path="/admin/users/update/:id" component={UpdateUser} />
          <AdminRoutes path="/admin/users" component={Users} />
          <AdminRoutes path="/admin/orders" component={Orders} />

          <UserRoutes path="/dashboard" component={UserDashboard} />



        </Switch>
      </BrowserRouter>
    </div>
  )
}
