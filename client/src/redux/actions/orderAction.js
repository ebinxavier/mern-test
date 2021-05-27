import { GET_ORDERS, CREATE_ORDER } from "../types/orderTypes"
import { START_LOADING, STOP_LOADING, SHOW_SUCCESS_MESSAGE, SHOW_ERRORR_MESSAGE } from '../types/loadingTypes'

import axios from "axios"
export const getAllOrders = () => async dispatch => {
    const response = await axios.get('/api/orders');
    dispatch({
        type: GET_ORDERS,
        payload: response.data.order
    })
}


export const createOrder = (id, data) => async dispatch => {
    try {
        dispatch({
            type: START_LOADING
        })
        const response = await axios.post('/api/client/order/' + id, data)
        dispatch({
            type: CREATE_ORDER
        })
        dispatch({
            type: STOP_LOADING
        })
        dispatch({
            type: SHOW_SUCCESS_MESSAGE,
            payload: response.data
        })

    } catch (error) {
        dispatch({
            type: STOP_LOADING
        })
    }
}



