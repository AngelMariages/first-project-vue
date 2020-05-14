module.exports = {
	publicPath: process.env.NODE_ENV === 'production'
		? '/first-project-vue/'
		: '/',
	pwa: {
		name: 'Àngel first project in Vue',
		workboxOptions: {
			runtimeCaching: [{
				urlPattern: new RegExp('https://cdn.jsdelivr.net/npm/bulma'),
				handler: 'StaleWhileRevalidate',
			}, {
				urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
				handler: 'CacheFirst',
				options: {
					cacheName: 'images',
					expiration: {
						maxEntries: 30,
					},
				},
			}],
		},
	},
};
