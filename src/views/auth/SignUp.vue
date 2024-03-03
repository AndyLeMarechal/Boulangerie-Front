<template>
    
    <form @submit.prevent="signUp()">
        <div class="hero is-fullheight">
            <div class="hero-body is-justify-content-center is-align-items-center">
                <div class="columns is-flex is-flex-direction-column box">
                    <div class="column">
                        
                        <label for="Name">Username</label>
                        <input class="input is-primary" type="text" placeholder="Password" id="user_username" v-model="user.username">
                    </div>
                    <div class="column">
                        <label for="email">Email</label>
                        <input class="input is-primary" type="text" placeholder="Email address" id="user_email" v-model="user.email">
                    </div>
                    <div class="column">
                        <label for="Name">Password</label>
                        <input class="input is-primary" type="password" placeholder="Password" id="user_password" v-model="user.password">
                    </div>
                    <div class="column">
                        <label for="Name">Password Confirm</label>
                        <input class="input is-primary" type="password" placeholder="Password" id="user_passwordConfirm" v-model="user.passwordConfirm">
                    </div>
                    <div class="column">
                        <label for="Name">Firstname</label>
                        <input class="input is-primary" type="text" placeholder="Firstname" id="user_firstname" v-model="user.firstname">
                    </div>
                    <div class="column">
                        <label for="Name">Lastname</label>
                        <input class="input is-primary" type="text" placeholder="Lastname" id="user_lastname" v-model="user.lastname">
                    </div>
                    <div class="column">
                        <label for="Name">Address</label>
                        <input class="input is-primary" type="text" placeholder="Address" id="user_address" v-model="user.address">
                    </div>
                    <div class="column">
                        <button class="button is-primary is-fullwidth" type="submit">Register</button>
                    </div>
                    <div class="has-text-centered">
                        <p class="is-size-7"> You have an account? <a href="/signIn" class="has-text-primary">Sign In</a></p>
                    </div>
                    <br>
                    <div class="notification is-danger" v-if="this.error">
                    <button class="delete"></button>
                    {{ this.error }}
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
import { accountService } from '@/_services'

export default {
    name: 'signUp',
    data() {
        return {
            user: {
                username: '',
                email: '',
                password: '',
                passwordConfirm: '',
                firstname: '',
                lastname: '',
                address: '',
                
            },
            error: ''
        }
    },
    methods: {
        signUp() {
            accountService.signUp(this.user)
                .then(res => {
                    
                    this.$router.push('/signIn')
                })
                .catch(err => {
                    this.error = err.response.data.error    
                })
        }
    },
}
</script>