<template>
  <div class="sticky bottom-0 bg-white w-screen h-[auto] shadow-lg border max-w-[440px] m-auto">
    <div class="grid grid-cols-4">
      <router-link to="/" v-slot="{isActive}">
        <div class="flex flex-col m-4">
          <IconHome class="w-[30px] h-[30px] mx-auto" :class="isActive ? 'text-[#7a3beb]' : 'text-[#6E6E72]'"/>
          <span class="text-xxs" :class="isActive ? 'text-[#7a3beb]' : 'text-[#6E6E72]'">Beranda</span>
        </div>
      </router-link>
      <router-link to="/point" v-slot="{isActive}">
        <div class="flex flex-col m-4">
          <IconPoint class="w-[30px] h-[30px] mx-auto" :class="isActive ? 'text-[#7a3beb]' : 'text-[#6E6E72]'"/>
          <span class="text-xxs" :class="isActive ? 'text-[#7a3beb]' : 'text-[#6E6E72]'">Poin</span>
        </div>
      </router-link>
      <router-link to="/messages" v-slot="{isActive}">
        <div class="flex flex-col m-4">
          <IconMailer alt="" class="w-[30px] h-[30px] mx-auto" :class="isActive ? 'text-[#7a3beb]' : 'text-[#6E6E72]'"/>
          <span class="text-xxs" :class="isActive ? 'text-[#7a3beb]' : 'text-[#6E6E72]'">Pesan</span>
        </div>
      </router-link>
      <router-link to="/setting" v-slot="{isActive}">
        <div class="flex flex-col m-4">
          <IconSetting class="w-[30px] h-[30px] mx-auto" :class="isActive ? 'text-[#9d35f2]' : 'text-[#6E6E72]'"/>
          <span class="text-xxs" :class="isActive ? 'text-[#7a3beb]' : 'text-[#6E6E72]'">Pengaturan</span>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script setup>
  
</script>

<script>
import  IconHome  from './Icons/IconHome.vue'
import  IconMailer  from './Icons/IconMailer.vue'
import  IconSetting  from './Icons/IconSetting.vue'
import  IconPoint  from './Icons/IconPoint.vue'

export default {
  components : {
    IconHome,
    IconMailer,
    IconSetting,
    IconPoint
  }
}
</script>

<style lang="scss" scoped>
</style>