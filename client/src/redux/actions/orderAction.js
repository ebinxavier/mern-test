import { GET_ORDERS } from "../types/orderTypes"
import axios from "axios"
export const getAllOrders = () => async dispatch => {
    const response = await axios.get('/api/orders');
    dispatch({
        type: GET_ORDERS,
        payload: response.data.order
    })
}