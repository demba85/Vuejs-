<template lang="html">
    <v-layout row wrap>
    <v-flex  xs12>
      <v-card>
       <v-card-media src="https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto/y2v3v2ef5wj789fvksax/chaussure-acg-air-revaderchi-pour-Pz15mQ.jpg" height="400px" width="200">   
        </v-card-media>
        <v-card-title primary-title>
           <div>
            <h3 class="headline mb-0">Chaussure Nike</h3>
            <div>Nike ACG Air Revaderchi</div>
            <h4>150 $</h4>
            <small>3 - in stock</small>
          </div> 
        </v-card-title>
        <v-card-actions>
          <v-btn
          :to="{
            name: 'Edit',
           params: {
               id: product.id
           }
          }" 
           flat color="primary">Edit</v-btn>
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
            product: {}
            
        };
    },
    mounted() {
    //   const {id} = this.$route.params;
    //   this.load(id);
    const {id} = this.$route.params;
    this.load(id);
    },
    methods: {
        load(id) {
            API.getProduct(id)
            .then((product) => {
                this.product = product;
            })
        }
    }
  };
</script>

<style lang="css"></style>