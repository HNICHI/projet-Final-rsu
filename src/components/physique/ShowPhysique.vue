<template>
  <div class="show-personne-physique">
    <!-- breadcrumb -->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/Sociétaire_Physique">
            <i class="fa fa-user" aria-hidden="true"></i>
            Personne Physique</router-link
          >
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          Fiche Signalétique
        </li>
      </ol>
    </nav>

    <!-- button -->
    <div class="table-show">
      <div class="header-butn">
        <router-link to="" class="btn btn-primary" role="button"
          >Portefeuille Sociétaire</router-link
        >
        <router-link to="" class="btn btn-dark" role="button">
          <!-- <i class="fa fa-calculator" aria-hidden="true"></i> -->
          Comptabilité Sociétaire</router-link
        >
        <router-link to="" class="btn btn-warning" role="button">
          <!-- <i class="fa fa-check" aria-hidden="true"></i> -->
          Effectuer Devis Auto</router-link
        >
        <router-link to="" class="btn btn-danger" role="button">
          <!-- <i class="fa fa-check" aria-hidden="true"></i> -->
          Effectuer Devis RD</router-link
        >
        <div class="dropdown open">
          <button
            class="btn btn-success dropdown-toggle"
            type="button"
            id="triggerId"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Modifier fiche signalitique
          </button>
          <div class="dropdown-menu" aria-labelledby="triggerId">
            <button class="dropdown-item" href="#">Action</button>
            <button class="dropdown-item" href="#">action</button>
            <button class="dropdown-item" href="#">action</button>
            <button class="dropdown-item" href="#">action</button>
          </div>
        </div>
      </div>

      <!-- Table -->
      <div class="container">
        <div class="row">
          <div class="panel col-md-6">
            <table class="table table-light">
              <thead>
                <tr>
                  <th class="title" scope="col" colspan="6">
                    <i class="fa fa-user" aria-hidden="true"></i>
                    Informations Sociétaire
                  </th>
                </tr>
              </thead>
              <tbody class="tbody-color">
                <tr>
                  <th colspan="3">Nom : JAMAL</th>
                  <th colspan="3">Prénom :SOUHAIL</th>
                </tr>
                <tr>
                  <th colspan="3">Qualité : Monsieur</th>
                  <th colspan="3">Sexe : HOMME</th>
                </tr>
                <tr>
                  <th colspan="3">CIN : REFER223</th>
                  <th colspan="3">Profession :Doctor</th>
                </tr>
                <tr>
                  <th colspan="3">Date de naissance : 17/05/87</th>
                  <th colspan="3">Pays de naissance : MAROC</th>
                </tr>
                <tr>
                  <th colspan="6">VIP : OUI</th>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="panel col-md-6">
            <table class="table table-light">
              <thead>
                <tr>
                  <th class="title" scope="col" colspan="4">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    Correspondances
                  </th>
                </tr>
              </thead>
              <tbody class="tbody-color">
                <tr>
                  <th colspan="4">Adresse comp. : Qu Takkadom Rue Ibrahim N°50 Rabat</th>
                </tr>
                <tr>
                  <th colspan="2">Numéro : 50</th>
                  <th colspan="2">Voie : Ibrahim</th>
                </tr>
                <tr>
                  <th colspan="2">Ville : RABAT</th>
                  <th colspan="2">Code_postal : 43600</th>
                </tr>
                <tr>
                  <th colspan="2">Pays : MAROC</th>
                  <th colspan="2">E-Mail : Jamal@gmail.com</th>
                </tr>
                <tr>
                  <th colspan="2">Tél.portable : 06112222</th>
                  <th colspan="2">Tél.fixe : 0524647864</th>
                </tr>
              </tbody>
            </table>
          </div>
          <table class="table table-light">
            <thead>
              <tr>
                <th class="title" scope="col" colspan="4">
                  <i class="fa fa-bar-chart" aria-hidden="true"></i>
                  Informations Activité
                </th>
              </tr>
            </thead>
            <tbody class="tbody-color">
              <tr>
                <th colspan="2">Catégorie VIP : VIP</th>
                <th colspan="2">Profession : Doctor</th>
              </tr>
              <tr>
                <th colspan="4">Organisme d’appartenance : something</th>
              </tr>
              <tr>
                <th colspan="2">Référence d’appartenance : 23A7586</th>
                <th colspan="2">Tribunal d'immatriculation : Something </th>
              </tr>
              <tr>
                <th colspan="4">Numéro registre du commerce : NR/234</th>
              </tr>
            </tbody>
          </table>
          <table class="table table-light">
            <thead>
              <tr>
                <th class="title" scope="col" colspan="4">
                  <i class="fa fa-id-card-o" aria-hidden="true"></i>
                  Piéce d'identité
                </th>
              </tr>
            </thead>
            <tbody class="tbody-color">
              <tr>
                <th colspan="4">Type de document : Passport</th>
              </tr>
              <tr>
                <th colspan="2">Num. référence : 234T-8</th>
                <th colspan="2">Date de délivrance : 02/08/20</th>
              </tr>
              <tr>
                <th colspan="2">Lieu de délivrance : CASABLANCA</th>
                <th colspan="2">Date d’expiration : 19/11/30</th>
              </tr>
            </tbody>
          </table>
        </div>
        <table class="table table-light">
          <thead>
            <tr>
              <th class="title" scope="col" colspan="4">
                <i class="fa fa-university" aria-hidden="true"></i>
                Banques
              </th>
            </tr>
          </thead>
          <tbody class="tbody-color">
            <tr>
              <th colspan="2">Nom de la banque : CIH</th>
              <th colspan="2">Code Banques : 2034</th>
            </tr>
            <tr>
              <th colspan="2">Code Banques : 2034</th>
              <th colspan="2">Code ville : 345678</th>
            </tr>
            <tr>
              <th colspan="2">Numéro de compte : 234556</th>
              <th colspan="2">Clé de RIB : 1555</th>
            </tr>
            <tr>
              <th colspan="2">RIB : 12344556004392</th>
              <th colspan="2">Code Swift : 0208</th>
            </tr>
          </tbody>
        </table>
        <table class="table table-light">
          <thead>
            <tr>
              <th class="title" scope="col" colspan="4">
                <i class="fa fa-bar-chart" aria-hidden="true"></i>
                Activité Professionnelle
              </th>
            </tr>
          </thead>
          <tbody class="tbody-color">
            <tr>
              <th>Secteur d'activité : Secteur 1 </th>
              <th>Filière :  Filiere 1</th>
              <th>Activité : Activite1 </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ShowTablePhysique",
  data() {
    return {};
  },
  methods: {
    // spread operator
    ...mapActions(["getOnePersonnePhysique"])
  },
  computed: {

    // mimi() {
    //   return this.$store.state.personnePhysique.find(
    //     vid => vid.id == this.$route.params.id
    //   );
    // }
    
    ...mapGetters(["findOnePersonnePhysique"])
  },

  // Load Page:
  created() {
    this.getOnePersonnePhysique();
  }
};
</script>

<style scoped>

</style>
