<template>
  <!-- 
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  -->
  <Navbar />
  <router-view/>
  <!--Container Main end-->

      
     
  
  
</template>

<style>
@import'~bootstrap/dist/css/bootstrap.css';
</style>
<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from "@/components/Navbar";
export default {
  components: {
    Navbar
  },
  mounted() {
    AOS.init()
  },
}
</script>