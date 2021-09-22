<template>
  <div class="col-lg-6 offset-3">
    <ul class="list-group list-group-numbered">
      <li v-for="(item, index) in frutas" :key="item.index" @click="aumentar(index)" 
      class="list-group-item d-flex justify-content-between align-items-start flecha">
        <div class="ms-2 me-auto">
          <div class="fw-bold">{{item.name}}</div>
        </div>
        <span class="badge bg-primary rounded-pill">{{item.cantidad}}</span>
      </li>
    </ul>
    <div class="d-grid gap-2">
      <button class="btn btn-primary btn-block mt-5" @click="reiniciar()" type="submit">Reset</button>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
export default {
  name: "Lista",
  computed: {
    ...mapState(['frutas'])
  },
  methods: {
    ...mapMutations(['aumentar','reiniciar'])
  },
};
</script>
<style scoped>
  .flecha{
    cursor: pointer;
  }
</style>