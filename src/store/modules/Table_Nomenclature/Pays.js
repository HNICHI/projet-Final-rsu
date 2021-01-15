import axios from "axios";

const state = {
  pays: [],
  errors: [],

};
const getters = {
  allPays: state => state.pays,

};
const actions = {
  // Get All:
  async getPays({ commit }) {
    // request
    const response = await axios.get("http://localhost:8000/rsu/StdTables/listePays");
    // response
    commit("setPays", response.data);
  },

  //Add One:
  addPays({ commit }, libelle_pays) {
    // request
    console.log("ajouter libelle_pays");
    let data = new FormData();
    data.append("libelle_pays", libelle_pays);
    axios
      .post("http://localhost:8000/rsu/StdTables/addpays", data)
      .then((response) => {
        console.log(response.data);
        // trés important de vérifier la réponse du requete avant d efaire quoi que ce soit
        if (response.status === 200) {
          // si les informations sont ajouté avec succés
          axios.get("http://localhost:8000/rsu/StdTables/listePays").then(res => {
            commit("setPays", res.data.reverse());
          });
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
  setPays: (state, pays) => (state.pays = pays),

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

