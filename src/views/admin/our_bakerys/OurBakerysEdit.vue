<template>
    <div class="container box p-6 has-background-light"> 
      <h1 class="title has-text-centered has-text-success"> Update Break Fast Pastry </h1>  
      <form @submit.prevent="edit"> 

        <input type="number" id="ourBakery_id" v-model="ourBakery.id" hidden >

        <div class="field"> 
          <label for="title" class="label">Title</label> 
          <div class="control"> 
            <input class="input" type="text" v-model="ourBakery.title" placeholder="Enter the title"/> 
          </div> 
        </div> 

        <div class="field"> 
          <label for="description" class="label">Description</label> 
          <div class="control"> 
            <input class="input" type="text" v-model="ourBakery.description" placeholder="Enter the description"/> 
          </div> 
        </div>

        <div class="field"> 
          <label for="img" class="label">Img</label> 
          <div class="control"> 
            <input class="input" type="text" v-model="ourBakery.img" placeholder="Enter url for img"/> 
          </div> 
        </div>

        <div class="field"> 
          <label for="hourly" class="label">Hourly</label> 
          <div class="control"> 
            <input class="input" type="text" v-model="ourBakery.hourly" placeholder="Enter the hourly"/> 
          </div> 
        </div>

        <div class="field"> 
          <label for="city" class="label">City</label> 
          <div class="control"> 
            <input class="input" type="text" v-model="ourBakery.city"  placeholder="Enter the city"/> 
          </div> 
        </div>

        <div class="field"> 
          <label for="address" class="label">Address</label> 
          <div class="control"> 
            <input class="input" type="text" v-model="ourBakery.address" placeholder="Enter the address"/> 
          </div> 
        </div>

        <div class="field"> 
          <label for="zip_code" class="label">Zip code</label> 
          <div class="control"> 
            <input class="input" type="text" v-model="ourBakery.zip_code" placeholder="Enter the zip code"/> 
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
import {  ourBakerysServices } from '@/_services/our_bakerys.services.js'

export default {
    name: 'ourBakerysEdit',
    props: ['id'],
    data(){
        return {
            ourBakery: {}
        }
    },
    methods: {
        edit(){
            console.log()
            ourBakerysServices.updateOurBakery(this.ourBakery)
                .then(res => this.$router.push('/admin/dashboard'))
                .catch(err => console.log(err))
        }
    },
    mounted() {
        ourBakerysServices.getOurBakery(this.id)
        .then(res => {
            this.ourBakery = res.data[0]
        })
        .catch(err => {
            console.log(err)
        })
    }
}
</script>
