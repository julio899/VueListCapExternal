<template>
  <div id="applist">
    <ListModule msg="modulo para la generacion de listas"/>
  </div>
</template>

<script>
import ListModule from './components/ListModule.vue'

export default {
  name: 'app',
  components: {
    ListModule
  }
}
</script>

<style>
#applist {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}
</style>
