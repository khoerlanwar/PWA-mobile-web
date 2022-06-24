<template>
  <main class="h-screen w-screen max-w-[440px] overflow-auto">
    <div class="mb-4">
      <button>
        <div class="border bg-white px-12 py-2 flex rounded shadow-md">
          <div class="text-sm font-bold m-auto">Help Tickets</div>
        </div>
      </button>
    </div>
    <div class="flex justify-between mx-2 py-1">
      <span class="text-sm">Pesan Kamu</span>
    </div>
    <div class="grid max-w-[440px]" style="margin: -1.5rem;">
      <div class="bg-white grid grid-cols-6 p-2 shadow-md border">
        <div class="m-auto">
          <img src="@/assets/icon_costumer_care.svg" alt="" class="bg-[#7a3beb] w-[50px] h-[50px] rounded-full p-2 m-auto" />
        </div>
        <div class="col-span-4 pl-2 col-span-1/2 text-left">
          <p class="text-sm font-semibold">Customer Care</p>
          <p class="pt-1 text-sm">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget...</p>
        </div>
        <div class="text-right grid justify-items-center">
          <p class="text-xs">31/5/2022</p>
          <span class="inline-flex rounded-full h-3 w-3 bg-[#DC4844]"/>
        </div>
      </div>
      <div class="bg-[#F1F1F1] grid grid-cols-6 p-2 shadow-md border">
        <div class="m-auto">
          <img src="@/assets/icon_costumer_care.svg" alt="" class="bg-[#cd9ff5] w-[50px] h-[50px] rounded-full p-2 m-auto" />
        </div>
        <div class="col-span-4 pl-2 col-span-1/2 text-left">
          <p class="text-sm font-semibold">Clinic Utama</p>
          <p class="pt-1 text-sm">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget...</p>
        </div>
        <div class="text-right grid justify-items-center">
          <p class="text-xs">21/3/2022</p>
        </div>
      </div>
      <div class="bg-[#F1F1F1] grid grid-cols-6 p-2 shadow-md border">
        <div class="m-auto">
          <img src="@/assets/icon_costumer_care.svg" alt="" class="bg-[#cd9ff5] w-[50px] h-[50px] rounded-full p-2 m-auto" />
        </div>
        <div class="col-span-4 pl-2 col-span-1/2 text-left">
          <p class="text-sm font-semibold">Clinic Cabang Jakarta</p>
          <p class="pt-1 text-sm">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget...</p>
        </div>
        <div class="text-right grid justify-items-center">
          <p class="text-xs">21/3/2022</p>
        </div>
      </div>
       <div class="bg-[#F1F1F1] grid grid-cols-6 p-2 shadow-md border">
        <div class="m-auto">
          <img src="@/assets/icon_costumer_care.svg" alt="" class="bg-[#cd9ff5] w-[50px] h-[50px] rounded-full p-2 m-auto" />
        </div>
        <div class="col-span-4 pl-2 col-span-1/2 text-left">
          <p class="text-sm font-semibold">Clinic Cabang Bali</p>
          <p class="pt-1 text-sm">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget...</p>
        </div>
        <div class="text-right grid justify-items-center">
          <p class="text-xs">21/3/2022</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
</script>

<script scoped>
</script>

<style lang="scss" scoped>
</style>