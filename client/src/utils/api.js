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

export const createCategory = async (data) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const response = await axios.post('/api/category', data, config);
    return response
}


export const getCategory = async () => {

    const response = await axios.get('/api/category');
    return response
}


export const createProduct = async (data) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const response = await axios.post('/api/product', data, config);
    return response
}

export const getProductById = async (id) => {
    const responese = await axios.get('/api/product/' + id)
}

export const createReview = async (data) => {
    const response = await axios.post('/api/review/create', data)
    return response

}

