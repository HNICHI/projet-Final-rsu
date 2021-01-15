Safi wakha mazian
Sawri lia a bb code hhh
Ma3raftch lash kaygolik formdata is not a constructor
Code ta3 vue

Ou warini hta js
Js howa li fih lmochkil



🤔🤔🤔
Wtf malo makay3refch form data hhh
Hhhhhh
Bach katserver a bb?
Npm run serve
Wakha bb
<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/Table_Nomenclatures">
            <img src="https://img.icons8.com/nolan/64/activity-feed.png" />
            Tables Nomenclatures
          </router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          Activités Professionnelle
        </li>
      </ol>
    </nav>

    <div class="table-crud">
      <!-- table select -->
      <div class="row search-select">
        <div class="input-group data-table col-2">
          <select class="custom-select">
            <option value="1" selected>10</option>
            <option value="2">25</option>
            <option value="3">50</option>
            <option value="3">100</option>
          </select>
        </div>
        <!-- Search form -->
        <form class="search form-inline col-md-3">
          <input
            class="form-control w-75"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
          <i class="fa fa-search" aria-hidden="true"></i>
        </form>
      </div>
      <!-- button ajouter -->
      <div class="form-row form-ajouter">
        <div class="form-group col-md-3">
          <label for="">Activités</label>
          <input
            type="text"
            v-model="activite"
            class="form-control"
            placeholder="Activités"
          />
        </div>
        <div class="form-group col-md-3">
          <label for="">Filières</label>
          <input
            type="text"
            v-model="filiere"
            class="form-control"
            placeholder="Filières"
          />
        </div>
        <div class="form-group col-md-3">
          <label for="">Secteurs</label>
          <input
            type="text"
            v-model="secteur"
            class="form-control"
            placeholder="Secteur"
          />
        </div>
        <div class="button-recherche col-md-3">
          <button type="submit" class="btn btn-light" @click="submit">
            Ajouter
            <i class="fa fa-plus" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <!-- Table crud -->
      <div class="table-crud-body row">
        <table class="table table-hover col-md-6 m-auto">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Activités</th>
              <th scope="col">Filières</th>
              <th scope="col">Secteurs</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody class="crud-body">
            <tr :key="activite.id_activite" v-for="activite in allActivites">
              <th scope="row" class="id-client">
                {{ activite.id_activite }}
              </th>
              <td>{{ activite.activite }}</td>
              <td>{{ activite.filiere }}</td>
              <td>{{ activite.secteur }}</td>
              <td class="actions-btn">
                <!-- <router-link
                  :to="{
                    name: 'ville',
                    params: { id: ville.id_ville }
                  }"
                  class="show-btn"
                >
                  <i class="fa fa-eye" aria-hidden="true"></i>
                </router-link> -->
                <router-link to="#" class="edit-btn">
                  <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                </router-link>
                <router-link to="#" class="delete-btn">
                  <i class="fa fa-trash-o" aria-hidden="true"></i>
                </router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Pagination></Pagination>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Pagination from "../Layout/Pagination";
export default {
  name: "Activites_Professionnelle",
  components: {
    Pagination,
  },
  data() {
    return {
      // SAF:{
      activite: "",
      filiere: "",
      secteur: "",
      // },
    };
  },
  methods: {
    submit(e) {
      e.preventDefault;
      let postData = {activite: this.activite, filiere: this.filiere, secteur: this.secteur};
      let data = new FormData();
      data.append("activite", postData.activite);
      data.append("filiere", postData.filiere);
      data.append("secteur", postData.secteur);
      console.log(data);
      this.$store.dispatch("addActivitesFilieresSecteurs", data );
      this.activite = "";
      this.filiere = "";
      this.secteur = "";

      // let data = new FormData();
      // data.append("activity", this.activity.id_activite);
      // data.append("filiere", this.filiere.id_filiere);
      // data.append("secteur", this.secteur.id_secteur);
      // console.log(this.activity, this.filiere, this.secteur);
      // this.errors = {};
      // console.log("sending");
      // this.$store.dispatch("addActivity", data);
    },
    // spread operator
    ...mapActions(["getActivites"]),
  },
  computed: {
    ...mapGetters(["allActivites"]),
  },

  //   Load Page:
  created() {
    this.getActivites();
  },
};
</script>
<style scoped>
</style>