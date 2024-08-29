import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);


// 1.0.1
import state from "@/store/state";
import getters from "@/store/getters";
import mutations from "@/store/mutations";
import actions from "@/store/actions";

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules: {},
});
