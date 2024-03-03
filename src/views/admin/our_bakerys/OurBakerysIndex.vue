<template>
    <table class="table">
        <thead>
            <tr>
                <th>&nbsp;</th>
                <th><abbr title="Id">id</abbr></th>
                <th><abbr title="Title">title</abbr></th>
                <th><abbr title="Description">description</abbr></th>
                <th><abbr title="Img">img</abbr></th>
                <th><abbr title="Hourly">Hourly</abbr></th>
                <th><abbr title="City">City</abbr></th>
                <th><abbr title="Address">Address</abbr></th>
                <th><abbr title="Zip_code">Zip_code</abbr></th>
                <th><abbr title="Created_at">created_at</abbr></th>
                <th><abbr title="Updated_at">updated_at</abbr></th>
            </tr>
        </thead>
        <tfoot>
            <tr>
                <th>&nbsp;</th>
                <th><abbr title="id">id</abbr></th>
                <th><abbr title="title">title</abbr></th>
                <th><abbr title="description">description</abbr></th>
                <th><abbr title="img">img</abbr></th>
                <th><abbr title="hourly">hourly</abbr></th>
                <th><abbr title="city">city</abbr></th>
                <th><abbr title="address">address</abbr></th>
                <th><abbr title="zip_code">zip_code</abbr></th>
                <th><abbr title="created_at">created_at</abbr></th>
                <th><abbr title="updated_at">updated_at</abbr></th>
            </tr>
        </tfoot>

        <tbody v-for="(ourBakery, index) in ourBakerys"  key:="ourBakery.id">
            <tr>
                <td>
                    <div class="buttons">
                        <router-link v-bind:to="'ourBakerys/edit/'+ ourBakery.id">
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
                <th>{{ourBakery.id}}</th>
                <td>{{ourBakery.title}}</td>
                <td>{{ourBakery.description}}</td>
                <td><figure  class="image is-5by5">
                        <img :src=" ourBakery.img " :alt=" ourBakery.title">
                    </figure></td>
                <td>{{ourBakery.hourly}}</td>
                <td>{{ourBakery.city}}</td>
                <td>{{ourBakery.address}}</td>
                <td>{{ourBakery.zip_code}}</td>
                <td>{{ourBakery.created_at}}</td>
                <td>{{ourBakery.updated_at}}</td>
                
            </tr>
            <br>
            <br>
        </tbody>

    </table>
</template>

<script>
import {  ourBakerysServices } from '@/_services/our_bakerys.services.js'

export default {
    name: 'ourBakerysIndex',
    data() {
        return {
            ourBakerys: []
        }
    },
    methods: {
        del(index){
            console.log(index)
            console.log(this.ourBakerys[index].id)
            ourBakerysServices.deleteOurBakery(this.ourBakerys[index].id)
                .then(res => this.ourBakerys.splice(index, 1))
                .catch(err => console.log(err))
        }
    },
    mounted() {
        ourBakerysServices.getAllOurBakerys()
            .then(res => {
                this.ourBakerys = res.data
            })
            .catch(err => console.log(err))
    }
}
</script>
