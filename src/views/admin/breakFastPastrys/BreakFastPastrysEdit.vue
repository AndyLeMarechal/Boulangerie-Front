<template>
    <div class="container box p-6 has-background-light"> 
      <h1 class="title has-text-centered has-text-success"> Update Break Fast Pastry </h1>  
      <form @submit.prevent="edit"> 

        <input type="number" id="breakFastPastry_id" v-model="breakFastPastry.id" hidden >

        <div class="field"> 
          <label for="title" class="label">Title</label> 
          <div class="control"> 
            <input class="input" type="text" v-model="breakFastPastry.title" placeholder="Enter the title"/> 
          </div> 
        </div> 

        <div class="field"> 
          <label for="description" class="label">Description</label> 
          <div class="control"> 
            <input class="input" type="text" v-model="breakFastPastry.description" placeholder="Enter the description"/> 
          </div> 
        </div>

        <div class="field"> 
          <label for="img" class="label">Img</label> 
          <div class="control"> 
            <input class="input" type="text" v-model="breakFastPastry.img" placeholder="Enter url for img"/> 
          </div> 
        </div>

        <div class="field"> 
          <label for="method_of_conservation" class="label">Method of conservation</label> 
          <div class="control"> 
            <input class="input" type="text" v-model="breakFastPastry.method_of_conservation" placeholder="Enter the method of conservation"/> 
          </div> 
        </div>

        <div class="field"> 
          <label for="composition" class="label">Composition</label> 
          <div class="control"> 
            <input class="input" type="text" v-model="breakFastPastry.composition"  placeholder="Enter the composition"/> 
          </div> 
        </div>

        <div class="field"> 
          <label for="nutritional_values" class="label">Nutritional values</label> 
          <div class="control"> 
            <input class="input" type="text" v-model="breakFastPastry.nutritional_values" placeholder="Enter the nutritional values"/> 
          </div> 
        </div>

        <div class="field"> 
          <label for="allergens" class="label">Allergens</label> 
          <div class="control"> 
            <input class="input" type="text" v-model="breakFastPastry.allergens" placeholder="Enter the allergens"/> 
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
import { BreakFastPastryservices } from '@/_services/breakFastPastrys.services.js'

export default {
    name: 'breakFastPastrysEdit',
    props: ['id'],
    data(){
        return {
            breakFastPastry: {}
        }
    },
    methods: {
        edit(){
            console.log()
            BreakFastPastryservices.updateBreakFastPastry(this.breakFastPastry)
                .then(res => this.$router.push('/admin/dashboard'))
                .catch(err => console.log(err))
        }
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
