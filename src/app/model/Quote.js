Ext.define('HEART.model.Quote', {
	extend: 'Ext.data.Model',

	config: {
		fields: [
			{
				name: 'text'
			},
			{
				name: 'auth'
			},
			{
				allowNull: false,
				name: 'id'
			}
		]
	}
});