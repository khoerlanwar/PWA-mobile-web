<template>
  <div id="app">
    <HeaderTop />
    <router-view />
    <BottomNavigation />
  </div>
</template>

<script>
import HeaderTop from './components/TopHeader.vue'
import BottomNavigation from './components/BottomNavigation.vue'

export default {
  components : {
    HeaderTop,
    BottomNavigation
  }
}
</script>

<style>
#app {
  font-family: 'Inter', Arial, Helvetica, sans-serif;
  font-style: Regular;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #6E6E72;
}

/* body {
  background-color: #EAEAE0;
} */

main {
  width: 440px;
  /* min-height: 680px; */
  background-color: #EAEAE0;
  height: 100%;
  margin: auto;
  align-items: center;
  padding: 1.5rem;
}
</style>
