import Vue from 'vue';
import Router from 'vue-router';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router/index';
import store from './store';
//import fb from 'firebase';

Vue.use(Router);
Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: h => h(App),
  router:router,
  store,
  created() {
    const firebaseConfig = {
      apiKey: "AIzaSyCP3B9ISQ9Q0I-rVMCNKCe3FuL6ldkE4rE",
      authDomain: "vue-ads-2021.firebaseapp.com",
      projectId: "vue-ads-2021",
      storageBucket: "vue-ads-2021.appspot.com",
      messagingSenderId: "197397540349",
      appId: "1:197397540349:web:e642a60bfbde2d5baffd94",
      measurementId: "G-GW0BDMX9PS"

    };

    //Initialize Firebase
    //fb.initializeApp(firebaseConfig);
    //fb.analytics();
    const app = initializeApp(firebaseConfig);
    getAnalytics(app);
  },
}).$mount('#app');
