import Vue from 'vue'
import contentView from './components/ContentVM.vue'

new Vue({
	el:'#app',
	render: (createElement) => createElement(contentView)
});