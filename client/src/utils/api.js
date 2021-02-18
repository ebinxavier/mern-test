import axios from 'axios'

export const signUpUser = async (data) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const response = await axios.post('api/auth/signup', data, config);
    return response
}

export const loginUser = async (data) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const response = await axios.post('api/auth/login', data, config);
    return response
}

