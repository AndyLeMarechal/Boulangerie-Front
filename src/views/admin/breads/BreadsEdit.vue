<template>
    <div class="container box p-6 has-background-light"> 
      <h1 class="title has-text-centered has-text-success"> Update bread </h1>  
      <form @submit.prevent="edit"> 

        <input type="number" id="bread_id" v-model="bread.id" hidden >

        <div class="field"> 
          <label for="title" class="label">Title</label> 
          <div class="control"> 
            <input class="input" type="text" v-model="bread.title" placeholder="Enter the title"/> 
          </div> 
        </div> 

        <div class="field"> 
          <label for="description" class="label">Description</label> 
          <div class="control"> 
            <input class="input" type="text" v-model="bread.description" placeholder="Enter the description"/> 
          </div> 
        </div>

        <div class="field"> 
          <label for="img" class="label">Img</label> 
          <div class="control"> 
            <input class="input" type="text" v-model="bread.img" placeholder="Enter url for img"/> 
          </div> 
        </div>

        <div class="field"> 
          <label for="method_of_conservation" class="label">Method of conservation</label> 
          <div class="control"> 
            <input class="input" type="text" v-model="bread.method_of_conservation" placeholder="Enter the method of conservation"/> 
          </div> 
        </div>

        <div class="field"> 
          <label for="composition" class="label">Composition</label> 
          <div class="control"> 
            <input class="input" type="text" v-model="bread.composition"  placeholder="Enter the composition"/> 
          </div> 
        </div>

        <div class="field"> 
          <label for="nutritional_values" class="label">Nutritional values</label> 
          <div class="control"> 
            <input class="input" type="text" v-model="bread.nutritional_values" placeholder="Enter the nutritional values"/> 
          </div> 
        </div>

        <div class="field"> 
          <label for="allergens" class="label">Allergens</label> 
          <div class="control"> 
            <input class="input" type="text" v-model="bread.allergens" placeholder="Enter the allergens"/> 
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
import { breadServices } from '@/_services/breads.services.js'

export default {
    name: 'breadsEdit',
    props: ['id'],
    data(){
        return {
            bread: {}
        }
    },
    methods: {
        edit(){
            console.log()
            breadServices.updateBread(this.bread)
                .then(res => this.$router.push('/admin/dashboardx'))
                .catch(err => console.log(err))
        }
    },
    mounted() {
        breadServices.getBread(this.id)
        .then(res => {
            this.bread = res.data[0]
        })
        .catch(err => {
            console.log(err)
        })
    }
}
</script>
