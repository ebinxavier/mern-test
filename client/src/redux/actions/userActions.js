import axios from 'axios'
import { GET_USERS, SEARCH_USERS, DELETE_USER, UPDATE_USER } from '../types/usersTypes'
import { START_LOADING, STOP_LOADING } from "../types/loadingTypes"
export const getUsers = () => async dispatch => {
    try {
        dispatch({
            type: START_LOADING
        })
        const response = await axios.get('/api/users')
        dispatch({
            type: GET_USERS,
            payload: response.data.users

        })
        dispatch({
            type: STOP_LOADING
        })
    } catch (error) {

    }

}

export const searchUsers = (query) => async dispatch => {
    try {
        dispatch({
            type: START_LOADING
        })
        const response = await axios.get(`/api/users/search?username=${query}`)

        dispatch({
            type: SEARCH_USERS,
            payload: response.data
        })
        dispatch({
            type: STOP_LOADING
        })
    } catch (error) {

    }
}

export const deleteUser = (id) => async dispatch => {
    dispatch({
        type: START_LOADING
    })
    const response = await axios.delete('/api/users/' + id)
    dispatch({
        type: DELETE_USER,
        payload: response.data
    })
    dispatch({
        type: STOP_LOADING
    })
    console.log(id)
}


export const updateUser = (id) => async dispatch => {
    dispatch({
        type: START_LOADING
    })
    const response = await axios.put('/api/users/' + id)
    dispatch({
        type: UPDATE_USER,
        payload: response.data
    })
    dispatch({
        type: STOP_LOADING
    })
}