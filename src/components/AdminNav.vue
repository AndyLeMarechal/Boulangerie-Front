<template>
  
    <!-- <header>
        <nav class="navbar" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <router-link to="/" class="navbar-item">
              <img src="/icon.png" width="100" height="28">
            </router-link>
        
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
        
          <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
                <div class="navbar-item">
                    <router-link to="/admin/users/index" class="navbar-item">User</router-link>
                </div>
                <div class="navbar-item">
                    <router-link to="/admin/breads/index" class="navbar-item">Breads</router-link>
                </div>
                <div class="navbar-item">
                    <router-link to="/admin/breakfastPastrys/index" class="navbar-item">Break fast pastry</router-link>
                </div>
                <div class="navbar-item">
                    <router-link to="/admin/ourBakerys/index" class="navbar-item">Our bakerys</router-link>
                </div>
                <div class="navbar-item">
                    <router-link to="/admin/pastries/index" class="navbar-item">Pastries</router-link>
                </div>
                <div class="navbar-item">
                    <router-link to="/admin/saltySides/index" class="navbar-item">Salty Sides</router-link>
                </div>
              </div>
            </div>
        
            <div class="navbar-end">
              <div class="navbar-item">
                <div class="buttons">
                <button @click="logout()" class="button is-danger"><i class="fa-solid fa-right-from-bracket"></i></button>
                </div>
              </div>
            </div>
        </nav>
      </header> -->

    </template>

<script>
import { accountService } from '@/_services'
export default {
    name: 'AdminNav',
    methods:{
      logout(){
        accountService.logout();
        this.$router.push('/')
      }
    }
}
</script>