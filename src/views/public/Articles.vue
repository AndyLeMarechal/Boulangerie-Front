<!-- <aside class="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">
  <p class="menu-label is-hidden-touch">Filter</p>
  <ul class="menu-list">
    <li>
      <label class="checkbox">
                <input @click="toggleBreads = !toggleBreads" type="checkbox" checked>
                Pains
              </label>
    </li>
    <li>
      <label class="checkbox">
                <input @click="toggleBreakfastPastrys = !toggleBreakfastPastrys " type="checkbox" checked>
                Viennoiserie
              </label>
    </li>
    <li>
      <label class="checkbox">
                <input @click="togglePastries = !togglePastries" type="checkbox" checked>
                Pâtisserie
              </label>
    </li>
    <li>
      <label class="checkbox">
                <input @click="toggleSaltySides = !toggleSaltySides " type="checkbox" checked>
                Côté salé
              </label>
    </li>
      
  </ul>
</aside> -->
<template>
  <div class="columns">
    <div class="box p-3">
    <div class="column left">
      <label class="checkbox">
                  <input @click="toggleBreads = !toggleBreads" type="checkbox" checked>
                  Pains
                </label>
                <br>
                <label class="checkbox">
                  <input @click="toggleBreakfastPastrys = !toggleBreakfastPastrys " type="checkbox" checked>
                  Viennoiserie
                </label>
                <br>
                <label class="checkbox">
                  <input @click="togglePastries = !togglePastries" type="checkbox" checked>
                  Pâtisserie
                </label>
                <br>
                <label class="checkbox">
                  <input @click="toggleSaltySides = !toggleSaltySides " type="checkbox" checked>
                  Côté salé
                </label>
    </div>
  </div>
    <div class="columns is-multiline">
                <div class="column is-mobile is-centered is-3"
                v-show="toggleBreads" v-for="bread in breads"  key:="bread.id">
                      <div class="post-wrapper">
                        <div class="box">
                          <div class="post-header has-text-centered">
                            
                            <figure  class="image is-4by3">
                              <img :src=" bread.img " :alt=" bread.title">
                            </figure>
                          
                            
                            <h4 class="title is-4">
                              {{ bread.title }}
                            </h4>
                            <p> {{ bread.price + '€' }}</p>
                            <br>
                            <div class="buttons is-centered ">
                              <button class="button is-danger">
                                Ajouter au panier
                              </button>
                            </div>
                          </div>
                          <br>
                          <div class="post-content-short">
                            <div class="continue-reading has-text-centered">
                              <router-link v-bind:to="'articles/bread/'+bread.id">
                            <button  class="button is-primary"> 
                              Lire la suite</button>
                            </router-link>
                          </div>
                            </div>
                          </div>  
                      </div>
                </div>
                <div class="column is-mobile is-centered is-3"
                v-show="toggleBreakfastPastrys" v-for="breakfastPastry in breakfastPastrys"  key:="breakfastPastry.id">
                      <div class="post-wrapper">
                        <div class="box">
                          <div class="post-header has-text-centered">
                            <a href="">
                            <figure class="image is-4by3">
                              <img :src=" breakfastPastry.img " alt="">
                            </figure>
                          </a>
                            
                            <h4 class="title is-4">
                              {{ breakfastPastry.title }}
                            </h4>
                            <p> {{ breakfastPastry.price + '€' }}</p>
                            <br>
                            <div class="buttons is-centered ">
                              <button class="button is-danger">
                                Ajouter au panier
                              </button>
                            </div>
                          </div>
                          <br>
                          <div class="post-content-short">
                            <div class="continue-reading has-text-centered">
                              <router-link v-bind:to="'articles/breakfastPastry/'+breakfastPastry.id">
                            <a class="button is-primary">Lire la suite</a>
                          </router-link>
                          </div>
                            </div>
                          </div>  
                      </div>
                </div>
                <div class="column is-mobile is-centered is-3"
                v-show="togglePastries" v-for="pastrie in pastries"  key:="pastrie.id">
                      <div class="post-wrapper">
                        <div class="box">
                          <div class="post-header has-text-centered">
                            <a href="">
                            <figure class="image is-4by3">
                              <img :src=" pastrie.img " alt="">
                            </figure>
                          </a>
                            
                            <h4 class="title is-4">
                              {{ pastrie.title }}
                            </h4>
                            <p> {{ pastrie.price + '€' }}</p>
                            <br>
                            <div class="buttons is-centered ">
                              <button class="button is-danger">
                                Ajouter au panier
                              </button>
                            </div>
                          </div>
                          <br>
                          <div class="post-content-short">
                            <div class="continue-reading has-text-centered">
                              <router-link v-bind:to="'articles/pastrie/'+pastrie.id">
                            <a class="button is-primary">Lire la suite</a>
                          </router-link>
                          </div>
                            </div>
                          </div>  
                      </div>
                </div>
                <div class="column is-mobile is-centered is-3 "
                v-show="toggleSaltySides" v-for="saltySide in saltySides"  key:="saltySide.id">
                      <div class="post-wrapper">
                        <div class="box">
                          <div class="post-header has-text-centered">
                            <a href="">
                            <figure class="image is-4by3">
                              <img :src=" saltySide.img " alt="">
                            </figure>
                          </a>
                            
                            <h4 class="title is-4">
                              {{ saltySide.title }}
                            </h4>
                            <p> {{ saltySide.price + '€' }}</p>
                            <br>
                            <div class="buttons is-centered ">
                              <button class="button is-danger">
                                Ajouter au panier
                              </button>
                            </div>
                          </div>
                          <br>
                          <div class="post-content-short">
                            <div class="continue-reading has-text-centered">
                              <router-link v-bind:to="'articles/saltySide/'+saltySide.id">
                            <a class="button is-primary">Lire la suite</a>
                          </router-link>
                          </div>
                            </div>
                          </div>  
                      </div>
                </div>
              </div>
  </div>
  </template>
  
  <script >

  import {breadServices} from '@/_services/breads.services.js'
  import {BreakFastPastryservices} from '@/_services/breakFastPastrys.services.js'
  import {pastrieServices} from '@/_services/pastries.services.js'
  import {saltySidesServices} from '@/_services/saltySides.services.js'
  

  export default{
      name:'articles',
      data() {
          return {
              breads: [],
              breakfastPastrys: [],
              pastries: [],
              saltySides: [],
  
              toggleBreads: true,
              toggleBreakfastPastrys: true,
              togglePastries: true,
              toggleSaltySides: true,
          }
      },
      mounted() {
        breadServices.getAllBreads()
          .then(res => {
            this.breads = res.data
          })
          .catch(err => console.log(err))
          
        BreakFastPastryservices.getAllBreakFastPastrys()
          .then(res => {
            this.breakfastPastrys = res.data
          })
          .catch(err => console.log(err))
        
        pastrieServices.getAllPastries()
          .then(res => {
            this.pastries = res.data
          })
          .catch(err => console.log(err))
          
        saltySidesServices.getAllSaltySides()
          .then(res => {
            this.saltySides = res.data
          })
          .catch(err => console.log(err))
      },
     
      
  }

  
  
  
  
  
  
  
  </script>