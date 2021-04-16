import { GET_FAVORITE_REVIEWS } from "redux/types/reviewsTypes"
const initialState = {
    reviews: []
}
const reviewReducer = (state = initialState, action) => {
    switch (action) {
        case GET_FAVORITE_REVIEWS:
            return { ...state, reviews: action.payload }
        default: return state
    }
}
export default reviewReducer