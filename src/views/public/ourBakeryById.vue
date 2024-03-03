<template>
    <div class="hero-body">
                <div class="container has-text-centered pb-6">
                    <div class="columns is-vcentered">
                        <div class="column is-5 is-fixed">
                                <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1SyyeinBq9HaPom5goQtZj1nYr7EDzv0&ehbc=2E312F&noprof=1" width="640" height="480"></iframe>
                        </div>
                            <div class="column is-6 is-offset-1">
                                <div class="box" id="contacts" data-example>
                                    <div class="list" >
                                        <div class="list-item box">
                                        <div class="list-item">
                                            <div class="list-item-content">
                                            <div class="list-item-title">{{ourBakery.title}}</div>
                                            <div class="list-item-description">{{ ourBakery.description }}</div>
                                            <div class="list-item-description">{{ ourBakery.hourly }}</div>
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
            </div>
    </template>

<script>
import { ourBakerysServices } from '@/_services/our_bakerys.services.js';

export default {
    name: 'ourBakeryById',
    props:['id'],
    data(){
        return {
            ourBakery: {

            }
        }
    },
    mounted(){
        ourBakerysServices.getOurBakery(this.id)
            .then(res => {
                this.ourBakery = res.data[0]
            })
            .catch(err => console.log(err))
    }
}
</script>