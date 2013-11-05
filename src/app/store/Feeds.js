Ext.define('HEART.store.Feeds', {
	extend: 'Ext.data.Store',

	requires: [
		'HEART.model.Feed'
	],

	config: {
		autoLoad: true,
		model: 'HEART.model.Feed',
		storeId: 'Feeds',
		proxy: {
			type: 'localstorage',
			id: 'feeds'
		}
	}
});