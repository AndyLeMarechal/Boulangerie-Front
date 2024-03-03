<template>
    <div class="hero-body">
                <div class="container has-text-centered pb-6">
                    <div class="columns is-vcentered">
                        <div class="column is-5 is-fixed">
                                <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1SyyeinBq9HaPom5goQtZj1nYr7EDzv0&ehbc=2E312F&noprof=1" width="640" height="480"></iframe>
                        </div>
                            <div class="column is-6 is-offset-1">
                                <div class="box" id="contacts" data-example>
                                    <div class="list" v-for="our_bakery in ourBakerys" >
                                        <div class="list-item" >
                                            <div class="list-item-content">
                                                <div class="list-item-title pb-3">
                                                    <router-link v-bind:to="'ourBakerys/'+our_bakery.id" >
                                                        <h1>{{ our_bakery.title }}</h1>
                                                    </router-link>
                                                </div>
                                            </div>
                                        </div>
                                    <div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </template>


<script>
import { ourBakerysServices } from '@/_services/our_bakerys.services.js';

export default {
    name: 'ourBakerys',
    data(){
        return {
            ourBakerys: []
        }
    },
    methods:{

    },
    mounted(){
        ourBakerysServices.getAllOurBakerys()
            .then(res => {
                this.ourBakerys = res.data
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }
    
}
</script>