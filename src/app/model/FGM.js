
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
				name: 'rate',
				defaultValue: 0
			},
			{
				name: 'local'
			},
			{
				name: 'remote'
			},
			{
				name: 'id',
				allowNull: false
			}
		]
	}
});