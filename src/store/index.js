import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const url = "https://icanhazdadjoke.com/"
const headers = { Accept: "application/json"}

export default new Vuex.Store({
  state: {
    currentJoke: 'this is not a joke',
    allJokes: []
  },
  getters: { 
    getCurrentJoke: state => state.currentJoke,
    getAllJokes: state => state.allJokes

  },
  mutations: { // synchronous way to update state in the store
    setCurrentJoke(state, payload){
      state.currentJoke = payload;
      state.allJokes.push(payload)
    }
  },
  actions: { // asynchronous way to 
    async setCurrentJoke(state){
      const joke = await fetch(url, { headers })
      const j = await joke.json()
      state.commit('setCurrentJoke', j.joke)
    }

  },
  modules: {
  }
})
