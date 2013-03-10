
Ext.define('HEART.store.FGMs', {
	extend: 'Ext.data.Store',

	requires: [
		'HEART.model.FGM'
	],

	config: {
		autoLoad: true,
		autoSync: false,
		model: 'HEART.model.FGM',
		storeId: 'FGMs',
		proxy: {
			type: 'localstorage',
			id: 'FGMs'
		}
	}
});