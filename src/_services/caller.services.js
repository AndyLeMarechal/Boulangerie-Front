import axios from "axios";
import { accountService } from "./account.services.js";

const Axios = axios.create({
    baseURL: 'http://localhost:3000/api'
})

Axios.interceptors.request.use(req => {

    if(accountService.isLogged){
        req.headers.Authorization = 'Bearer '+ accountService.getToken()
    }
    console.log(req)
    return req
})

Axios.interceptors.response.use(res => {
    return res
}), error => {
    console.log(error.response.status)
    if(error.response.status == 401){
        accountService.logout()
        this.$router.push('/signIn')
    }
}


export default Axios