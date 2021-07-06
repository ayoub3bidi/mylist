<template>
  <Navbar />
  <div class="container">
    <div class="row">
      <router-view />
    </div>
  </div>
  <footer class="py-5">
    <div class="container">
      <div class=" text-center text-muted">Copyright © 2021 | Ayoub Abidi
      </div>
    </div>
 </footer>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  components: { Navbar }
}

</script>


<style>
body {
 background-image: url("https://i.ibb.co/513DFTC/moroccan-flower.png");
}
</style>