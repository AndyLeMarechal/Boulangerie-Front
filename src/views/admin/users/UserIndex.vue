<template>
    <table class="table">
        <thead>
            <tr>
                <th>&nbsp;</th>
                <th><abbr title="Id">id</abbr></th>
                <th><abbr title="Username">username</abbr></th>
                <th><abbr title="Email">email</abbr></th>
                <th><abbr title="Password">password</abbr></th>
                <th><abbr title="Firstname">firstname</abbr></th>
                <th><abbr title="Lastname">lastname</abbr></th>
                <th><abbr title="Address">address</abbr></th>
                <th><abbr title="Role">role</abbr></th>
                <th><abbr title="Created_at">created_at</abbr></th>
                <th><abbr title="Updated_at">updated_at</abbr></th>
            </tr>
        </thead>
        <tfoot>
            <tr>
                <th>&nbsp;</th>
                <th><abbr title="Id">id</abbr></th>
                <th><abbr title="Username">username</abbr></th>
                <th><abbr title="Email">email</abbr></th>
                <th><abbr title="Password">password</abbr></th>
                <th><abbr title="Firstname">firstname</abbr></th>
                <th><abbr title="Lastname">lastname</abbr></th>
                <th><abbr title="Address">address</abbr></th>
                <th><abbr title="Role">role</abbr></th>
                <th><abbr title="Created_at">created_at</abbr></th>
                <th><abbr title="Updated_at">updated_at</abbr></th>
            </tr>
        </tfoot>
        <tbody v-for="(user, index) in users"  key:="user.id">
            <tr>
                <td>
                    <div class="buttons">
                        <router-link v-bind:to="'edit/'+user.id">
                            <button class="button">
                                <span class="icon">
                                    <i class="fa-solid fa-pencil"></i>
                                </span>
                            </button>
                        </router-link>
                        <button @click="del(index)" class="button">
                            <span class="icon">
                                <i class="fa-solid fa-trash"></i>
                             </span>
                        </button>
                    </div>
                </td>
                <td>{{user.id}}</td>
                <td>{{user.username}}</td>
                <td>{{user.email}}</td>
                <td>{{user.password}}</td>
                <td>{{user.firstname}}</td>
                <td>{{user.lastname}}</td>
                <td>{{user.address}}</td>
                <td>{{user.role}}</td>
                <td>{{user.created_at}}</td>
                <td>{{user.updated_at}}</td>
        </tr>
        <br>
         <br>
        </tbody>
    </table>
</template>

<script>

import { userServices } from '@/_services'


export default {
    name: 'userIndex',
    data() {
        return {
            users: []
        }
    },
    methods: {
        del(index){
            userServices.deleteUser(this.users[index].id)
                .then(res => this.users.splice(index, 1))
                .catch(err => console.log(err))
        }
    },
    mounted() {
        userServices.getAllUsers()
        .then(res => {
            this.users = res.data
        })
        .catch(err => {
            console.log(err)
        })
    }
}
</script>