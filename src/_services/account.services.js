import Axios from "./caller.services.js";


const login = (credentials) => {
    return Axios.post('/signIn', credentials)
}

const signUp = (credentials) => {
    return Axios.post('/signUp', credentials)
}

const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('role')
}

const getToken = () => {
    return localStorage.getItem('token')
}

const getRole = () => {
    return localStorage.getItem('role')
}

const saveRole = (role) => {
    localStorage.setItem('role', role)
}

const saveToken = (token) => {
    localStorage.setItem('token', token)
}

const isLogged = () => {
    const token = localStorage.getItem('token')
    console.log(token)
    return !! token
}

export const accountService = {
    login,
    signUp,
    logout,
    saveRole,
    saveToken,
    isLogged,
    getToken,
    getRole
}