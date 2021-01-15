import axios from "axios";

const state = {
  activites: [],
  errors: [],
};
const getters = {
  allActivites: (state) => state.activites,
};
const actions = {
  // Get All:
  async getActivites({ commit }) {
    // request
    const response = await axios.get(
      "http://localhost:8000/rsu/StdTables/listeActivitesFilieresSecteurs"
    );

    // response
    commit("setActivites", response.data);
  },
  // addActivity({ commit }, formData) {
  addActivitesFilieresSecteurs({ commit }, postData) {
    // request
    console.log("ajouter une FAS");

    axios
      .post("http://localhost:8000/rsu/StdTables/addASF", postData)
      .then((response) => {
        console.log(response.data);
        // trés important de vérifier la réponse du requete avant d efaire quoi que ce soit
        if (response.status === 200) {
          // si les informations sont ajouté avec succés
          axios
            .get(
              "http://localhost:8000/rsu/StdTables/listeActivitesFilieresSecteurs"
            )
            .then((res) => {
              commit("setActivites", res.data.reverse());
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
  setActivites: (state, activites) => (state.activites = activites),

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
  mutations,
};
