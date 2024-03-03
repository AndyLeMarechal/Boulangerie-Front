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

        <tbody v-for="(saltySide, index) in saltySides"  key:="bread.id">
            <tr>
                <td>
                    <div class="buttons">
                        <router-link v-bind:to="'saltySides/edit/'+ saltySide.id">
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
                <th>{{saltySide.id}}</th>
                <td>{{saltySide.title}}</td>
                <td>{{saltySide.description}}</td>
                <td><figure  class="image is-5by5">
                        <img :src=" saltySide.img " :alt=" saltySide.title">
                    </figure></td>
                <td>{{saltySide.price}}</td>
                <td>{{saltySide.method_of_conservation}}</td>
                <td>{{saltySide.composition}}</td>
                <td>{{saltySide.nutritional_values}}</td>
                <td>{{saltySide.allergens}}</td>
                <td>{{saltySide.created_at}}</td>
                <td>{{saltySide.updated_at}}</td>
                
            </tr>
            <br>
            <br>
        </tbody>

    </table>
</template>

<script>
import {  saltySidesServices } from '@/_services/saltySides.services.js'

export default {
    name: 'saltySidesIndex',
    data() {
        return {
            saltySides: []
        }
    },
    methods: {
        del(index){
            saltySidesServices.deleteSaltySide(this.saltySides[index].id)
                .then(res => this.saltySides.splice(index, 1))
                .catch(err => console.log(err))
        }
    },
    mounted() {
        saltySidesServices.getAllSaltySides()
            .then(res => {
                this.saltySides = res.data
            })
            .catch(err => console.log(err))
    }
}
</script>
