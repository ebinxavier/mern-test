import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isAuthenticated } from '../utils/auth'
export default function UserRoutes({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => isAuthenticated() && isAuthenticated().role === 0 ? <Component {...props} /> : <Redirect to="/login" />
            }
        />
    )
}
