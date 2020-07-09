<template>
	<div id="app">
		<rf-navbar />
		<router-view></router-view>
	</div>
</template>

<script lang="ts">
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import { Vue, Component } from "vue-property-decorator";

import RfNavbar from "@/components/RfNavbar.vue";

@Component({
	components: {
		RfNavbar
	}
})
export default class App extends Vue {}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
