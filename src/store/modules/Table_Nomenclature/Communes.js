import axios from "axios";

const state = {
  communes: [],
  errors: [],

};
const getters = {
  allCommunes: state => state.communes,

};
const actions = {
  // Get All:
  async getCommunes({ commit }) {
    // request
    const response = await axios.get("http://localhost:8000/rsu/StdTables/listeCommunes");
    // response
    commit("setCommunes", response.data);
  },

  //Add One:
  addCommunes({ commit }, commune) {
    // request
    console.log("ajouter une commune");
    let data = new FormData();
    data.append("commune", commune);
    axios
      .post("http://localhost:8000/rsu/StdTables/addCommune", data)
      .then((response) => {
        console.log(response.data);
        // trés important de vérifier la réponse du requete avant d efaire quoi que ce soit
        if (response.status === 200) {
          // si les informations sont ajouté avec succés
          axios.get("http://localhost:8000/rsu/StdTables/listeCommunes").then(res => {
            commit("setCommunes", res.data.reverse());
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
  setCommunes: (state, communes) => (state.communes = communes),
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

