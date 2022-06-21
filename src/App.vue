<template>
  <div id="app" class="m-auto max-w-[420px]">
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

main {
  background-color: #EAEAE0;
  width: 420px;
  /* min-height: 680px; */
  height: 100%;
  margin: auto;
  margin-bottom: 74px;
  align-items: center;
  padding: 1.5rem;
}

</style>
