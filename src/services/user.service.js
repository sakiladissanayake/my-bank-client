import  axios  from 'axios';
import { getJwtToken } from '../utils/jwt';


const userService = {
    login,
    logout,
    getAllUsers,
};

function login(username, password) {
    return axios.post("http://localhost:8080/authenticate",  ({ username, password }))
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('cool-jwt');
}

function getAllUsers() {
    return axios.get('http://localhost:8080/getEmployees', { 'headers': getJwtToken() });
}

export default userService;
