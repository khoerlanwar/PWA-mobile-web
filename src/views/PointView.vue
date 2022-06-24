<template>
  <main class="h-screen w-screen max-w-[440px] overflow-auto">
    <div class="relative flex justify-between items-center space-x-3 mb-3 text-white">
      <button class="bg-[#9d35f2] flex rounded shadow-md w-full py-2 justify-center items-center">
        <IconPoint class="w-[14px] mx-2"/>
        <div class="text-sm font-bold">4,631 Poin</div>
      </button>
      <button to="/voucher" class="bg-[#9d35f2] flex rounded shadow-md w-full">
          <div class="text-sm font-bold m-auto my-2">Voucher Saya</div>
      </button>
    </div>
    <!-- Treatment Section -->
    <div class="flex justify-between mx-2 py-1">
      <span class="text-sm">Tindakan</span>
      <div class="text-sm text-[#0779FF]">Lihat Semua</div>
    </div>
    <div class="relative block m-auto w-full pb-4">
      <div class="flex flex-row space-x-1 overflow-auto w-full scrollbar-hide flex flex-nowrap drop-shadow-md">
        <div class="grid grid-rows bg-white rounded-md min-w-[45%]">
          <div class="mb-2">
            <img src="https://dummyimage.com/160x160/ebebeb/34385e.png&text=Tindakan+160x160" alt="" class="rounded-t-md"/>
          </div>
          <div class="static p-2">
            <div class="text-sm text-left">Lorem ipsum dolor sit amet, consectetuer adipiscin</div>
            <div class="text-sm font-semibold text-right">
              <span class="text-[#0779FF]">999</span> Poin
            </div>
          </div>
        </div>
        <div class="grid grid-rows bg-white rounded-md min-w-[45%]">
          <div class="mb-2">
            <img src="https://dummyimage.com/160x160/ebebeb/34385e.png&text=Tindakan+160x160" alt="" class="rounded-t-md"/>
          </div>
          <div class="static p-2">
            <div class="text-sm text-left">Lorem ipsum dolor sit amet, consectetuer adipiscin</div>
            <div class="text-sm font-semibold text-right">
              <span class="text-[#0779FF]">999</span> Poin
            </div>
          </div>
        </div>
        <div class="grid grid-rows bg-white rounded-md min-w-[45%]">
          <div class="mb-2">
            <img src="https://dummyimage.com/160x160/ebebeb/34385e.png&text=Tindakan+160x160" alt="" class="rounded-t-md"/>
          </div>
          <div class="static p-2">
            <div class="text-sm text-left">Lorem ipsum dolor sit amet, consectetuer adipiscin</div>
            <div class="text-sm font-semibold text-right">
              <span class="text-[#0779FF]">999</span> Poin
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Treatment Section -->
    <!-- Product Section -->
    <div class="flex justify-between mx-2 py-1">
      <span class="text-sm">Produk</span>
      <div class="text-sm text-[#0779FF]">Lihat Semua</div>
    </div>
    <div class="relative block m-auto w-full pb-4">
      <div class="flex flex-row space-x-1 overflow-auto w-full scrollbar-hide flex flex-nowrap drop-shadow-md">
        <div class="grid grid-rows bg-white rounded-md min-w-[45%]">
          <div class="mb-2">
            <img src="https://dummyimage.com/160x160/ebebeb/34385e.png&text=Produk+160x160" alt="" class="rounded-t-md"/>
          </div>
          <div class="static p-2">
            <div class="text-sm text-left">Lorem ipsum dolor sit amet, consectetuer adipiscin</div>
            <div class="text-sm font-semibold text-right">
              <span class="text-[#0779FF]">999</span> Poin
            </div>
          </div>
        </div>
        <div class="grid grid-rows bg-white rounded-md min-w-[45%]">
          <div class="mb-2">
            <img src="https://dummyimage.com/160x160/ebebeb/34385e.png&text=Produk+160x160" alt="" class="rounded-t-md"/>
          </div>
          <div class="static p-2">
            <div class="text-sm text-left">Lorem ipsum dolor sit amet, consectetuer adipiscin</div>
            <div class="text-sm font-semibold text-right">
              <span class="text-[#0779FF]">999</span> Poin
            </div>
          </div>
        </div>
        <div class="grid grid-rows bg-white rounded-md min-w-[45%]">
          <div class="mb-2">
            <img src="https://dummyimage.com/160x160/ebebeb/34385e.png&text=Produk+160x160" alt="" class="rounded-t-md"/>
          </div>
          <div class="static p-2">
            <div class="text-sm text-left">Lorem ipsum dolor sit amet, consectetuer adipiscin</div>
            <div class="text-sm font-semibold text-right">
              <span class="text-[#0779FF]">999</span> Poin
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Product Section -->
  </main>
</template>
<script>
import IconPoint from '@/components/Icons/IconPoint.vue'
export default {
  name: 'PointView',
  components: {
    IconPoint
  }
}
</script>
