<template>
  <div id="app">
    <span>当前有{{$store.state.userIcons.length}}图标</span>
    <child-a></child-a>
    <child-b></child-b>
  </div>
</template>

<script>
import ChildA from './components/ChildA.vue'
import ChildB from './components/ChildB.vue'
export default {
  name: 'app',
  mounted () {
  },
  components: {
    ChildA,
    ChildB
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
