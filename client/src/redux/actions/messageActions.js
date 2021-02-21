import { CLEAR_MESSAGES } from '../types/loadingTypes'

export const clearMessage = () => dispatch => {
    dispatch({
        type: CLEAR_MESSAGES
    })
}