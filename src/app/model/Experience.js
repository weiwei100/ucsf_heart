Ext.define('HEART.model.Experience', {
	extend: 'Ext.data.Model',

	config: {
		fields: [
			{
				dateFormat: 'time',
				name: 'timestamp',
				type: 'int'
			},
			{
				name: 'pleasant'
			},
			{
				name: 'unpleasant'
			},
			{
				allowNull: false,
				name: 'id'
			}
		]
	}
});