import { SHOW_SUCCESS_MESSAGE, SHOW_ERRORR_MESSAGE, CLEAR_MESSAGES } from '../types/loadingTypes'

const initialState = {
    successMessage: '',
    errorrMessage: ''
}

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_SUCCESS_MESSAGE: return { ...state, successMessage: action.payload }
        case SHOW_ERRORR_MESSAGE: return { ...state, errorrMessage: action.payload }
        case CLEAR_MESSAGES: return { ...state, errorrMEssage: '', successMessage: '' }
        default: return state
    }
}
export default messageReducer