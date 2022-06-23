<template>
  <main>
    <div class="flex pb-4 flex-nowrap scrollbar-hide">
      <div class="flex justify-between space-x-4 items-center">
        <button>
          <div class="border bg-white w-[175px] h-[40px] p-1 flex rounded shadow-md items-center space-x-3 px-8">
            <IconPoint class="w-[25px] h-[25px] text-[#0779FF]"/>
            <div class="text-sm font-bold text-[#0779FF]">4,631 Poin</div>
          </div>
        </button>
        <button>
          <div class="border bg-white w-[175px] h-[40px] p-1 flex rounded shadow-md">
            <div class="text-sm font-bold m-auto">Voucher Saya<IcoIco /></div>
          </div>
        </button>
      </div>
    </div>
    <!-- Treatment Section -->
    <div class="flex justify-between mx-2 py-1">
      <span class="text-sm">Tindakan</span>
      <div class="text-sm text-[#0779FF]">Lihat Semua</div>
    </div>
    <div class="relative block m-auto w-full pb-4 overflow-auto flex flex-nowrap scrollbar-hide">
      <div class="flex flex-row space-x-2">
        <div class="boder w-[170px] h-auto bg-white rounded shadow-md">
          <div class="max-h-[77px] mb-3">
            <img src="https://dummyimage.com/170x100/ebebeb/34385e.png&text=Tindakan+170x90" alt="" class="w-full rounded rounded-b-none">
          </div>
          <div class="flex flex-col justify-between min-h-[70px]">
            <p class="text-sm text-left font-semibold m-2 py-2">Lorem ipsum dolor sit amet, consectetuer adipiscin</p>
            <div class="text-sm font-semibold text-right mx-2 mb-1"> 
              <span class="text-[#0779FF]">999</span> Poin
            </div>
          </div>
        </div>
        <div class="boder w-[170px] h-auto bg-white rounded shadow-md">
          <div class="max-h-[77px] mb-3">
            <img src="https://dummyimage.com/170x100/ebebeb/34385e.png&text=Tindakan+170x90" alt="" class="w-full rounded rounded-b-none">
          </div>
          <div class="flex flex-col justify-between min-h-[70px]">
            <p class="text-sm text-left font-semibold m-2 py-2">Lorem ipsum dolor sit amet, consectetuer adipiscin</p>
            <div class="text-sm font-semibold text-right mx-2 mb-1"> 
              <span class="text-[#0779FF]">999</span> Poin
            </div>
          </div>
        </div>
        <div class="boder w-[170px] h-auto bg-white rounded shadow-md">
          <div class="max-h-[77px] mb-3">
            <img src="https://dummyimage.com/170x100/ebebeb/34385e.png&text=Tindakan+170x90" alt="" class="w-full rounded rounded-b-none">
          </div>
          <div class="flex flex-col justify-between min-h-[70px]">
            <p class="text-sm text-left font-semibold m-2 py-2">Lorem ipsum dolor sit amet, consectetuer adipiscin</p>
            <div class="text-sm font-semibold text-right mx-2 mb-1"> 
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
    <div class="relative block m-auto w-full pb-4 overflow-auto flex flex-nowrap scrollbar-hide">
      <div class="flex flex-row space-x-2">
        <div class="boder w-[170px] h-auto bg-white rounded shadow-md">
          <div class="max-h-[77px] mb-3">
            <img src="https://dummyimage.com/170x100/ebebeb/34385e.png&text=Produk+170x90" alt="" class="w-full rounded rounded-b-none">
          </div>
          <div class="flex flex-col justify-between min-h-[70px]">
            <p class="text-sm text-left font-semibold m-2 py-2">Lorem ipsum dolor sit amet, consectetuer adipiscin</p>
            <div class="text-sm font-semibold text-right mx-2 mb-1"> 
              <span class="text-[#0779FF]">999</span> Poin
            </div>
          </div>
        </div>
        <div class="boder w-[170px] h-auto bg-white rounded shadow-md">
          <div class="max-h-[77px] mb-3">
            <img src="https://dummyimage.com/170x100/ebebeb/34385e.png&text=Produk+170x90" alt="" class="w-full rounded rounded-b-none">
          </div>
          <div class="flex flex-col justify-between min-h-[70px]">
            <p class="text-sm text-left font-semibold m-2 py-2">Lorem ipsum dolor sit amet, consectetuer adipiscin</p>
            <div class="text-sm font-semibold text-right mx-2 mb-1"> 
              <span class="text-[#0779FF]">999</span> Poin
            </div>
          </div>
        </div>
        <div class="boder w-[170px] h-auto bg-white rounded shadow-md">
          <div class="max-h-[77px] mb-3">
            <img src="https://dummyimage.com/170x100/ebebeb/34385e.png&text=Produk+170x90" alt="" class="w-full rounded rounded-b-none">
          </div>
          <div class="flex flex-col justify-between min-h-[70px]">
            <p class="text-sm text-left font-semibold m-2 py-2">Lorem ipsum dolor sit amet, consectetuer adipiscin</p>
            <div class="text-sm font-semibold text-right mx-2 mb-1"> 
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
