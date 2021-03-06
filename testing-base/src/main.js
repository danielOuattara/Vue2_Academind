import Vue     from 'vue';
import App     from './App.vue';
import Message from './Message.vue';
import Message2 from './Message2.vue';
import Input   from './Input.vue';

Vue.component('app-message', Message)
Vue.component('app-message2', Message2)
Vue.component('app-input', Input)

new Vue({
  el: '#app',
  render: h => h(App)
})
