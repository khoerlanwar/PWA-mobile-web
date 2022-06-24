<template>
  <main class="h-screen w-screen max-w-[440px] overflow-auto">
    <div class="grid grid-cols-4 bg-[#7a3beb] h-[100px] shadow-lg rounded mb-6">
      <div class="col-span-1 m-auto">
        <img src="@/assets/users_dummy_male.png" alt="" class="w-[70px] shadow-lg bg-white rounded-full">
      </div>
      <div class="col-span-3 text-left ml-2 m-auto text-white">
        <p class="text-lg font-semibold">Khoirul Anwar</p>
        <p class="text-md pt-2">123456789</p>
        <p class="text-md">khoerlanwar@gmail.com</p>
      </div>
    </div>
    <div class="flex justify-content-start bg-white p-4" style="margin-left: -1.5rem; margin-right: -1.5rem;">
      <div class="font-semibold">Account</div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'CrudSettingView',

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>

</style>