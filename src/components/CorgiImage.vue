<template>
	<div>
		<div class="loader-wrapper" :class="{ 'is-active': isLoading }">
			<div class="loader is-loading"></div>
		</div>
		<div class="hero is-fullheight" :class="{ hidden: isLoading }">
			<div class="hero-body">
				<img v-on:click="handleClick" :src="dogImg" v-on:load="imageLoaded" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class CorgiImage extends Vue {
	private dogImg = '';

	private dogImgs: Array<string> = [];

	private isLoading = false;

	async handleClick(): Promise<void> {
		this.dogImg = await this.getCorgiImg();
	}

	async imageLoaded(): Promise<void> {
		this.isLoading = false;
	}

	async mounted(): Promise<void> {
		this.dogImg = await this.getCorgiImg();
	}

	async getCorgiImg(): Promise<string> {
		this.isLoading = true;

		try {
			const data = await fetch('https://dog.ceo/api/breed/corgi/images/random').then((resp) => resp.json());

			this.dogImgs.push(data.message);

			return data.message;
		} catch (e) {
			console.error(e);

			const dogs = this.dogImgs.length;

			if (dogs) {
				return this.dogImgs[Math.floor(Math.random() * dogs)];
			}

			return 'https://images.dog.ceo/breeds/corgi-cardigan/n02113186_10505.jpg';
		}
	}
}
</script>

<style scoped>
.loader-wrapper {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	background: #fff;
	opacity: 0;
	z-index: -1;
	transition: opacity 0.3s;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 6px;
}

.loader-wrapper .loader {
	height: 80px;
	width: 80px;
}

.loader-wrapper.is-active {
	opacity: 1;
	z-index: 1;
}

img {
	max-width: 100%;
	max-height: calc(100vh - 6rem);
	object-fit: contain;
	margin: 0 auto;
	border-radius: 1%;
}

.hero {
	opacity: 1;
	transition: opacity 0.3s;
}

.hidden {
	opacity: 0;
}
</style>
