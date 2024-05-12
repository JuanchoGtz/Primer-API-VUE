import { createStore } from 'vuex'

export default createStore({
  state: {
    characters:[],
    charactersFilter:[]
  },
  getters: {
   
  },
  mutations: {
    SetCharacters(state,payload){
      state.characters = payload
    },
    SetCharactersFilter(state,payload){
      state.charactersFilter = payload
    }
  },
  actions: {
    async GetCharacters({commit}){
      try {
        const response=await fetch('https://rickandmortyapi.com/api/character')
        const data=await response.json()
        commit('SetCharacters', data.results)
        commit('SetCharactersFilter', data.results)
      } catch (error) {
        console.error(error)
      }
    },
    FilterByStatus({commit,state},status){
      const results= state.characters.filter((character)=>{
        return character.status.includes(status)
      })
      commit('SetCharactersFilter', results)
    }
  },
  modules: {
  }
})
