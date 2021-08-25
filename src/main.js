import Vue from 'vue'
import App from './App.vue'
import VueScreen from 'vue-screen';

Vue.use(VueScreen);

import ToastService from 'primevue/toastservice';
Vue.use(ToastService);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
