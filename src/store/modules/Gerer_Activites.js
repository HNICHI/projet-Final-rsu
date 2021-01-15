import axios from "axios";

const state = {
  GererActivitesClient: [],
  GererActivites: [],
  Errors: {},
};
const getters = {
  gererAllActivitesClient: (state) => state.GererActivitesClient,
  gererAllActivites: (state) => state.GererActivites,
  errors: (state) => state.Errors,
};
const actions = {
  // Get All:
  // ActivitesClient
  async getActivitesClient({ commit }) {
    // request
    const response = await axios.get(
      "http://localhost:8000/rsu/ClientActivite/selectASFClients"
    );
    // response
    commit("setActivitesClient", response.data.reverse());
  },

  // Activites
  async getActivityClient({ commit }) {
    // request
    const response = await axios.get(
      "http://localhost:8000/rsu/StdTables/listeActivites"
    );
    // response
    commit("setActivityClient", response.data);
  },

  addActivitesClient({ commit }, formData) {
    // request
    // console.log("ajouter une activité");
    axios
      .post("http://localhost:8000/rsu/ClientActivite/addActivite", formData)
      .then((response) => {
        // trés important de vérifier la réponse du requete avant de faire quoi que ce soit
        if (response.status === 200) {
          //si les information sont ajouté avec succés
          axios
            .get("http://localhost:8000/rsu/ClientActivite/selectASFClients")
            .then((rsp) => {
              console.log(rsp);
              commit("setActivitesClient", rsp.data.reverse());
            });
        } else if (response.status === 500) {
          // si il y a une erreur au serveur
          commit(
            "handleError",
            "Un probléme au serveurs réessayer ultérieurement"
          );
        } else if (response.status === 404) {
          commit(
            "handleError",
            "Nous n'avons pas pu trouver cette déstination"
          );
        }
      })
      .catch(() => {
        commit("setErrors", { dataNotAdd: true });
      });
  },
};

const mutations = {
  setActivitesClient: (state, GererActivitesClient) =>
    (state.GererActivitesClient = GererActivitesClient),
  setActivityClient: (state, GererActivites) =>
    (state.GererActivites = GererActivites),
  setErrors: (state, Errors) => (state.Errors = Errors),

  addActivitesClient: (state, activityClient) =>
    state.villes.unshift(activityClient),
};

export default {
  // state:state
  state,
  getters,
  actions,
  mutations,
};
