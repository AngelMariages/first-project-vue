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
				urlPattern: new RegExp('https://images.dog.ceo/'),
				handler: 'StaleWhileRevalidate',
			}],
		},
	},
};
