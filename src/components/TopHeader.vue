<template>
  <div class="w-[420px] h-[108px] bg-white px-6 pb-2 pt-4 drop-shadow-md rounded-t-none rounded">
    <div class="flex justify-between">
      <img src="@/assets/logo_nmw.svg" alt="" class="w-[61px] h-[33px]"/>
      <div class="flex flex-cols">
        <p class="mx-1 mt-1">Hi, </p>
        <p class="mr-5 mt-1 text-[#EC8123]">Deva Andresa</p>
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