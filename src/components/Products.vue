<template lang="html">
  <v-layout row wrap>
    <v-flex  xs4 v-for="product in products" :key="product.id">
      <v-card>
         <v-card-media src="https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto/y2v3v2ef5wj789fvksax/chaussure-acg-air-revaderchi-pour-Pz15mQ.jpg" height="250px"> 
        </v-card-media>
        <v-card-title primary-title>
           <div>
            <h3 class="headline mb-0">Chaussure Nike</h3>
            <div>Nike ACG Air Revaderchi</div>
            <h4>200 $</h4>
            <small>7 - in stock</small>
          </div> 
          
        </v-card-title>
        <v-card-actions>
          <v-btn
            :to="{
                name: 'Product',
                params: {
                    id: product.id
                }
            }"
            flat color="orange">View</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>


<script>
import API from '@/lib/API';


export default {
    data() {
        return {
            products: [],
        };
    },
    mounted() {
        this.load()
    },
    methods: {
        load() {
         API.getProducts()
         .then((products) => {
           this.products = products
         });
        },
    },
};
</script>

<style lang="css">

</style>

