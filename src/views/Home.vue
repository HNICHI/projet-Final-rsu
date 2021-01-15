<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item active" aria-current="page">
          <i class="fa fa-home" aria-hidden="true"></i>
          HOME
        </li>
      </ol>
    </nav>

    <Encore />
  </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
import Encore from "../components/Layout/Encore";

export default {
  name: "Home",
  components: {
    Encore,
  },
  methods: {
    // spread operator
    ...mapActions(["getVille", "getPays"]),
  },
  computed: {
    ...mapGetters(["Allville", "Allpays"]),
  },
  created() {
    this.getVille();
    this.getPays();
  },
};
</script>