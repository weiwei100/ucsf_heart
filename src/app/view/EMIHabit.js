Ext.define('HEART.view.EMIHabit', {
	extend: 'Ext.form.Panel',

	config: {
		cls: 'habit',
		layout: {
			type: 'vbox'
		},
		items: [
			{
				xtype: 'label',
				html: '<br/><br/><br/>',
				itemId: 'empty'
			},
			{
				xtype: 'container',
				flex: 3,
				itemId: 'content',
				items: [
					{
						xtype: 'label',
						html: 'Mindfulness Habit: Eat',
						itemId: 'habit',
						listeners: [
							{
								fn: function(component, eOpts) {
									user = HEART.getItem('local', 'user');
									user = JSON.parse(user);

									content='<center><b>Mindfulness Habit:</b>&nbsp;&nbsp;<b>'+user.habit+'</b><center>';

									component.setHtml(content);
								},
								event: 'initialize'
							}
						]
					}
				]
			},
			{
				xtype: 'container',
				flex: 1,
				itemId: 'handler',
				items: [
					{
						xtype: 'button',
						itemId: 'done',
						text: 'Done'
					}
				]
			}
		],
		listeners: [
			{
				fn: 'onOKTap',
				event: 'tap',
				delegate: '#done'
			}
		]
	},

	onOKTap: function(button, e, eOpts) {
		this.parent.pop();
	}

});