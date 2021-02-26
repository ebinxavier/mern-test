import axios from 'axios'
import { START_LOADING, STOP_LOADING, SHOW_SUCCESS_MESSAGE, SHOW_ERRORR_MESSAGE } from '../types/loadingTypes'
import { GET_PRODUCTS } from "../types/productTypes"
export const createProduct = data => async dispatch => {
    try {
        await dispatch({ type: START_LOADING })
        const response = await axios.post('/api/product', data);
        await dispatch({ type: STOP_LOADING })
        dispatch({ type: SHOW_SUCCESS_MESSAGE, payload: response.data.successMessage })

    } catch (err) {

    }
}
export const getProducts = () => async dispatch => {
    try {
        await dispatch({ type: START_LOADING })
        const response = await axios.get('/api/product');
        await dispatch({ type: STOP_LOADING })
        dispatch({ type: GET_PRODUCTS, payload: response.data.products })

    } catch (err) {

    }
}