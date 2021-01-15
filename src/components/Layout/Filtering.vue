<template>
  <div>
    <select class="custom-select" @change="filterVilles($event)">
      <option value="10" selected>10</option>
      <option value="25">25</option>
      <option value="50">50</option>
      <option value="100">100</option>
      <option value="150">150</option>
      <option value="200">200</option>
    </select>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "Filtering",

  methods:{
    ...mapActions(["filterVilles"]),
  }
};
</script>