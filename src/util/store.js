import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        Userid:null
    },
    mutations:{
        setUserid(state,userid){
            state.Userid=userid;
        },
        clearUser(state){
            state.Userid=null;
        }
    },
    getters: {
        getUserId: state => state.Userid
      },
    actions: {
        loginSuccess({ commit }, Userid) {
          commit('setUserid', Userid);
        }
      }
})