import { START_LOADING, STOP_LOADING } from '../types/loadingTypes'
import { GET_FAVORITE_REVIEWS } from '../types/reviewsTypes'
import axios from 'axios'



export const getFavoriteReviews = () => async dispatch => {

    dispatch({
        type: START_LOADING
    })

    const response = await axios.get('/api/reviews/average')
    dispatch({
        type: GET_FAVORITE_REVIEWS,
        payload: response.data
    })

    dispatch({
        type: STOP_LOADING
    })

}