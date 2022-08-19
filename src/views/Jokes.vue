<template>
  <div class="jokes">

    <h1>These are all the jokes you've retrieved:</h1>
    <h4
    v-for="(joke,idx) in jokes" :key="idx">
      <span>{{idx+1}}</span>
      {{joke}}
      </h4>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters({
      jokes: "getAllJokes"
    })
     // mapActions removes need for:
    // jokes(){
    //   return this.$store.getters.getAllJokes
    // }
  }
}
</script>
<style scoped>
h4{
  color: darkorange;
  font-weight: bold;
  font-size: 2.5rem;
}
.jokes{
margin: 2rem;
}

</style>
