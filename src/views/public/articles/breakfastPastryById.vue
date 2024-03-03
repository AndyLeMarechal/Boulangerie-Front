<template>
    <div class="hero-body">
                <div class="container has-text-centered pb-6">
                    <div class="columns is-vcentered">
                        <div class="column is-5">
                            <figure class="image is-4by3">
                                <img class="" :src=" breakFastPastry.img " :alt=" breakFastPastry.title">
                            </figure>
                        </div>
                        <div class="column is-6 is-offset-1">
                            <h1 class="title is-2 pb-6">
                                {{breakFastPastry.title}}
                            </h1>
                            <h2 class="subtitle is-4 pb-6">
                                {{breakFastPastry.description}}
                            </h2>

                            <div class="container">
                                <div class="columns is-centered">
                                <div class="column is-one-fifth">
                                    <div class="content is-medium">
                                        <h3>{{ breakFastPastry.price + '€' }}</h3>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div class="container">
                                <div class="columns is-centered">
                                    <div class="column is-one-fifth">
                                        <div class="control">
                                            <input class="input" type="number" value="1" min="1" max="50" >
                                        </div>
                                    </div>
                                <div class="buttons is-centered ">
                                    <button class="button is-danger">
                                        Ajouter au panier
                                    </button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="tabs is-centered pt-6">
                    <ul>
                        <li  @click="activate(li.id)" :class="{ 'is-active' : liActive == li.id }" v-for="li in liArray"><a>{{li.text}}</a></li>
                    </ul>
                </div>

                <div class="container section ">
                    <div class="content-tab has-text-centered-tablet">
                    <p id="1" :class="{ 'is-hidden' : liActive != '1' }">{{ breakFastPastry.method_of_conservation }}</p>
                    <p id="2" :class="{ 'is-hidden' : liActive != '2' }">{{ breakFastPastry.composition }}</p>
                    <p id="3" :class="{ 'is-hidden' : liActive != '3' }">{{ breakFastPastry.nutritional_values }}</p>
                    <p id="4" :class="{ 'is-hidden' : liActive != '4' }">{{ breakFastPastry.allergens }}</p>
                    </div>
                </div>


            </div>
    </template>
    
    <script>
    

    import { BreakFastPastryservices } from '@/_services/breakFastPastrys.services.js'

    export default {
        name: 'breakfastPastryById',
        props: ['id'],
        data(){
            return {
                breakFastPastry: {},

                liArray:[{"id":"1","text":"Method of conservation"},{"id":"2","text":"Composition"},{"id":"3","text":"Nutritional values"},{"id":"4","text":"Allergens"}],
                liActive:1,
            }
        },
        methods: {
            activate(liId){
            this.liActive = liId
            
            },
        },
        mounted() {
        BreakFastPastryservices.getBreakFastPastry(this.id)
        .then(res => {
            this.breakFastPastry = res.data[0]
            
        })
        .catch(err => {
            console.log(err)
        })
    }
    }
    </script>
