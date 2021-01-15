import axios from "axios";

const state = {
  categoriesVip: [],
  errors: [],
};
const getters = {
  allCategoriesVip: (state) => state.categoriesVip,
  // allErrors: (state) => state.errors,
};
const actions = {
  // Get All:
  async getCategoriesVip({ commit }) {
    // request
    const response = await axios.get(
      "http://localhost:8000/rsu/StdTables/listeCategorieVip"
    );
    // response
    commit("setCategoriesVip", response.data.reverse());

  },

  //Add One:
  addCategoryVip({ commit }, categorie_vip) {
    // request
    console.log("ajouter une categorie vip");
    let data = new FormData();
    data.append("categorie_vip", categorie_vip);
    axios
      .post("http://localhost:8000/rsu/StdTables/addcategorievip", data)
      .then((response) => {
        console.log(response.data);
        // trés important de vérifier la réponse du requete avant d efaire quoi que ce soit
        if (response.status === 200) {
          // si les informations sont ajouté avec succés
          axios.get("http://localhost:8000/rsu/StdTables/listeCategorieVip").then(res => {
            commit("setCategoriesVip", res.data.reverse());
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
  setCategoriesVip: (state, categoriesVip) => (state.categoriesVip = categoriesVip),
  // postCategoryVip:(state,categoryVip) => state.categoriesVip.unshift(categoryVip),

  // or:
  // postCategoryVip(state, categoryVip) {
  //   // let categoriesVip =state.categoriesVip.concat(categoryVip);
  // // or:
  //   let categoriesVip = [categoryVip, ...state.categoriesVip];
  //   console.log(categoriesVip);
  //   state.categoriesVip = categoriesVip;
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