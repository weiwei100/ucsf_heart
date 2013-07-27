Ext.define('HEART.model.Feed', {
	extend: 'Ext.data.Model',

	config: {
		fields: [
			{
				dateFormat: 'time',
				name: 'timestamp',
				type: 'int'
			},
			{
				name: 'type'
			},
			{
				name: 'data'
			},
			{
				name: 'user'
			},
			{
				allowNull: false,
				name: 'id'
			}
		]
	}
});