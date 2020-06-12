<template>
	<div id="app">
		<corgi-image></corgi-image>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CorgiImage from '@/components/CorgiImage.vue';
// import '../node_modules/bulma/css/bulma.css';

@Component({
	components: {
		CorgiImage,
	},
})
export default class App extends Vue {}
</script>

<style></style>
