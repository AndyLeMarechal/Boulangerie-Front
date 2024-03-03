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

        <tbody v-for="(bread, index) in breads"  key:="bread.id">
            <tr>
                <td><div class="buttons">
                        <router-link v-bind:to="'breads/edit/'+ bread.id">
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
                <th>{{bread.id}}</th>
                <td>{{bread.title}}</td>
                <td>{{bread.description}}</td>
                <td><figure  class="image is-4by4">
                        <img class="" :src=" bread.img " :alt=" bread.title">
                    </figure></td>
                <td>{{bread.price}}</td>
                <td>{{bread.method_of_conservation}}</td>
                <td>{{bread.composition}}</td>
                <td>{{bread.nutritional_values}}</td>
                <td>{{bread.allergens}}</td>
                <td>+{{bread.created_at}}</td>
                <td>{{bread.updated_at}}</td>
                
            </tr>
            <br>
            <br>
        </tbody>
        

    </table>
</template>

<script>
import { breadServices } from '@/_services/breads.services.js'
import BreadsModal from '../modals/Breads.modal.vue'

export default {
    name: 'breadsIndex',
    components: {
        BreadsModal
    },
    data() {
        return {
            breads: [],
            selectedModal: ''
        }
    },
    methods: {
        del(index){
            console.log(index)
            console.log(this.breads[index].id)
            breadServices.deleteBread(this.breads[index].id)
                .then(res => this.breads.splice(index, 1))
                .catch(err => console.log(err))
        }
    },
    mounted() {
        breadServices.getAllBreads()
            .then(res => {
                this.breads = res.data
            })
            .catch(err => console.log(err))
    }
}
</script>
