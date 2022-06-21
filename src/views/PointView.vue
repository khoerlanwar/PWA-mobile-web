<template>
  <main class="fixed">
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
      <span class="text-sm">Treatment</span>
      <div class="text-sm text-[#0779FF]">See All</div>
    </div>
    <div class="relative block m-auto w-full pb-4 overflow-auto flex flex-nowrap scrollbar-hide">
      <div class="flex flex-row space-x-2">
        <div class="boder w-[170px] h-auto bg-white rounded shadow-md">
          <div class="max-h-[77px] mb-3">
            <img src="@/assets/treatment_voucher1.png" alt="" class="w-full rounded rounded-b-none">
          </div>
          <div class="flex flex-col justify-between min-h-[70px]">
            <p class="text-sm text-left font-semibold m-2">Face Contouring Treatment</p>
            <div class="text-sm font-semibold text-right mx-2 mb-1"> 
              <span class="text-[#0779FF]">500</span> Poin
            </div>
          </div>
        </div>
        <div class="boder w-[170px] h-auto bg-white rounded shadow-md">
          <div class="max-h-[77px] mb-3">
            <img src="@/assets/treatment_voucher2.png" alt="" class="w-full rounded rounded-b-none">
          </div>
          <div class="flex flex-col justify-between min-h-[70px]">
            <p class="text-sm text-left font-semibold m-2">Electro Ionto Therapy</p>
            <div class="text-sm font-semibold text-right mx-2 mb-1"> 
              <span class="text-[#0779FF]">500</span> Poin
            </div>
          </div>
        </div>
        <div class="boder w-[170px] h-auto bg-white rounded shadow-md">
          <div class="max-h-[77px] mb-3">
            <img src="@/assets/treatment_voucher1.png" alt="" class="w-full rounded rounded-b-none">
          </div>
          <div class="flex flex-col justify-between min-h-[70px]">
            <p class="text-sm text-left font-semibold m-2">Face Contouring Treatment</p>
            <div class="text-sm font-semibold text-right mx-2 mb-1"> 
              <span class="text-[#0779FF]">500</span> Poin
            </div>
          </div>
        </div>        
      </div>
    </div>
    <!-- End Treatment Section -->
    <!-- Product Section -->
    <div class="flex justify-between mx-2 py-1">
      <span class="text-sm">Product</span>
      <div class="text-sm text-[#0779FF]">See All</div>
    </div>
    <div class="relative block m-auto w-full pb-4 overflow-auto flex flex-nowrap scrollbar-hide">
      <div class="flex flex-row space-x-2">
        <div class="boder w-[170px] h-auto bg-white rounded shadow-md">
          <div class="max-h-[77px] mb-3">
            <img src="@/assets/product_voucher1.png" alt="" class="w-full rounded rounded-b-none">
          </div>
          <div class="flex flex-col justify-between min-h-[70px]">
            <p class="text-sm text-left font-semibold m-2">Starter Package</p>
            <div class="text-sm font-semibold text-right mx-2 mb-1"> 
              <span class="text-[#0779FF]">500</span> Poin
            </div>
          </div>
        </div>
        <div class="boder w-[170px] h-auto bg-white rounded shadow-md">
          <div class="max-h-[77px] mb-3">
            <img src="@/assets/product_voucher2.png" alt="" class="w-full rounded rounded-b-none">
          </div>
          <div class="flex flex-col justify-between min-h-[70px]">
            <p class="text-sm text-left font-semibold m-2">Face Contouring Treatment</p>
            <div class="text-sm font-semibold text-right mx-2 mb-1"> 
              <span class="text-[#0779FF]">500</span> Poin
            </div>
          </div>
        </div>
        <div class="boder w-[170px] h-auto bg-white rounded shadow-md">
          <div class="max-h-[77px] mb-3">
            <img src="@/assets/product_voucher1.png" alt="" class="w-full rounded rounded-b-none">
          </div>
          <div class="flex flex-col justify-between min-h-[70px]">
            <p class="text-sm text-left font-semibold m-2">Starter Package</p>
            <div class="text-sm font-semibold text-right mx-2 mb-1"> 
              <span class="text-[#0779FF]">500</span> Poin
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
