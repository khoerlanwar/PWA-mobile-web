import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/point',
    name: 'Point',
    component: () => import('../views/PointView.vue')
  },
  {
    path: '/messages',
    name: 'Messages',
    component: () => import('../views/MessagesView.vue')
  },
  {
    path: '/setting',
    name: 'Setting',
    component: () => import('../views/SettingView.vue')
  },
  {
    path: '/marketplace',
    name: 'Marketplace',
    component: () => import('../views/Pages/MarketplacePage.vue')
  },
  {
    path: '/appointment',
    name: 'Appointment',
    component: () => import('../views/Pages/AppointmentPage.vue')
  },
  {
    path: '/prescription',
    name: 'Prescription',
    component: () => import('../views/Pages/PrescriptionPage.vue')
  },
  {
    path: '/voucher',
    name: 'Voucher',
    component: () => import('../views/Pages/VoucherPage.vue')
  },
  {
    path: '/consultation',
    name: 'Consultation',
    component: () => import('../views/Pages/ConsultationPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
