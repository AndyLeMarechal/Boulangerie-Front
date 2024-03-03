import Axios from "./caller.services.js";

const getAllUsers = () => {
    return Axios.get('/users')
}

const getUser = (uid) => {
    return Axios.get('/users/'+uid)
}

const updateUser = (user) => {
        return Axios.patch('/users/'+user.id, {
            username: user.username ,
            email: user.email,
            password: user.password,
            passwordConfirm: user.passwordConfirm,
            firstname: user.firstname,
            lastname: user.lastname,
            address: user.address,
            role: user.role,
            id: user.id
        })
}

const createUser = (user) => {
    return Axios.post('/users', {
        username: user.username ,
            email: user.email,
            password: user.password,
            passwordConfirm: user.passwordConfirm,
            firstname: user.firstname,
            lastname: user.lastname,
            address: user.address,
            role: user.role,
    })
}

const deleteUser = (id) => {
    return Axios.delete('/users/'+id);
}

export const userServices = {
    getAllUsers,
    getUser,
    updateUser,
    createUser,
    deleteUser
}