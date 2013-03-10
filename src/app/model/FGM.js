
Ext.define('HEART.model.FGM', {
	extend: 'Ext.data.Model',

	config: {
		fields: [
			{
				name: 'timestamp',
				dateFormat: 'time',
				type: 'date'
			},
			{
				name: 'local'
			},
			{
				name: 'remote'
			},
			{
				name: 'rate'
			},
			{
				name: 'id',
				allowNull: false
			}
		]
	}
});