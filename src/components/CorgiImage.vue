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
					<img v-on:click="loadNewImage" :src="dogImgs[currentIndex]" v-on:load="imageLoaded" />
				</div>
			</div>

			<div class="hero-foot">
				<div class="control-strip field has-addons has-addons-centered">
					<p class="control">
						<button
							class="button is-primary is-outlined"
							v-on:click="loadPreviousImage"
							:disabled="dogImgs.length < 2"
						>
							Previous
						</button>
					</p>
					<p class="control"><a class="button is-static">{{ currentIndex + 1 }}</a></p>
					<p class="control">
						<button
							class="button is-primary is-outlined"
							v-on:click="loadNextImage"
							:disabled="dogImgs.length < 2"
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
	private currentIndex = 0;

	private dogImgs: Array<string> = [];

	private isLoading = false;

	async loadNewImage(): Promise<void> {
		this.dogImgs.push(await this.getCorgiImg());
		this.currentIndex = this.dogImgs.length - 1;
	}

	async loadNextImage(): Promise<void> {
		if ((this.currentIndex + 1) > this.dogImgs.length - 1) {
			this.currentIndex = 0;
		} else {
			this.currentIndex += 1;
		}
	}

	async loadPreviousImage(): Promise<void> {
		if ((this.currentIndex - 1) < 0) {
			this.currentIndex = this.dogImgs.length - 1;
		} else {
			this.currentIndex -= 1;
		}
	}

	async imageLoaded(): Promise<void> {
		this.isLoading = false;
	}

	async mounted(): Promise<void> {
		await this.loadNewImage();
		window.addEventListener('keypress', (e: KeyboardEvent) => {
			if (e.key === 'ArrowLeft') {
				this.loadPreviousImage();
			} else if (e.key === 'ArrowRight') {
				this.loadNextImage();
			}
		});
	}

	async getCorgiImg(): Promise<string> {
		this.isLoading = true;

		try {
			const data = await fetch(API_ENDPOINT).then((resp) => resp.json());

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

<style lang="scss" scoped>
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

	& .loader {
		height: 80px;
		width: 80px;
	}

	&.is-active {
		opacity: 1;
		z-index: 1;
	}
}

.control-strip {
	padding-bottom: 4rem;
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
