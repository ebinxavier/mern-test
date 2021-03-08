import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isAuthenticated } from '../utils/auth'
export default function AdminRoutes({ component: Component, ...rest }) {
    console.log(rest, 'rest')
    return (
        <Route
            {...rest}
            render={(props) => isAuthenticated() && isAuthenticated().role === 1 ? <Component {...props} /> : <Redirect to="/" />
            }
        />
    )
}
