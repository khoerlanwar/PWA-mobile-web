<template>
  <div class="w-screen max-w-[440px] h-[108px] bg-white px-6 pb-2 pt-4 drop-shadow-md rounded-t-none rounded m-auto">
    <div class="flex justify-between">
      <div class="flex self-items-start">
        <span class="text-md text-[#7a3beb]">OurClinic</span>
        <img src="@/assets/logo_dummy.png" class="w-[20px] h-[20px]"/>
      </div>
      <div class="flex flex-cols">
        <p class="mx-1 mt-1">Hi, </p>
        <p class="mr-5 mt-1 text-[#7a3beb]">Khoirul Anwar</p>
        <IconNotification alt="" class="w-[16px] h-[14px] mt-2"/>
      </div>
    </div>
    <div class="relative mt-1">
      <span class="absolute inset-y-0 left-0 flex items-center pl-2">
        <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
          <IconSearch class="w-[18px] h-[18px]"/>
        </button>
      </span>
      <input type="text" class="w-full h-[38px] text-sm rounded border-2 p-2 pl-9" placeholder="Pencarian.." autocomplete="off"/>
    </div>
  </div>
</template>

<script>
import IconSearch from '@/components/Icons/IconSearch.vue'
import IconNotification from '@/components/Icons/IconNotification.vue'

export default {
  components: {
    IconSearch,
    IconNotification
  }
}
</script>

<script setup>
</script>

<style lang="scss" scoped>
</style>