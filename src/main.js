// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
Vue.use(Vuex)
Vue.config.productionTip = false
const store = new Vuex.Store({
  state: {
    userIcons: []
  },
  mutations: {
    setUserIcons (state, icons) {
      state.userIcons = icons
    }
  },
  actions: {
    getUserIcons ({commit}) {
      let pics = [
        'https://static.youku.com/user/img/avatar/310/43.jpg',
        'https://static.youku.com/user/img/avatar/50/2.jpg'
      ]
      setTimeout(() => {
        commit('setUserIcons', pics)
      }, 2000)
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
