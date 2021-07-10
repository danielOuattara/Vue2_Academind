import Vue     from 'vue';
import App     from './App.vue';
import Message from './Message.vue';
import Input   from './Input.vue';

Vue.component('app-message', Message)
Vue.component('app-input', Input)

new Vue({
  el: '#app',
  render: h => h(App)
})
