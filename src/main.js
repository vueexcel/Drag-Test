import Vue from 'vue'
import App from './App.vue'
// import PrimeVue from 'primevue/config';

import ToastService from 'primevue/toastservice';
Vue.use(ToastService);


// Vue.use(PrimeVue);



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
