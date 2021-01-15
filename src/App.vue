<template>
  <div id="app">
    <Navbar></Navbar>
    <div class="">
      <div class="row d-flex flex-nowrap">
        <div class="col-md-3">
          <Sidebar></Sidebar>
        </div>
        <div class="comp-view col-md-9">
          <router-view />
          <Footer></Footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Layout/Sidebar.vue";
import Navbar from "@/components/Layout/Navbar.vue";
import Footer from "@/components/Layout/Footer.vue";

// components:
// import Pagination from "../src/components/Layout/Pagination";
// import Filtering from "../src/components/Layout/Filtering";

export default {
  name: "App",
  components: {
    Sidebar,
    Navbar,
    Footer,
    // Pagination,
    // Filtering,
  },
};
</script>

<style lang="scss">
</style>
