<template>
  <main class="h-screen w-screen max-w-[440px] overflow-auto">
     <!-- Member Card -->
    <div class="relative flex w-full bg-[#9d35f2] border drop-shadow-lg rounded-lg">
      <div class="bg-white flex w-full rounded-md mb-4 drop-shadow-lg">
      <div class="grid grid-cols-4 space-x-2 p-2 w-full">
        <div class="m-auto">
          <img src="@/assets/users_dummy_male.png" alt="" class="rounded-full shadow-lg"/>
        </div>
        <div class="text-left w-full col-span-2">
          <div class="text-md text-[#9d35f2] font-semibold">Khoirul Anwar</div>
          <div class="text-xs pt-1">Tangerang Selatan</div>
          <div class="text-tiny text-[#6b42b3] font-semibold">MEMBER</div>
          <div class="bg-white flex rounded shadow-md justify-center items-center bg-[#9d35f2] py-1 mt-2">
            <IconPoint class="w-auto h-[12px] mx-1 text-white"/>
            <div class="text-xs font-bold text-white">4,631 Poin</div>
          </div>
        </div>
        <div class="pl-3 flex flex-col justify-end">
          <img src="@/assets/dummy_barcode.svg" alt="" class="w-[50px]"/>
        </div>
      </div>
    </div>
    </div>
    <!-- End Member Card -->
    <!-- Sub Menu -->
    <div class="relative flex justify-between my-3">
      <div v-for="items in SubMenu" :key="items.title" class="bg-[#dfb8fc] rounded-md shadow-lg border border-[#9d35f2]">
        <router-link :to="items.direction" class="m-auto">
          <img :src="items.path" alt="" class="m-2 w-[32px]">
        </router-link>
      </div>
    </div>
    <!-- End Main Menu -->
    <!-- Timeline Appointment -->
    <div class="flex justify-between mx-2 py-2">
      <span class="text-sm">Aktifitas terakhir</span>
      <div class="text-sm text-[#0779FF]">Lihat Semua</div>
    </div>
    <div class="relative block m-auto w-full pb-4">
      <div class="flex flex-row space-x-1 overflow-auto w-full scrollbar-hide flex flex-nowrap drop-shadow-md">
        <div v-for="items in Timeline" :key="items" class="grid grid-cols-4 bg-white rounded-md min-w-[90%] border">
          <div class="m-auto ml-4">
            <img :src="items.doctorProfile" alt="" class="rounded-full border border-[#9d35f2] p-1" />
          </div>
          <div class="col-span-3 text-left py-2 ml-4">
            <div class="text-tiny font-semibold">{{items.doctorName}}</div>
            <div class="text-xs">{{items.doctorBranch}}</div>
            <div class="text-xs">{{items.doctorDate}}</div>
            <div class="text-xs">{{items.doctorTime}}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Timeline Appointment -->
    <!-- Promo -->
    <div class="flex justify-between mx-2 py-1">
      <span class="text-sm">Promo</span>
      <div class="text-sm text-[#0779FF]">Lihat Semua</div>
    </div>
    <div class="relative block m-auto w-full pb-4">
      <div class="flex flex-row space-x-1 overflow-auto w-full scrollbar-hide flex flex-nowrap drop-shadow-md">
        <div v-for="items in Promo" :key="items" class="bg-white rounded-md min-w-[45%] border">
          <img :src="items.path" :alt="items.title" />
        </div>
      </div>
    </div>
    <!-- End Promo -->
    <!-- Artikel -->
    <div class="flex justify-between mx-2 py-1">
      <span class="text-sm">Artikel</span>
      <div class="text-sm text-[#0779FF]">Lihat Semua</div>
    </div>
    <div class="relative block m-auto w-full pb-4">
      <div class="flex flex-row space-x-1 overflow-auto w-full scrollbar-hide flex flex-nowrap drop-shadow-md">
        <div v-for="items in Artikel" :key="items" class="bg-white rounded-md min-w-[45%] border">
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
      doctorName : 'dr. Clinic Surabaya',
      doctorBranch : 'Clinic Cabang Surabaya',
      doctorDate : 'Tuesday, 09 June 2020',
      doctorTime : '13.40 - 13.50 WIB',
      doctorProfile : require('@/assets/doctor_dummy_female.png')
    },
    1 : {
      id : 2,
      doctorName : 'dr. Clinic Jakarta',
      doctorBranch : 'Clinic Cabang Jakarta',
      doctorDate : 'Tuesday, 09 May 2020',
      doctorTime : '13.40 - 13.50 WIB',
      doctorProfile : require('@/assets/doctor_dummy_male.png')
    },
    3 : {
      id : 2,
      doctorName : 'dr. Clinic Bali',
      doctorBranch : 'Clinic Cabang Bali',
      doctorDate : 'Tuesday, 09 March 2020',
      doctorTime : '13.40 - 13.50 WIB',
      doctorProfile : require('@/assets/doctor_dummy_female.png')
    }
  }

  const Promo = {
    0 : {
      id : 1,
      title : 'Promo 1',
      path : 'https://dummyimage.com/170x170/ffffff/000000.png&text=Promo+170x170'
    },
    1 : {
      id : 2,
      title : 'Promo 2',
      path : 'https://dummyimage.com/170x170/ffffff/000000.png&text=Promo+170x170'
    },
    2 : {
      id : 3,
      title : 'Promo 3',
      path : 'https://dummyimage.com/170x170/ffffff/000000.png&text=Promo+170x170'
    },
  }

  const Artikel = {
    0 : {
      title : 'Artikel 1',
      path : 'https://dummyimage.com/170x170/ffffff/000000.png&text=Artikel+170x170'
    },
    1 : {
      title : 'Artikel 2',
      path : 'https://dummyimage.com/170x170/ffffff/000000.png&text=Artikel+170x170'
    },
    2 : {
      title : 'Artikel 3',
      path : 'https://dummyimage.com/170x170/ffffff/000000.png&text=Artikel+170x170'
    },
  }
</script>

