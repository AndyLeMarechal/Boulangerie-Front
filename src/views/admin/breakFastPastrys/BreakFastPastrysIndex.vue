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

        <tbody v-for="(breakFastPastry, index) in breakFastPastrys"  key:="breakFastPastry.id">
            <tr>
                <td>
                    <div class="buttons">
                        <router-link v-bind:to="'breakfastPastrys/edit/'+ breakFastPastry.id">
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
                <th>{{breakFastPastry.id}}</th>
                <td>{{breakFastPastry.title}}</td>
                <td>{{breakFastPastry.description}}</td>
                <td><figure  class="image is-5by5">
                        <img :src=" breakFastPastry.img " :alt=" breakFastPastry.title">
                    </figure></td>
                <td>{{breakFastPastry.price}}</td>
                <td>{{breakFastPastry.method_of_conservation}}</td>
                <td>{{breakFastPastry.composition}}</td>
                <td>{{breakFastPastry.nutritional_values}}</td>
                <td>{{breakFastPastry.allergens}}</td>
                <td>{{breakFastPastry.created_at}}</td>
                <td>{{breakFastPastry.updated_at}}</td>
                
            </tr>
            <br>
            <br>
        </tbody>

    </table>
</template>

<script>
import { BreakFastPastryservices } from '@/_services/breakFastPastrys.services.js'
export default {
    name: 'breakFastPastrysIndex',
    data() {
        return {
            breakFastPastrys: []
        }
    },
    methods: {
        del(index){
            console.log(index)
            console.log(this.breakFastPastrys[index].id)
            BreakFastPastryservices.deleteBreakFastPastry(this.breakFastPastrys[index].id)
                .then(res => this.breakFastPastrys.splice(index, 1))
                .catch(err => console.log(err))
        }
    },
    mounted() {
       BreakFastPastryservices.getAllBreakFastPastrys()
        .then(res => {
            this.breakFastPastrys = res.data
        })
        .catch(err => console.log(err))
    }
}
</script>
