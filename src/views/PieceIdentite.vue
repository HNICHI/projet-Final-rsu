<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item active" aria-current="page">
          <i class="fa fa-address-card" aria-hidden="true"></i>
          Piece d'Identité
        </li>
      </ol>
    </nav>
    <Encore />
  </div>
</template>
<script>
import Encore from "../components/Layout/Encore";

export default {
  name: "PieceIdentite",
  components: {
    Encore,
  },
};
</script>