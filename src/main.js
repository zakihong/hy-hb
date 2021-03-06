import Vue from 'vue';
import MintUI from 'mint-ui';
import VCharts from 'v-charts';
import FastClick from 'fastclick';
import router from './router';
import store from './store';
import components from './components';
import App from './App';
import { spread } from './utils';

if (window.htp.mock) {
  require('./mock');
}

Vue.use(MintUI);
Vue.use(VCharts);
Vue.prototype.spread = spread;

if ('addEventListener' in document) {
  document.addEventListener(
    'fastclick',
    () => {
      FastClick.attach(document.body);
    },
    false
  );
}

Object.keys(components).forEach(key => {
  var name = key.replace(/(\w)/, v => v.toUpperCase());
  Vue.component(`v${name}`, components[key]);
});

new Vue({
  data: {
    eventHub: new Vue() //事件中心
  },
  store,
  router,
  render: h => h(App)
}).$mount('#app');
