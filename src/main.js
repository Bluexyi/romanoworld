import Vue from 'vue'
import { router } from './_helpers';
import App from './App.vue'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
