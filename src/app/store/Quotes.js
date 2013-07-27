Ext.define('HEART.store.Quotes', {
	extend: 'Ext.data.Store',

	requires: [
		'HEART.model.Quote'
	],

	config: {
		autoLoad: true,
		autoSync: true,
		model: 'HEART.model.Quote',
		storeId: 'Quotes',
		proxy: {
			type: 'localstorage',
			id: 'quotes'
		}
	}
});