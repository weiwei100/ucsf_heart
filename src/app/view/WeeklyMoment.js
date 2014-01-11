Ext.define('HEART.view.WeeklyMoment', {
	extend: 'Ext.form.Panel',

	config: {
		cls: 'dailyLog',
		items: [
			{
				title: 'Moment this week',
				xtype: 'fieldset',
				itemId: 'fset',

				items: [
					{
						xtype: 'textareafield',
						itemId: 'moment',
						clearIcon: false,
						label: 'Can you think of one experience where you felt particularly mindful or mindless?',
						labelAlign: 'top',
						labelWrap: true,
						name: 'moment',
						maxLength: 255
					},
					{
						action: 'exercise',
						xtype: 'button',
						itemId: 'done',
						text: 'Done'
					}
				]
			}
		]
	}
});