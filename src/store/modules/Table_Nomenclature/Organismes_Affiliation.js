import axios from "axios";

const state = {
  organismesAffiliation: [],
  errors: [],

};
const getters = {
  allOrganismesAffiliation: state => state.organismesAffiliation,
  // allErrors: (state) => state.errors,


};
const actions = {
  // Get All:
  async getOrganismesAffiliation({ commit }) {
    // request
    const response = await axios.get("http://localhost:8000/rsu/StdTables/listeOrganismesAffiliation");
    // response
    commit("setOrganismesAffiliation", response.data);
  },

  //Add One:
  addOrganismesAffiliation({ commit }, nom_organisme_affiliation) {
    // request
    console.log("ajouter nom organisme affiliation");
    let data = new FormData();
    data.append("nom_organisme_affiliation", nom_organisme_affiliation);
    axios
      .post("http://localhost:8000/rsu/StdTables/addorganismeaffiliation", data)
      .then((response) => {
        console.log(response.data);
        // trés important de vérifier la réponse du requete avant d efaire quoi que ce soit
        if (response.status === 200) {
          // si les informations sont ajouté avec succés
          axios.get("http://localhost:8000/rsu/StdTables/listeOrganismesAffiliation").then(res => {
            commit("setOrganismesAffiliation", res.data.reverse());
          });
          // commit("postVilles", { id_ville: 0, nom_ville: nom_ville });
        } else if (response.status === 500) {
          // si il y a une erreur au serveur
          commit(
            "handleError",
            "un probléme au serveurs réessayer ultérieurement"
          );
        } else if (response.status === 404) {
          commit(
            "handleError",
            "nous n'avons pas pu trouver cette déstination"
          );
        }
      });
  },

};

const mutations = {
  setOrganismesAffiliation: (state, organismesAffiliation) => (state.organismesAffiliation = organismesAffiliation),


  handleError(state, error) {
    let errors = [...state.errors, { message: error }];
    state.errors = errors;
  },



};

export default {
  // state:state
  state,
  getters,
  actions,
  mutations
};

