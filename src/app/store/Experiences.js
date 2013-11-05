Ext.define('HEART.store.Experiences', {
	extend: 'Ext.data.Store',

	requires: [
		'HEART.model.Experience'
	],

	config: {
		autoLoad: true,
		autoSync: true,
		model: 'HEART.model.Experience',
		storeId: 'Experiences',
		proxy: {
			type: 'localstorage',
			id: 'experiences'
		}
	}
});