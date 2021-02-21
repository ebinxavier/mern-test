import { START_LOADING, STOP_LOADING } from '../types/loadingTypes'

const InitialState = {
    loading: false
}

console.log(InitialState)
const loadingReducer = (state = InitialState, action) => {
    switch (action.type) {
        case START_LOADING:
            return { loading: true }
        case STOP_LOADING:
            return { loading: false }
        default: return InitialState
    }
}
export default loadingReducer