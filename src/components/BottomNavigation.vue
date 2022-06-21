<template>
  <div class="fixed bottom-0 h-[75px] bg-white border drop-shadow-md w-[420px] rounded-b-none rounded">
    <div class="flex w-[420px] justify-between items-center">
      <button class="w-1/4">
        <router-link to="/" v-slot="{isActive}">
          <div class="flex flex-col my-4">
            <IconHome class="w-[30px] h-[30px] mx-auto" 
            :class="isActive ? 'text-[#EC8123]' : 'text-[#6E6E72]'"/>
            <span class="text-xxs pb-4" 
            :class="isActive ? 'text-[#EC8123]' : 'text-[#6E6E72]'">Beranda</span>
          </div>
        </router-link>
      </button>
      <button class="w-1/4">
        <router-link to="/point" v-slot="{isActive}">
          <div class="flex flex-col my-4">
            <IconPoint class="w-[30px] h-[30px] mx-auto"
            :class="isActive ? 'text-[#EC8123]' : 'text-[#6E6E72]'"/>
            <span class="text-xxs pb-4" 
            :class="isActive ? 'text-[#EC8123]' : 'text-[#6E6E72]'">Poin</span>
          </div>
        </router-link>
      </button>
      <button class="w-1/4">
        <router-link to="/messages" v-slot="{isActive}">
          <div class="flex flex-col my-4">
            <IconMailer alt="" class="w-[30px] h-[30px] mx-auto"
            :class="isActive ? 'text-[#EC8123]' : 'text-[#6E6E72]'"/>
            <span class="text-xxs pb-4" :class="isActive ? 'text-[#EC8123]' : 'text-[#6E6E72]'">Pesan</span>
          </div>
        </router-link>
      </button>
      <button class="w-1/4">
        <router-link to="/setting" v-slot="{isActive}">
          <div class="flex flex-col my-4">
            <IconSetting class="w-[30px] h-[30px] mx-auto"
            :class="isActive ? 'text-[#EC8123]' : 'text-[#6E6E72]'"/>
            <span class="text-xxs pb-4" :class="isActive ? 'text-[#EC8123]' : 'text-[#6E6E72]'">Pengaturan</span>
          </div>
        </router-link>
      </button>
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