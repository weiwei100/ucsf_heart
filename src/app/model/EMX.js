Ext.define('HEART.model.EMX', {
	extend: 'Ext.data.Model',

	config: {
		fields: [
			{
				allowNull: false,
				name: 'title',
				type: 'string'
			},
			{
				name: 'type',
				type: 'string'
			},
			{
				name: 'feed_title',
				type: 'string'
			},
			{
				name: 'category'
			}
		]
	}
});