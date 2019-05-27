import axios from 'axios'

const api = axios.create({
    baseURL: 'https://omnistack-backend-sidney.herokuapp.com',
})

export default api