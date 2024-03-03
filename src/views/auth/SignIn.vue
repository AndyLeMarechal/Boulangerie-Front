<template>
    <form @submit.prevent="signIn()">
        <div class="hero is-fullheight">
            <div class="hero-body is-justify-content-center is-align-items-center">
                <div class="columns is-flex is-flex-direction-column box">
                    <div class="column">
                        <label for="email">Email</label>
                        <input class="input is-primary" type="text" placeholder="Email address" id="user_email" v-model="user.email">
                    </div>
                    <div class="column">
                        <label for="Name">Password</label>
                        <input class="input is-primary" type="password" placeholder="Password" id="user_password" v-model="user.password">
                    </div>
                    <div class="column">
                        <button class="button is-primary is-fullwidth" type="submit">Login</button>
                    </div>
                    <div class="has-text-centered">
                        <p class="is-size-7"> Don't have an account? <a href="/signUp" class="has-text-primary">Sign up</a></p>
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
    name: 'signIn',
    data() {
        return {
            user: {
                email: '',
                password: ''
            },
            error: ''
        }
    },
    methods: {
        signIn() {
            accountService.login(this.user)
                .then(res => {
                    accountService.saveRole(res.data.role)
                    accountService.saveToken(res.data.access_token)
                    this.$router.push('/')
                })
                .catch(err => this.error = err.response.data.error)
        }
    },
}
</script>