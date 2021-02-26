import axios from 'axios'
import { GET_USERS } from '../types/usersTypes'
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