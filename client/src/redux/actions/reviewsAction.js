import { START_LOADING, STOP_LOADING } from '../types/loadingTypes'
import { GET_FAVORITE_REVIEWS } from '../types/reviewsTypes'
import axios from 'axios'



export const GetFavoriteReviews = () => async dispatch => {

    try {
        dispatch({ type: START_LOADING })
        const response = await axios.get('/api/reviews/average')
        dispatch({ type: GET_FAVORITE_REVIEWS, payload: response.data.favoriteOrder })
        dispatch({ type: STOP_LOADING })

    } catch (error) {
        console.log(error)
    }

}