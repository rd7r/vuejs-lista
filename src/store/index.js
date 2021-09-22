import { createStore } from 'vuex'

export default createStore({
  state: {
    frutas: [
      {name: 'Piña', cantidad: 0},
      {name: 'Uva', cantidad: 0},
      {name: 'Tuna', cantidad: 0}
    ]
  },
  mutations: {
    aumentar(state, index){
      state.frutas[index].cantidad ++;
    },
    reiniciar(state){
      state.frutas.map((fru)=>{fru.cantidad=0});
    }
  },
  actions: {
  },
  modules: {
  }
})
