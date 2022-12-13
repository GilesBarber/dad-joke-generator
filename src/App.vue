<template>
  <v-app id="inspire">
     <v-navigation-drawer
     v-model="drawer"
     app
     >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Vuetify 
          </v-list-item-title>
          <v-list-item-subtitle>
            Dad joke generator
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex';
  export default {
    methods: {
      ...mapActions(['setCurrentJoke'])
    },
    data: () => ({ 
       items: [
          { title: 'Joke generator', icon: 'mdi-view-dashboard', to: '/' },
          { title: 'Jokes list', icon: 'mdi-image', to: '/Jokes' },
          { title: 'About', icon: 'mdi-help-box', to: '/about'  },
        ],
        drawer: null
       }),
       mounted(){
        this.setCurrentJoke()
         // mapActions removes need for: this.$store.dispatch("setCurrentJoke")
       }
  }
</script>