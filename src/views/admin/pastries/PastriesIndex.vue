<template>
    <table class="table">
        <thead>
            <tr>
                <th>&nbsp;</th>
                <th><abbr title="Id">id</abbr></th>
                <th><abbr title="Title">title</abbr></th>
                <th><abbr title="Description">description</abbr></th>
                <th><abbr title="Img">img</abbr></th>
                <th><abbr title="Price">price</abbr></th>
                <th><abbr title="Method_of_conservation">method_of_conservation</abbr></th>
                <th><abbr title="Composition">composition</abbr></th>
                <th><abbr title="Nutritional_values">nutritional_values</abbr></th>
                <th><abbr title="Allergens">allergens</abbr></th>
                <th><abbr title="Created_at">created_at</abbr></th>
                <th><abbr title="Updated_at">updated_at</abbr></th>
            </tr>
        </thead>
        <tfoot>
            <tr>
                <th>&nbsp;</th>
                <th><abbr title="Id">id</abbr></th>
                <th><abbr title="Title">title</abbr></th>
                <th><abbr title="Description">description</abbr></th>
                <th><abbr title="Img">img</abbr></th>
                <th><abbr title="Price">price</abbr></th>
                <th><abbr title="Method_of_conservation">method_of_conservation</abbr></th>
                <th><abbr title="Composition">composition</abbr></th>
                <th><abbr title="Nutritional_values">nutritional_values</abbr></th>
                <th><abbr title="Allergens">allergens</abbr></th>
                <th><abbr title="Created_at">created_at</abbr></th>
                <th><abbr title="Updated_at">updated_at</abbr></th>
            </tr>
        </tfoot>

        <tbody v-for="(pastrie, index) in pastries"  key:="pastrie.id">
            <tr>
                <td>
                    <div class="buttons">
                        <router-link v-bind:to="'pastries/edit/'+ pastrie.id">
                            <button class="button">
                                <span class="icon">
                                    <i class="fa-solid fa-pencil"></i>
                                </span>
                            </button>
                        </router-link>
                        <button @click="del(index)" class="button">
                            <span class="icon">
                                <i class="fa-solid fa-trash"></i>
                             </span>
                        </button>
                    </div>
                </td>
                <th>{{pastrie.id}}</th>
                <td>{{pastrie.title}}</td>
                <td>{{pastrie.description}}</td>
                <td><figure  class="image is-5by5">
                        <img :src=" pastrie.img " :alt=" pastrie.title">
                    </figure></td>
                <td>{{pastrie.price}}</td>
                <td>{{pastrie.method_of_conservation}}</td>
                <td>{{pastrie.composition}}</td>
                <td>{{pastrie.nutritional_values}}</td>
                <td>{{pastrie.allergens}}</td>
                <td>{{pastrie.created_at}}</td>
                <td>{{pastrie.updated_at}}</td>
                
            </tr>
            <br>
            <br>
        </tbody>

    </table>
</template>

<script>
import {  pastrieServices } from '@/_services/pastries.services.js'

export default {
    name: 'pastriesIndex',
    data() {
        return {
            pastries: []
        }
    },
    methods: {
        del(index){
            console.log(index)
            console.log(this.pastries[index].id)
            pastrieServices.deletePastrie(this.pastries[index].id)
                .then(res => {console.log(this.pastries.splice(index, 1))})
                .catch(err => console.log(err))
        }
    },
    mounted() {
        pastrieServices.getAllPastries()
            .then(res => {
                this.pastries = res.data
            })
            .catch(err => console.log(err))
    }
}
</script>
