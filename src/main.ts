import Vue from 'vue';
import Vue2TouchEvents from 'vue2-touch-events';
import App from './App.vue';
import './registerServiceWorker';

Vue.config.productionTip = false;

Vue.use(Vue2TouchEvents, {
	swipeTolerance: 100,
});

new Vue({
	render: (h) => h(App),
}).$mount('#app');
