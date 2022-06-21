<template>
  <main>
    <!-- Member Card -->
    <icon-base icon-name="write"><icon-write /></icon-base>
    <div class="overflow-auto flex pb-4 flex-nowrap scrollbar-hide">
      <div class="relative bg-[#FAAF40] w-[414px] h-[147px] rounded-md drop-shadow-xl">
        <div class="flex bg-white w-full h-[137px] rounded-md drop-shadow-xl">
          <img src="@/assets/dummy_users.png" alt="" class="rounded-full m-5 shadow-lg w-auto h-[98px]">
          <div class="self-center text-left w-full p-2 mr-2">
            <p class="text-lg text-orange-400 font-bold">Deva Andresa</p>
            <div class="text-sm">Petogogan</div>
            <div class="text-tiny text-[#4CDB45] font-bold pb-3">MEMBER</div>
            <div class="flex space-x-1">
              <button class="border group bg-blue-500 w-[120px] h-[30px] px-3 ounded shadow-md hover:bg-white rounded">
                <router-link to="/point">
                  <div class="items-center flex">
                    <IconPoint class="w-[14px] h-[16px] mx-1 text-white group-hover:text-orange-400"/>
                    <div class="text-white text-sm font-semibold mx-1 group-hover:text-orange-400">4,631 Poin</div>
                  </div>
                </router-link>
              </button>
              <div class="absolute bottom-4 right-5">
                <img src="@/assets/dummy_barcode.svg" alt="" class="object-right-bottom"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Member Card -->
    <!-- Sub Menu -->
    <div class="flex justify-between space-x-1 py-2">
      <div v-for="items in SubMenu" :key="items.title">
        <router-link :to="items.direction">
        <div class="flex flex-col items-center">
          <button class="rounded bg-orange-400 w-[55px] h-[55px]">
            <img :src="items.path" alt="" class="w-[45px] h-[45px] m-auto pt-2">
          </button>
          <span class="text-xs pt-2 items-center">{{items.title}}</span>
        </div>
        </router-link>
      </div>
    </div>
    <!-- End Main Menu -->
    <!-- Timeline Appointment -->
    <div class="flex justify-between mx-2 py-2">
      <span class="text-sm">Aktifitas terakhir</span>
      <div class="text-sm text-[#0779FF]">See All</div>
    </div>
    <div class="relative block m-auto w-full pb-4 overflow-auto flex flex-nowrap scrollbar-hide">
      <div class="flex flex-row space-x-1">
        <div v-for="items in Timeline" :key="items.id" class="border bg-white w-[345px] h-[90px] rounded shadow-md">
          <div class="flex ">
            <img :src="items.doctorProfile" alt="" class="rounded-full border-2 m-4 w-[60px]" />
            <div class="self-center text-left">
              <div class="text-tiny font-bold">{{items.doctorName}}</div>
              <div class="text-xs">{{items.doctorBranch}}</div>
              <div class="text-xs">{{items.doctorDate}}</div>
              <div class="text-xs">{{items.doctorTime}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Timeline Appointment -->
    <!-- Promo -->
    <div class="flex justify-between mx-2 py-1">
      <span class="text-sm">Promo</span>
      <div class="text-sm text-[#0779FF]">See All</div>
    </div>
    <div class="relative block m-auto w-full pb-4 overflow-auto flex flex-nowrap scrollbar-hide">
      <div class="flex flex-row space-x-1">
        <div v-for="items in Promo" :key="items.id" class="border bg-white w-[150px] h-[150px] rounded shadow-md">
          <img :src="items.path" :alt="items.title" />
        </div>
      </div>
    </div>
    <!-- End Promo -->
    <!-- Artikel -->
    <div class="flex justify-between mx-2 py-1">
      <span class="text-sm">Artikel</span>
      <div class="text-sm text-[#0779FF]">See All</div>
    </div>
    <div class="relative block m-auto w-full pb-4 overflow-auto flex flex-nowrap scrollbar-hide">
      <div class="flex flex-row space-x-1">
        <div v-for="items in Artikel" :key="items.id" class="border bg-white w-[150px] h-[150px] rounded shadow-md">
          <img :src="items.path" :alt="items.title" />
        </div>
      </div>
    </div>
    <!-- End Artikel -->
  </main>
</template>

<script>
import IconPoint from '@/components/Icons/IconPoint.vue'

export default {
  components: {
    IconPoint
  }
}
</script>
<script setup>
  const SubMenu = {
    'konsultasi' : {
      title : 'Konsultasi',
      path : require('@/assets/icon_consultation.svg'),
      direction : '/konsultasi'
    },
    'janji_temu' : {
      title : 'Janji Temu',
      path : require('@/assets/icon_appointment.svg'),
      direction : '/appointment'
    },
    'resep' : {
      title : 'Resep',
      path : require('@/assets/icon_prescription.svg'),
      direction : '/resep'
    },
    'toko_resmi' : {
      title : 'Toko Resmi',
      path : require('@/assets/icon_marketplace.svg'),
      direction : '/marketplace'
    },
    'voucher' : {
      title : 'Voucher',
      path : require('@/assets/icon_voucher.svg'),
      direction : '/voucher'
    },
  }

  const Timeline = {
    0 : {
      id : 1,
      doctorName : 'dr. Ni Komang Sri Padmiswari B',
      doctorBranch : 'NMW Clinic Denpasar',
      doctorDate : 'Tuesday, 09 June 2020',
      doctorTime : '13.40 - 13.50 WIB',
      doctorProfile : require('@/assets/doctor_profile.png')
    },
    1 : {
      id : 2,
      doctorName : 'dr. Marchella',
      doctorBranch : 'NMW Clinic Cinere',
      doctorDate : 'Tuesday, 09 May 2020',
      doctorTime : '13.40 - 13.50 WIB',
      doctorProfile : require('@/assets/doctor_profile.png')
    },
    3 : {
      id : 2,
      doctorName : 'dr. Natalia Mawardi',
      doctorBranch : 'NMW Clinic Denpasar',
      doctorDate : 'Tuesday, 09 March 2020',
      doctorTime : '13.40 - 13.50 WIB',
      doctorProfile : require('@/assets/doctor_profile.png')
    }
  }

  const Promo = {
    0 : {
      id : 1,
      title : 'Promo 1',
      path : require('@/assets/promo_dummy_2.svg')
    },
    1 : {
      id : 2,
      title : 'Promo 2',
      path : require('@/assets/promo_dummy_2.svg')
    },
    2 : {
      id : 3,
      title : 'Promo 3',
      path : require('@/assets/promo_dummy_2.svg')
    },
  }

  const Artikel = {
    0 : {
      title : 'Artikel 1',
      path : require('@/assets/promo_dummy_2.svg')
    },
    1 : {
      title : 'Artikel 2',
      path : require('@/assets/promo_dummy_2.svg')
    },
    2 : {
      title : 'Artikel 3',
      path : require('@/assets/promo_dummy_2.svg')
    },
  }
</script>

