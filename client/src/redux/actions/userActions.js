import axios from 'axios'
import { GET_USERS, SEARCH_USERS } from '../types/usersTypes'
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
    } catch (error) {

    }
}