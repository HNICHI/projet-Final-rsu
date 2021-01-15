<template>
  <div class="wizard">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/Sociétaire_Physique">
            <i class="fa fa-user" aria-hidden="true"></i>
            Personne Physique
          </router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Ajouter</li>
      </ol>
    </nav>

    <form-wizard color="#6d7fcc" error-color="#d64253" @submit="onSubmit">
      <tab-content
        title="Informations Sociétaire"
        icon="fa fa-user"
        :before-change="validateFirstTab"
      >
        <vue-form-generator
          :model="model"
          :schema="firstTabSchema"
          :options="formOptions"
          ref="firstTabForm"
        ></vue-form-generator>
      </tab-content>

      <tab-content
        title="Informations Activité"
        icon="fa fa-bar-chart"
        :before-change="validateSecondTab"
      >
        <vue-form-generator
          :model="model"
          :schema="secondTabSchema"
          :options="formOptions"
          ref="secondTabForm"
        ></vue-form-generator>
      </tab-content>
      <tab-content
        title="Correspondance"
        icon="fa fa-map-marker"
        :before-change="validateThirdTab"
      >
        <vue-form-generator
          :model="model"
          :schema="thirdTabSchema"
          :options="formOptions"
          ref="thirdTabForm"
        ></vue-form-generator>
      </tab-content>
      <tab-content
        title="Piéce d'identité"
        icon="fa fa-id-card-o"
        :before-change="validateFourthTab"
      >
        <vue-form-generator
          :model="model"
          :schema="fourthTabSchema"
          :options="formOptions"
          ref="fourthTabForm"
        ></vue-form-generator>
      </tab-content>
      <tab-content title="Last step" icon="fa fa-check-circle">
        <h4>Merci pour remplir la formulaire!</h4>
        <div class="panel-body">
          <i class="fa fa-check" aria-hidden="true"></i>
          <pre v-if="model" v-html="x"></pre>
          <!-- <pre v-if="model" v-html="prettyJSON(model)"></pre> -->
        </div>
      </tab-content>
    </form-wizard>
  </div>
</template>

<script>
import { FormWizard, TabContent } from "vue-form-wizard";
import VueFormGenerator from "vue-form-generator";
import { mapGetters, mapActions } from "vuex";
import axios from "axios";

