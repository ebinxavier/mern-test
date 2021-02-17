import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from "../Containers/Auth/Login"
import SignUp from "../Containers/Auth/SignUp"
import './App.css'
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />

        </Switch>
      </BrowserRouter>
    </div>
  )
}
