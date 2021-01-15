<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item active" aria-current="page">
          <i class="fa fa-address-book-o" aria-hidden="true"></i>
          Contact l'Entreprise
        </li>
      </ol>
    </nav>
    <Encore />
  </div>
</template>
<script>
import Encore from "../components/Layout/Encore";

export default {
  name: "Contacts",
  components: {
    Encore,
  },
};
</script>