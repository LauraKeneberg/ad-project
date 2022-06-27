import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/index'
import store from './store'
import firebase from 'firebase'
import BuyModalComponent from '@/components/Shared/BuyModal'

Vue.use(Router)
Vue.component('app-vue-modal',BuyModalComponent)
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
  router: router,
  store,
  created () {
    const firebaseConfig = {
      apiKey: "AIzaSyBtSiJuROWHqN4ZHdgZdbrm7BCjg4uVo9Q",
      authDomain: "my-app-6cd92.firebaseapp.com",
      databaseURL: "https://my-app-6cd92-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "my-app-6cd92",
      storageBucket: "my-app-6cd92.appspot.com",
      messagingSenderId: "921988164156",
      appId: "1:921988164156:web:8a5b9ef13b83efd47b3139",
      measurementId: "G-EY9TNJSHMP"
  };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

      firebase.auth().onAuthStateChanged(user => {
        if (user) {
this.$store.dispatch('autoLoginUser', user)
}

})
this.$store.dispatch('fetchAds')
}
}).$mount('#app')
