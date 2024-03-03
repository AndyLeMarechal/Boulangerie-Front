<template>
    <div class="section">
  <div class="columns">
    <aside class="column is-2">
      <nav class="menu">
        <router-link to="/" class="navbar-item">
              <img src="/icon.png" width="100" height="28">
            </router-link>
        <p class="menu-label">
          General
        </p>
        <ul class="menu-list">
          <li><a :class="{ 'is-active' : selectedPage == 'Dashboard' }"  @click.prevent="selectedPage ='Dashboard'">Dashboard</a></li>
        </ul>
        <p class="menu-label">
          Administration
        </p>
        <ul class="menu-list">
          <li><a :class="{ 'is-active' : selectedPage == 'Breads' }" href="#" @click.prevent="selectedPage ='Breads'">Breads</a></li>
          <li><a :class="{ 'is-active' : selectedPage == 'BreakFastPastrys' }" href="#" @click.prevent="selectedPage ='BreakFastPastrys'">Break fast pastrys</a></li>
          <li><a :class="{ 'is-active' : selectedPage == 'Pastries' }" href="#" @click.prevent="selectedPage ='Pastries'">Pastries</a></li>
          <li><a :class="{ 'is-active' : selectedPage == 'SaltySides' }" href="#" @click.prevent="selectedPage ='SaltySides'">Salty Sides</a></li>
          <li><a :class="{ 'is-active' : selectedPage == 'OurBakerys' }" href="#" @click.prevent="selectedPage ='OurBakerys'">Our bakerys</a></li>
          <li><a :class="{ 'is-active' : selectedPage == 'Users' }" href="#" @click.prevent="selectedPage ='Users'">Users</a></li>
        </ul>
      </nav>
    </aside>
    
    <main class="column">
      <div class="level">
        <div class="level-left">
          <div class="level-item">
            <div class="title">Dashboard</div>
          </div>
        </div>
      </div>

      <div class="columns is-multiline">
        <div class="column is-mobile">
            <BreadsIndex v-if="selectedPage === 'Breads'" />
            <BreakFastPastrysIndex v-if="selectedPage === 'BreakFastPastrys'" />
            <PastriesIndex v-if="selectedPage === 'Pastries'" />
            <SaltySidesIndex v-if="selectedPage === 'SaltySides'" />
            <OurBakerysIndex v-if="selectedPage === 'OurBakerys'" />
            <UserIndex v-if="selectedPage === 'Users'" />
        </div>
      </div>
    </main>
  </div>
</div>
  
   
    <RouterView />
</template>

<script>
import UserIndex from './users/UserIndex.vue';
import BreadsIndex from './breads/BreadsIndex.vue';
import BreakFastPastrysIndex from './breakFastPastrys/BreakFastPastrysIndex.vue';
import OurBakerysIndex from './our_bakerys/OurBakerysIndex.vue';
import PastriesIndex from './pastries/PastriesIndex.vue';
import SaltySidesIndex from './saltySides/SaltySidesIndex.vue';

export default {
    name: 'dashboard',
    components: {
        UserIndex,
        BreadsIndex,
        BreakFastPastrysIndex,
        OurBakerysIndex,
        PastriesIndex,
        SaltySidesIndex
    },
    data(){
      return {
        selectedPage: 'Dashboard'
      }
    }
    
}
</script>