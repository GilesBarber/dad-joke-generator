<template>
  <div class="home">
   <h2>I can haz dad jokes?</h2>
   <h3>{{joke}}</h3>
   <v-btn
   @click="addJoke"
  elevation="2"
>
Add joke
</v-btn>
 </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
  export default {
    name: 'Home',
    methods: {
      ...mapActions({addJoke: 'setCurrentJoke'}),
      // mapActions removes need for: 
      // addJoke(){
      //    this.$store.dispatch("setCurrentJoke")
      // }
    },

    data: () => ({
      // joke: ''      
     
    }),
     computed: {
      ...mapGetters({joke: 'getCurrentJoke'}),
         // mapGetters removes need for:  
        //  joke(){
         // return this.$store.getters.getCurrentJoke;
         // }
       },
    // mounted(){
    //   this.joke = this.$store.getters.getCurrentJoke;
    // }
  }
</script>
<style scoped>
button{
  margin-top: 1rem;
}
h2{
  color: darkorange;
  font-weight: bold;
  font-size: 2.5rem;
}
.home{
margin: 2rem;
}

</style>