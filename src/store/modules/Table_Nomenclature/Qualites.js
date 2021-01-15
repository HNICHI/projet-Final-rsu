import axios from "axios";

const state = {
  qualites: [],
  errors: [],

};
const getters = {
  allQualites: state => state.qualites,

};
const actions = {
  // Get All:
  async getQualites({ commit }) {
    // request
    const response = await axios.get("http://localhost:8000/rsu/StdTables/listeQualites");
    // response
    commit("setQualites", response.data);
  },


  
  //Add One:
  addQualites({ commit }, qualite) {
    // request
    console.log("ajouter une qualite");
    let data = new FormData();
    data.append("qualite", qualite);
    axios
      .post("http://localhost:8000/rsu/StdTables/addqualite", data)
      .then((response) => {
        console.log(response.data);
        // trés important de vérifier la réponse du requete avant d efaire quoi que ce soit
        if (response.status === 200) {
          // si les informations sont ajouté avec succés
          axios.get("http://localhost:8000/rsu/StdTables/listeQualites").then(res => {
            commit("setQualites", res.data.reverse());
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
  setQualites: (state, qualites) => (state.qualites = qualites),

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

