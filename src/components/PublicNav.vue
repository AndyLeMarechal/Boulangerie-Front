<template>
  <header>
  <div class="columns">
        <div class="column is-12">
            <div class="card">
                <div class="card-content">
                    <nav class="navbar is-light is-transparent has-centered-logo-alt" role="navigation" aria-label="main navigation">
                        <div class="navbar-brand is-hidden-desktop">
                          <router-link to="/" class="navbar-item"><img src="/icon.png" width="160" height="56"></router-link>
                            <a @click="makeBurger" role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample"
                            v-bind:class="{ 'is-active': activator }">
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                            </a>
                        </div>
                        <div id="navbarBasicExample" class="navbar-menu" v-bind:class="{ 'is-active': activator }">
                          <div class="navbar-start">
                            <router-link to="/" class="navbar-item">Acceuil</router-link>
                            <router-link to="/ourBakerys" class="navbar-item">Nos boulangeries</router-link>
                            <router-link to="/articles" class="navbar-item">Nos articles</router-link>
                          </div>
                            <div class="navbar-brand is-hidden-touch">
                              <router-link to="/" class="navbar-item"><img src="/icon.png" width="160" height="56"></router-link>
                                <a role="button" class="navbar-burger  burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                                    <span aria-hidden="true"></span>
                                    <span aria-hidden="true"></span>
                                    <span aria-hidden="true"></span>
                                </a>
                            </div>
                            <div class="navbar-end">
                            <div v-if="isAdminOrEditor == 'admin' || isAdminOrEditor == 'editor'" class="navbar-item">
                              <router-link to="/admin/dashboard" class="navbar-item">Admin</router-link> 
                            </div>
                            <div class="navbar-item"> 
                              <div v-if="!isLoggedIn" class="buttons">
                                    <router-link to="/signUp" class="button is-primary"><strong>Sign Up</strong></router-link>
                                    <router-link to="/signIn" class="button is-light"><strong>Sign In</strong></router-link>
                              </div>
                              <div v-else class="buttons">
                                  <button @click="logout()" class="button is-danger"><strong>Log Out</strong></button>
                              </div>
                            </div>
                          </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>

    
        
      </header>

    </template>

    <script>
    import { accountService } from '@/_services'

    export default {
        name: 'PublicNav',
        data(){
          return {
            activator: false
          }
        },
        methods: {
          isLogged(){
            accountService.isLogged()
          },
          logout(){
        accountService.logout();
          this.$router.push('/');
            location.reload();
          },
          makeBurger () {
      this.activator = !this.activator
      return this.activator
    }
        },
        computed: {
          isLoggedIn(){
            console.log('hello')
            return !! window.localStorage.getItem('token')
          },
          isAdminOrEditor(){
            return window.localStorage.getItem('role')
          }
        }
    }
    </script>