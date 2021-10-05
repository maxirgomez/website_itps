import { createRouter, createWebHistory } from 'vue-router'
import AboutUs from '@/modules/pages/AboutUs';
import Branding from '@/modules/pages/Branding';
import ContentMarketing from '@/modules/pages/ContentMarketing';
import CustomerExperience from '@/modules/pages/CustomerExperience';
import DemandGeneration from '@/modules/pages/DemandGeneration';
import DisenoDesarrollo from '@/modules/pages/DisenoDesarrollo';
import Home from '@/modules/pages/Home';
import InfluenceMarketing from '@/modules/pages/InfluenceMarketing';
import PaidMedia from '@/modules/pages/PaidMedia';
import SocialMedia from '@/modules/pages/SocialMedia';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/quienes-somos',
    name: 'AboutUs',
    component: () => import(/* webpackChunkName: "about" */ '@/modules/pages/AboutUs.vue')
  },
  {
    path: '/branding',
    name: 'Branding',
    component: () => import(/* webpackChunkName: "branding" */ '@/modules/pages/Branding.vue')
  },
  {
    path: '/content-marketing',
    name: 'ContentMarketing',
    component: () => import(/* webpackChunkName: "content-marketing" */ '@/modules/pages/ContentMarketing.vue')
  },
  {
    path: '/customer-experience',
    name: 'CustomerExperience',
    component: () => import(/* webpackChunkName: "customer-experience" */ '@/modules/pages/CustomerExperience.vue')
  },
  {
    path: '/demand-generation',
    name: 'DemandGeneration',
    component: () => import(/* webpackChunkName: "demand-generation" */ '@/modules/pages/DemandGeneration.vue')
  },
  {
    path: '/diseno-desarrollo',
    name: 'DisenoDesarrollo',
    component: () => import(/* webpackChunkName: "web-design-and-development" */ '@/modules/pages/DisenoDesarrollo.vue')
  },
  {
    path: '/influence-marketing',
    name: 'InfluenceMarketing',
    component: () => import(/* webpackChunkName: "influence-marketing" */ '@/modules/pages/InfluenceMarketing.vue')
  },
  {
    path: '/paid-media',
    name: 'PaidMedia',
    component: () => import(/* webpackChunkName: "paid-media" */ '@/modules/pages/PaidMedia.vue')
  },
  {
    path: '/social-media',
    name: 'SocialMedia',
    component: () => import(/* webpackChunkName: "social-media" */ '@/modules/pages/SocialMedia.vue')
  },
  {
    path: '/sign',
    name: 'Sign',
    component: () => import(/* webpackChunkName: "sign" */ '@/modules/pages/Sign.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
