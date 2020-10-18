import Vue from 'vue'
import App from './App.vue'
import Vuelidate from "vuelidate";
import router from './router'
import store from './store'
import messagePlugin from "../src/utils/message.plugin"
import './registerServiceWorker'
import "materialize-css/dist/js/materialize.min"


import firebase from "firebase/app"
import "firebase/auth"
import "firebase/database"

Vue.config.productionTip = false
Vue.use(messagePlugin);
Vue.use(Vuelidate);

// eslint-disable-next-line no-unused-vars
firebase.initializeApp({
    apiKey: "AIzaSyC4NEX3hQT_lMNoO7osAi3D0CgDVwHNTec",
    authDomain: "my-vue-cli-project-98.firebaseapp.com",
    databaseURL: "https://my-vue-cli-project-98.firebaseio.com",
    projectId: "my-vue-cli-project-98",
    storageBucket: "my-vue-cli-project-98.appspot.com",
    messagingSenderId: "468759249833",
    appId: "1:468759249833:web:660a16f6bf22e0406e7ab8",
    measurementId: "G-S973VP1L39"
})
let app

firebase.auth().onAuthStateChanged(() => {
    if (!app) {
        app = new Vue({
            router,
            store,
            render: h => h(App)
        }).$mount('#app')
    }
})
