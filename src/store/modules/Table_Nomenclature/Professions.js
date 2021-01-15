import axios from "axios";

const state = {
  professions: [],
  errors: [],
};
const getters = {
  allProfessions: state => state.professions,

};
const actions = {
  // Get All:
  async getProfessions({ commit }) {
    // request
    const response = await axios.get("http://localhost:8000/rsu/StdTables/listeProfessions");
    // response
    commit("setProfessions", response.data);
  },

  //Add One:
  addProfession({ commit }, profession) {
    // request
    console.log("ajouter une profession");
    let data = new FormData();
    data.append("profession", profession);
    axios
      .post("http://localhost:8000/rsu/StdTables/addprofession", data)
      .then((response) => {
        console.log(response.data);
        // trés important de vérifier la réponse du requete avant d efaire quoi que ce soit
        if (response.status === 200) {
          // si les informations sont ajouté avec succés
          axios.get("http://localhost:8000/rsu/StdTables/listeProfessions").then(res => {
            commit("setProfessions", res.data.reverse());
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
  setProfessions: (state, professions) => (state.professions = professions),
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

