import axios from "axios";

const state = {
  formesJuridiques: [],
  errors: [],
};
const getters = {
  allFormesJuridiques: state => state.formesJuridiques,

};
const actions = {
  // Get All:
  async getFormesJuridiques({ commit }) {
    // request
    const response = await axios.get("http://localhost:8000/rsu/StdTables/listeFormesJuridiques");
    // response
    commit("setFormesJuridiques", response.data);
  },

  
  //Add One:
  addFormesJuridiques({ commit }, forme_juridique) {
    // request
    console.log("ajouter forme juridique");
    let data = new FormData();
    data.append("forme_juridique", forme_juridique);
    axios
      .post("http://localhost:8000/rsu/StdTables/addformejuridique", data)
      .then((response) => {
        console.log(response.data);
        // trés important de vérifier la réponse du requete avant d efaire quoi que ce soit
        if (response.status === 200) {
          // si les informations sont ajouté avec succés
          axios.get("http://localhost:8000/rsu/StdTables/listeFormesJuridiques").then(res => {
            commit("setFormesJuridiques", res.data.reverse());
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
  setFormesJuridiques: (state, formesJuridiques) => (state.formesJuridiques = formesJuridiques),
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

