import Vue from "vue";
import Vuex from "vuex";
import getters from "./app/getters";
import mutations from "./app/mutations";
import actions from "./app/actions";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    signUpForm: {
      username: "",
      password: "",
    },
    albums: [],
    photosTimeline: [],
    searchText: "",
    filterSection: false,
    fetchStatus: false,
    categories: [
      "backgrounds",
      "fashion",
      "nature",
      "science",
      "people",
      "places",
      "animals",
      "industry",
      "computer",
      "sports",
      "buildings",
      "health",
      "travel",
      "music",
    ],
  },
  getters,
  mutations,
  actions,
  modules: {
    // const moduleA = {
    //   state: () => ({ ... }),
    //   mutations: { ... },
    //   actions: { ... },
    //   getters: { ... }
    // }
    // const moduleB = {
    //   state: () => ({ ... }),
    //   mutations: { ... },
    //   actions: { ... }
    // }
    // const store = createStore({
    //   modules: {
    //     a: moduleA,
    //     b: moduleB
    //   }
    // })
    // store.state.a // -> `moduleA`'s state
    // store.state.b // -> `moduleB`'s state
  },
});
