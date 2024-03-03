<template>
    <div class="container box p-6 has-background-light"> 
      <h1 class="title has-text-centered has-text-success"> Updated user </h1>  
      <form @submit.prevent="edit"> 

        <input type="number" id="user_id" v-model="user.id" hidden>

        <div class="field"> 
          <label for="firstname" class="label">First name</label> 
          <div class="control"> 
            <input class="input" type="text" v-model="user.firstname" placeholder="Enter your first name"/> 
          </div> 
        </div> 

        <div class="field"> 
          <label for="lastname" class="label">Last name</label> 
          <div class="control"> 
            <input class="input" type="text" v-model="user.lastname" placeholder="Enter your last name"/> 
          </div> 
        </div>

        <div class="field"> 
          <label for="username" class="label">Username</label> 
          <div class="control"> 
            <input class="input" type="text" v-model="user.username" placeholder="Enter your username"/> 
          </div> 
        </div>

        <div class="field"> 
          <label for="email" class="label">Email {{ user.email }}</label> 
          <div class="control"> 
            <input class="input" type="text" v-model="user.email" placeholder="Enter your email"/> 
          </div> 
        </div>

        <div class="field"> 
          <label for="password" class="label">Password</label> 
          <div class="control"> 
            <input class="input" type="password" v-model="user.password"  placeholder="Enter your password"/> 
          </div> 
        </div>

        <div class="field"> 
          <label for="passwordConfirm" class="label">Password confirm</label> 
          <div class="control"> 
            <input class="input" type="password" v-model="user.passwordConfirm" placeholder="Enter your password confirm"/> 
          </div> 
        </div>

        <div class="field"> 
          <label for="address" class="label">Address</label> 
          <div class="control"> 
            <input class="input" type="text" v-model="user.address" placeholder="Enter your address"/> 
          </div> 
        </div>

        <div class="field"> 
          <label for="role" class="label">Role</label> 
          <div class="control"> 
            <input class="input" type="text" v-model="user.role" placeholder="Enter your role"/> 
          </div> 
        </div>

        <div class="field is-grouped"> 
          <div class="control"> 
            <button class="button is-success"> 
              Confirm 
            </button> 
          </div> 
          <div class="control"> 
            <button class="button is-link is-danger"> 
              Cancel 
            </button> 
          </div> 
        </div> 
      </form> 
    </div>
</template>

<script>
import { userServices } from '@/_services/user.services.js'

export default {
    name: 'userEdit',
    props: ['id'],
    data(){
        return {
            user: {
                username: '' ,
                email: '',
                password: '',
                password_confirm: '',
                firstname: '',
                lastname: '',
                address: '',
                role: '',
            }
           
        }
    },
    methods: {
        edit(){
            userServices.updateUser(this.user)
                .then(res => this.$router.push('/admin/dashboard'))
                .catch(err => console.log(err))
        }
    },
    mounted() {
        userServices.getUser(this.id)
        .then(res => {
            this.user = res.data[0]
        })
        .catch(err => {
            console.log(err)
        })
    }
}
</script>