<template>
	<div>
		<div class="loader-wrapper" :class="{ 'is-active': isLoading }">
			<div class="loader is-loading"></div>
		</div>

		<div
			class="hero is-fullheight"
			:class="{ hidden: isLoading }"
			v-touch:swipe.right="loadPreviousImage"
			v-touch:swipe.left="loadNextImage"
		>
			<div class="hero-body">
				<div class="container has-text-centered">
					<img v-on:click="loadNewImage" :src="dogImg" v-on:load="imageLoaded" />
				</div>
			</div>

			<div class="hero-foot">
				<div class="field is-grouped has-addons has-addons-centered">
					<p class="control">
						<button
							class="button is-primary is-outlined"
							v-on:click="loadPreviousImage"
							:disabled="dogImgs.length == 0"
						>
							Previous
						</button>
					</p>
					<p class="control">
						<button
							class="button is-primary is-outlined"
							v-on:click="loadNextImage"
							:disabled="dogImgs.length == 0"
						>
							Next
						</button>
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

const DEFAULT_IMG = 'https://images.dog.ceo/breeds/corgi-cardigan/n02113186_10505.jpg';
const API_ENDPOINT = 'https://dog.ceo/api/breed/corgi/images/random';

@Component
export default class CorgiImage extends Vue {
	private dogImg = '';

	private dogImgs: Array<string> = [];

	private isLoading = false;

	async loadNewImage(): Promise<void> {
		this.dogImg = await this.getCorgiImg();
	}

	async loadNextImage(): Promise<void> {
		console.log('previous', this.dogImgs);
		const lastImg = this.dogImgs.shift();

		if (lastImg) {
			this.dogImg = lastImg;

			this.dogImgs.push(lastImg);

			console.log('now', this.dogImgs);
		} else {
			this.dogImg = DEFAULT_IMG;
		}
	}

	async loadPreviousImage(): Promise<void> {
		console.log('previous', this.dogImgs);
		const lastImg = this.dogImgs.pop();

		if (lastImg) {
			this.dogImg = lastImg;

			this.dogImgs.unshift(lastImg);
			console.log('now', this.dogImgs);
		} else {
			this.dogImg = DEFAULT_IMG;
		}
	}

	async imageLoaded(): Promise<void> {
		this.isLoading = false;
	}

	async mounted(): Promise<void> {
		await this.loadNewImage();
	}

	async getCorgiImg(): Promise<string> {
		this.isLoading = true;

		try {
			const data = await fetch(API_ENDPOINT).then((resp) => resp.json());

			this.dogImgs.push(data.message);

			return data.message;
		} catch (e) {
			const dogs = this.dogImgs.length;

			this.isLoading = false;

			if (dogs) {
				return this.dogImgs[Math.floor(Math.random() * dogs)];
			}

			return DEFAULT_IMG;
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
