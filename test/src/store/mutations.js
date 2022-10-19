import Vue from 'vue';
import MUTATIONTYPES from './mutations-type';

export default {
  [MUTATIONTYPES.SET_SLIDE_MODEL](state, payload) {
    Vue.set(state, 'slider', payload);
  },
  [MUTATIONTYPES.SET_APP_LOAD](state, payload) {
    Vue.set(state, 'appSuccess', payload);
  },
  [MUTATIONTYPES.SET_HEADER_MENU](state, payload) {
    Vue.set(state, 'header', payload);
  },
};
