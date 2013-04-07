
Ext.define('HEART.store.Follow', {
	extend: 'Ext.data.Store',

	requires: [
		'HEART.model.FGM'
	],

	config: {
		autoLoad: true,
		autoSync: false,
		model: 'HEART.model.FGM',
		storeId: 'Follow',
		proxy: {
			type: 'localstorage',
			id: 'follow'
		}
	}
});