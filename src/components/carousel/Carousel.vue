<template>
  <div class="container is-max-desktop">
    <br>
  <div class="box">
    <div class="content">
      <h2>Breads</h2>
    </div>
				<Carousel :items-to-show="2.5" :wrap-around="true">
              <Slide class="container" v-for="bread in breads" :key="bread">
                <div class="carousel__item">
                  <figure class="image is-100x100">
                  <img class="" :src=" bread.img " :alt=" bread.title">
                </figure>
              </div>
              </Slide>
              <template #addons>
                <Navigation />
              </template>
            </Carousel>
        </div>

        <div class="box">
    <div class="content">
      <h2>Break-Fast Pastry</h2>
    </div>
				<Carousel :items-to-show="2.5" :wrap-around="true">
              <Slide class="container" v-for="breakFastPastry in breakFastPastrys" :key="breakFastPastry">
                <div class="carousel__item">
                  <figure class="image is-100x100">
                  <img class="" :src=" breakFastPastry.img " :alt=" breakFastPastry.title">
                </figure>
              </div>
              </Slide>
              <template #addons>
                <Navigation />
              </template>
            </Carousel>
        </div>

        <div class="box">
    <div class="content">
      <h2>Pastries</h2>
    </div>
				<Carousel :items-to-show="2.5" :wrap-around="true">
              <Slide class="container" v-for="pastrie in pastries" :key="pastrie">
                <div class="carousel__item">
                  <router-link v-bind:to="'articles/pastries/'+pastrie.id">
                  <figure class="image is-100x100">
                  <img class="" :src=" pastrie.img " :alt=" pastrie.title">
                </figure>
              </router-link>
              </div>
              </Slide>
              <template #addons>
                <Navigation />
              </template>
            </Carousel>
        </div>

        <div class="box">
    <div class="content">
      <h2>Salty Sides</h2>
    </div>
				<Carousel :items-to-show="2.5" :wrap-around="true">
              <Slide class="container" v-for="saltySide in saltySides" :key="saltySide">
                <div class="carousel__item">
                  <figure class="image is-100x100">
                  <img class="" :src=" saltySide.img " :alt=" saltySide.title">
                </figure>
              </div>
              </Slide>
              <template #addons>
                <Navigation />
              </template>
            </Carousel>
        </div>
      </div>

        
           
  </template>

<script>
import { breadServices } from '@/_services/breads.services.js'
import { BreakFastPastryservices } from '@/_services/breakFastPastrys.services.js'
import { pastrieServices } from '@/_services/pastries.services.js'
import { saltySidesServices } from '@/_services/saltySides.services.js'


    import { Carousel, Navigation, Slide } from 'vue3-carousel'
    import 'vue3-carousel/dist/carousel.css'

    export default {
  name: 'WrapAround',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
          return {
            breads: [],
            breakFastPastrys: [],
            pastries: [],
            saltySides: [],
          }
        },
        mounted() {
        breadServices.getAllBreads()
          .then(res => this.breads = res.data)
          .catch(err => console.log(err))
        BreakFastPastryservices.getAllBreakFastPastrys()
          .then(res => this.breakFastPastrys = res.data)
          .catch(err => console.log(err))
        pastrieServices.getAllPastries()
          .then(res => this.pastries = res.data)
          .catch(err => console.log(err))
        saltySidesServices.getAllSaltySides()
          .then(res => this.saltySides = res.data)
          .catch(err => console.log(err))
      },
}
</script>