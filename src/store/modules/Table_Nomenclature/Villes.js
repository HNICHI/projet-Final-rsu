import axios from "axios";

const state = {
  villes: [],
  errors: [],
};
const getters = {
  allVilles: (state) => state.villes,
  allErrors: (state) => state.errors,
};
const actions = {
  // Get All:
  async getVilles({ commit }) {
    // request
    const response = await axios.get(
      "http://localhost:8000/rsu/StdTables/listevilles"
    );
    // response
    commit("setVilles", response.data.reverse());

  },

  //Add One:
  addVilles({ commit }, nom_ville) {
    // request
    console.log("ajouter une ville");
    let data = new FormData();
    data.append("nom_ville", nom_ville);
    axios
      .post("http://localhost:8000/rsu/StdTables/addVille", data)
      .then((response) => {
        console.log(response.data);
        // trés important de vérifier la réponse du requete avant d efaire quoi que ce soit
        if (response.status === 200) {
          // si les informations sont ajouté avec succés
          axios.get("http://localhost:8000/rsu/StdTables/listevilles").then(res => {
            commit("setVilles", res.data.reverse());
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


  // Filter:
  async filterVilles({ commit }, e) {
    console.log(e);
    // selected number
    const limit = parseInt(
      e.target.options[e.target.options.selectedIndex].innerText
    );
    const response = await axios.get(
      `http://localhost:8000/rsu/StdTables/listevilles?_limit=${limit}`
    );

    commit("setVilles", response.data);

  },
};

const mutations = {
  setVilles: (state, villes) => (state.villes = villes),
  // postVilles:(state, ville) => state.villes.unshift(ville),

  // or:
  // postVilles(state, ville) {
  //   // let villes =state.villes.concat(ville);
  //or:
  //   let villes = [ville, ...state.villes];
  //   console.log(villes);
  //   state.villes = villes;
  // },

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