import { registerUser } from '../../interface/Interface'
import http from '../E_COMMERCE_API'
 
const getAllUsers = () => {
    return http.get('/user')
}

const createUser = (userData: registerUser) => {
    return http.post('/user', userData )
}


export  default {
    getAllUsers,
    createUser
}
