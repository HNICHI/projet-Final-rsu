import axios from "axios";

const state = {
  Voies: [],
  errors: [],
};
const getters = {
  allVoies: state => state.Voies,

};
const actions = {
  // Get All:
  async getVoies({ commit }) {
    // request
    const response = await axios.get("http://localhost:8000/rsu/StdTables/listeVoies");
    // response
    commit("setVoies", response.data);
  },


  //Add One:
  addVoie({ commit }, libelle_voie) {
    // request
    console.log("ajouter une voie");
    let data = new FormData();
    data.append("libelle_voie", libelle_voie);
    axios
      .post("http://localhost:8000/rsu/StdTables/addvoie", data)
      .then((response) => {
        console.log(response.data);
        // trés important de vérifier la réponse du requete avant d efaire quoi que ce soit
        if (response.status === 200) {
          // si les informations sont ajouté avec succés
          axios.get("http://localhost:8000/rsu/StdTables/listeVoies").then(res => {
            commit("setVoies", res.data.reverse());
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
  setVoies: (state, Voies) => (state.Voies = Voies),


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