export default {
  name: "PostPhysique",
  components: {
    FormWizard,
    TabContent,
  },
  data() {
    return {
      x: "La personne physique a été ajoutée avec succès.",
      model: {
        ////////societaire///////
        id_qualite: "",
        // qualite: "",
        nom_client: "",
        prenom_client: "",
        id_sexe_client: "",
        // sexe_client: "",
        id_profession: "",
        // profession: "",
        reference_document: "",
        date_naissance: "",
        id_pays_naissance: "",
        // Pays_de_naissance: "",
        id_vip: "",
        // is_vip: "",

        //////// activites/////////
        id_categorie_vip: "",
        // categorie_vip: "",
        Secteur: "",
        id_organisme_affiliation: "",
        // nom_organisme_affiliation: "",
        reference_appartenance: "",
        numero_rc: "",
        tribunale_immatriculation: "",
        //////// adress//////////
        numero: "",
        id_voie: "",
        // libelle_voie: "",
        code_postal: "",
        complement_adresse: "",
        id_ville: "",
        // nom_ville: "",
        email: "",
        // id_pays_naissance: "",
        // libelle_pays: "",
        telephone_mobile: "",
        telephone_fix: "",

        /////// Piece identité:////////
        id_type_document: "",
        // type_document: "",
        // reference_document: "",
        date_delivrance: "",
        lieu_delivrance: "",
        date_expiration: "",

        // Province: "",
        // Commune: "",
        // Kiyada: "",
        // Douar: ""
      },

      //Tables:
      qualites: [],
      sexes: [],
      professions: [],
      countries: [],
      vips: [],

      formOptions: {
        validationErrorClass: "has-error",
        validationSuccessClass: "has-success",
        validateAfterChanged: true,
      },

      firstTabSchema: {
        fields: [
          {
            type: "select",
            label: "Qualité",
            model: "id_qualite",
            required: true,
            validator: VueFormGenerator.validators.string,
            // [value]="qua.id_qualite" v-for="qua in "{{ qua.qualite }}
            // values: ["Monsieur", "Madame", "Docteur"],
            // values: [{ id: 1, name:"Monsieur"}, { id: 2, name:"MAdame"}, { id: 3, name:"Docteur"}],
            values: () => {
              return this.qualites;
            },
            styleClasses: "col-md-4",
          },
          {
            type: "input",
            inputType: "text",
            label: "Nom",
            model: "Nom",
            required: true,
            validator: VueFormGenerator.validators.string,
            styleClasses: "col-md-4",
            // placeholder: "Client Name",
            // hint: "Minimum 4 characters",
            min: 4,
          },
          {
            type: "input",
            inputType: "text",
            label: "Prénom",
            model: "Prénom",
            required: true,
            validator: VueFormGenerator.validators.string,
            styleClasses: "col-md-4",
            min: 4,
          },
          {
            type: "select",
            label: "Sexe",
            model: "Sexe",
            required: true,
            validator: VueFormGenerator.validators.string,
            values: () => {
              return this.sexes;
            },
            styleClasses: "col-md-4",
            inputClass: "form-control",
            // groupClass:"custom-select",
          },
          {
            type: "input",
            inputType: "text",
            label: "CIN",
            model: "CIN",
            required: true,
            validator: VueFormGenerator.validators.string,
            styleClasses: "col-md-4",
          },
          {
            type: "select",
            label: "Profession",
            model: "id_profession",
            required: true,
            validator: VueFormGenerator.validators.string,
            values: () => {
              return this.professions;
            },
            styleClasses: "col-md-4",
          },
          {
            type: "input",
            inputType: "date",
            label: "Date de naissance",
            model: "Date_de_naissance",
            required: true,
            validator: VueFormGenerator.validators.string,
            styleClasses: "col-md-4",
          },
          {
            type: "select",
            label: "Pays de naissance",
            model: "id_pays_naissance",
            required: true,
            validator: VueFormGenerator.validators.string,
            values: () => {
              return this.countries;
            },
            styleClasses: "col-md-4",
          },
          {
            type: "select",
            label: "VIP",
            model: "id_vip",
            required: true,
            values: () => {
              return this.vips;
            },
            validator: VueFormGenerator.validators.string,
            styleClasses: "col-md-4",
          },
        ],
      },
      secondTabSchema: {
        fields: [
          {
            type: "select",
            label: "Catégorie Sociétaire",
            model: "id_categorie_vip",
            required: true,
            validator: VueFormGenerator.validators.string,
            values: ["a", "b", "c"],
            styleClasses: "col-md-4",
          },
          // {
          //   type: "select",
          //   label: "Secteur",
          //   model: "Secteur",
          //   required: true,
          //   validator: VueFormGenerator.validators.string,
          //   values: ["ze", "az", "ee"],
          //   styleClasses: "col-md-4"
          // },
          // {
          //   type: "select",
          //   label: "Profession",
          //   model: "Profession",
          //   required: true,
          //   validator: VueFormGenerator.validators.string,
          //   values: ["v", "b", "n"],
          //   styleClasses: "col-md-4"
          // },
          {
            type: "select",
            label: "Organisme d’appartenance",
            model: "id_organisme_affiliation",
            required: true,
            validator: VueFormGenerator.validators.string,
            values: ["v", "b", "n"],
            styleClasses: "col-md-8",
          },
          {
            type: "input",
            inputType: "text",
            label: "La référence d’appartenance",
            model: "Reference_dappartenance",
            required: true,
            validator: VueFormGenerator.validators.string,
            styleClasses: "col-md-6",
          },
          {
            type: "input",
            inputType: "text",
            label: "Numéro registre du commerce",
            model: "Numero_registre_commerce",
            required: true,
            validator: VueFormGenerator.validators.string,
            styleClasses: "col-md-6",
          },
          {
            type: "input",
            inputType: "text",
            label: "Tribunal d'immatriculation",
            model: "Tribunal_dimmatriculation",
            required: true,
            validator: VueFormGenerator.validators.string,
            styleClasses: "col-md-12",
          },
        ],
      },
      thirdTabSchema: {
        fields: [
          {
            type: "input",
            inputType: "number",
            label: "Numéro",
            model: "Numero",
            required: true,
            validator: VueFormGenerator.validators.number,
            styleClasses: "col-md-4",
          },
          {
            type: "select",
            label: "Voie",
            model: "id_voie",
            required: true,
            validator: VueFormGenerator.validators.string,
            values: ["v", "b", "n"],
            styleClasses: "col-md-4",
          },
          {
            type: "input",
            inputType: "number",
            label: "Code Postale",
            model: "Code_Postale",
            required: true,
            validator: VueFormGenerator.validators.number,
            styleClasses: "col-md-4",
          },
          {
            type: "input",
            inputType: "text",
            label: "Complément adresse",
            model: "Complement_adresse",
            required: true,
            validator: VueFormGenerator.validators.string,
            styleClasses: "col-md-9",
          },
          {
            type: "select",
            label: "Ville",
            model: "id_ville",
            required: true,
            validator: VueFormGenerator.validators.string,
            values: ["v", "b", "n"],
            styleClasses: "col-md-3",
          },
          {
            type: "input",
            inputType: "email",
            label: "E-mail",
            model: "Email",
            required: true,
            validator: VueFormGenerator.validators.email,
            styleClasses: "col-md-7",
          },
          {
            type: "select",
            label: "Pays",
            model: "id_pays_naissance",
            required: true,
            validator: VueFormGenerator.validators.string,
            values: ["v", "b", "n"],
            styleClasses: "col-md-5",
          },
          {
            type: "input",
            inputType: "tel",
            label: "Tél. portable",
            model: "Telephone_portable",
            // required: true,
            placeholder: "123-45-678",
            pattern: "[0-9]{3}-[0-9]{2}-[0-9]{3}",
            // pattern:"!/^[0-9]{9-12}/",
            validator: VueFormGenerator.validators.string,
            styleClasses: "col-md-6",
          },
          {
            type: "input",
            inputType: "tel",
            label: "Tél.Fixe",
            model: "Telephone_fixe",
            // required: true,
            placeholder: "123-45-678",
            pattern: "[0-9]{3}-[0-9]{2}-[0-9]{3}",
            // pattern:"!/^[0-9]{9-12}/",
            validator: VueFormGenerator.validators.number,
            styleClasses: "col-md-6",
          },
          // {
          //   type: "select",
          //   label: "Province",
          //   model: "Province",
          //   required: true,
          //   validator: VueFormGenerator.validators.string,
          //   values: ["v", "b", "n"],
          //   styleClasses: "col-md-4"
          // },
          // {
          //   type: "select",
          //   label: "Commune",
          //   model: "Commune",
          //   required: true,
          //   validator: VueFormGenerator.validators.string,
          //   values: ["v", "b", "n"],
          //   styleClasses: "col-md-4"
          // },
          // {
          //   type: "input",
          //   inputType: "text",
          //   label: "Kiyada",
          //   model: "Kiyada",
          //   required: true,
          //   validator: VueFormGenerator.validators.string,
          //   styleClasses: "col-md-4"
          // },
          // {
          //   type: "input",
          //   inputType: "text",
          //   label: "Douar",
          //   model: "Douar",
          //   required: true,
          //   validator: VueFormGenerator.validators.string,
          //   styleClasses: "col-md-3"
          // },
        ],
      },
      fourthTabSchema: {
        fields: [
          {
            type: "select",
            label: "Type de document",
            model: "id_type_document",
            required: true,
            validator: VueFormGenerator.validators.string,
            values: ["v", "b", "n"],
            styleClasses: "col-md-7",
          },
          {
            type: "input",
            inputType: "text",
            label: "Numéro de référence",
            model: "Numero_refrence",
            required: true,
            validator: VueFormGenerator.validators.string,
            styleClasses: "col-md-5",
          },
          {
            type: "input",
            inputType: "date",
            label: "Date de délivrance",
            model: "Date_delivrance",
            required: true,
            validator: VueFormGenerator.validators.string,
            styleClasses: "col-md-4",
          },
          {
            type: "input",
            inputType: "text",
            label: "Lieu de délivrance",
            model: "lieu_delivrance",
            required: true,
            validator: VueFormGenerator.validators.string,
            styleClasses: "col-md-4",
          },

          {
            type: "input",
            inputType: "date",
            label: "Date d’expiration",
            model: "Date_dexpiration",
            required: true,
            validator: VueFormGenerator.validators.string,
            styleClasses: "col-md-4",
          },
        ],
      },
    };
  },
  computed: {
    ...mapGetters([]),
  },
  methods: {
    // spread operator
    ...mapActions(["CreatePersonnePhysique"]),
    getQualites() {
      // requet pour importer les qualites.
      axios
        .get("http://localhost:8000/rsu/StdTables/listeQualites")
        .then((qualites) => {
          console.log(qualites.data);
          let newQualites = [...qualites.data]; // cloner les information importer dans un nouveau tableau
          newQualites.map((qualite) => {
            // boucler sur chaque élement du tableau avec la fonction map pour effectuer des changement sur les elements
            // les select boxes du vue form generator accepte des tableau avec string ou tableau avec objet tel que {id: N, name:""}
            qualite.id = qualite.id_qualite; // changer la libellé du id
            qualite.name = qualite.qualite; // changer la libellé du nom
            delete qualite.id_qualite; //supprimons les anciens libblé
            delete qualite.qualite; // supprimons les anciens libblé
          });
          this.qualites = newQualites;
        });
    },
    getSexes() {
      // requet pour importer les sexes.
      axios
        .get("http://localhost:8000/rsu/StdTables/listeSexeClient")
        .then((sexes) => {
          console.log(sexes.data);
          let newSexes = [...sexes.data]; // cloner les information importer dans un nouveau tableau
          newSexes.map((sexe) => {
            // boucler sur chaque élement du tableau avec la fonction map pour effectuer des changement sur les elements
            // les select boxes du vue form generator accepte des tableau avec string ou tableau avec objet tel que {id: N, name:""}
            sexe.id = sexe.id_sexe_client; // changer la libellé du id
            sexe.name = sexe.sexe_client; // changer la libellé du nom
            delete sexe.id_sexe_client; //supprimons les anciens libblé
            delete sexe.sexe_client; // supprimons les anciens libblé
          });
          this.sexes = newSexes;
        });
    },
    getProfessions() {
      // requet pour importer les qualites.
      axios
        .get("http://localhost:8000/rsu/StdTables/listeProfessions")
        .then((professions) => {
          console.log(professions.data);
          let newProfessions = [...professions.data]; // cloner les information importer dans un nouveau tableau
          newProfessions.map((profession) => {
            // boucler sur chaque élement du tableau avec la fonction map pour effectuer des changement sur les elements
            // les select boxes du vue form generator accepte des tableau avec string ou tableau avec objet tel que {id: N, name:""}
            profession.id = profession.id_profession; // changer la libellé du id
            profession.name = profession.profession; // changer la libellé du nom
            delete profession.id_profession; //supprimons les anciens libblé
            delete profession.profession; // supprimons les anciens libblé
          });
          this.professions = newProfessions;
        });
    },

    getCountries() {
      // importer la liste du pays de la base de donnée
      axios
        .get("http://localhost:8000/rsu/StdTables/listePays")
        .then((countries) => {
          console.log(countries.data);
          let newCountries = [...countries.data]; // cloner les information importer dans un nouveau tableau
          newCountries.map((countrie) => {
            // boucler sur chaque élement du tableau avec la fonction map pour effectuer des changement sur les elements
            // les select boxes du vue form generator accepte des tableau avec string ou tableau avec objet tel que {id: N, name:""}
            countrie.id = countrie.id_pays_naissance; // changer la libellé du id
            countrie.name = countrie.libelle_pays; // changer la libellé du nom
            delete countrie.id_pays_naissance; // supprimons les anciens libblé
            delete countrie.libelle_pays; // supprimons les anciens libblé
          });
          this.countries = newCountries;
        });
    },

    getVip() {
      // importer la liste du pays de la base de donnée
      axios.get("http://localhost:8000/rsu/StdTables/listeVip").then((vips) => {
        console.log(vips.data);
        let newVips = [...vips.data]; // cloner les information importer dans un nouveau tableau
        newVips.map((vip) => {
          // boucler sur chaque élement du tableau avec la fonction map pour effectuer des changement sur les elements
          // les select boxes du vue form generator accepte des tableau avec string ou tableau avec objet tel que {id: N, name:""}
          vip.id = vip.id_vip; // changer la libellé du id
          vip.name = vip.is_vip; // changer la libellé du nom
          delete vip.id_vip; // supprimons les anciens libblé
          delete vip.is_vip; // supprimons les anciens libblé
        });
        this.vips = newVips;
      });
    },

    // submit:
    onSubmit(e) {
      // stoping load
      e.preventDefault();
      this.CreatePersonnePhysique(this.data);
    },

    onComplete: function () {
      alert("Yay. Done!");
    },
    // onComplete: function() {
    //   alert("La personne physique a été ajoutée avec succès.!");
    // },

    // VALIDATION:
    validateFirstTab: function () {
      return this.$refs.firstTabForm.validate();
    },
    validateSecondTab: function () {
      return this.$refs.secondTabForm.validate();
    },
    validateThirdTab: function () {
      return this.$refs.thirdTabForm.validate();
    },
    validateFourthTab: function () {
      return this.$refs.fourthTabForm.validate();
    },

    // prettyJSON: function(json) {
    //   if (json) {
    //     json = JSON.stringify(json, undefined, 4);
    //     json = json
    //       .replace(/&/g, "&")
    //       .replace(/</g, "<")
    //       .replace(/>/g, ">");
    //     return json.replace(
    //       // /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    //       // /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
    //       function(match) {
    //         var cls = "number";
    //         if (/^"/.test(match)) {
    //           if (/:$/.test(match)) {
    //             cls = "key";
    //           } else {
    //             cls = "string";
    //           }
    //         } else if (/true|false/.test(match)) {
    //           cls = "boolean";
    //         } else if (/null/.test(match)) {
    //           cls = "null";
    //         }
    //         // return "<span class="" + cls + "">" + match + "</span>";
    //         return cls;
    //       }
    //     );
    //   }
    // }
  },

  // loading page:
  created() {
    this.getQualites();
    this.getSexes();
    this.getProfessions();
    // this.getPays();
    this.getCountries();
    this.getVip();
  },
  // mounted() {

  // },
};
</script>

<style scoped>
</style>