Ext.define('HEART.view.EMAType8', {
	extend: 'Ext.form.Panel',

	config: {
		cls: 'EMAType',
		items: [
			{
				xtype: 'fieldset',
				items: [
					{
						cls: 'desc',
						xtype: 'label',
						cls: 'x-subtitle',
						html: 'Are you trying to push away feelings now?'
					},
					{
						xtype: 'container',
						itemId: 'header',
						margin: 22,
						layout: {
							align: 'stretch',
							pack: 'center',
							type: 'hbox'
						},
						items: [
							{
								xtype: 'button',
								itemId: 'yes',
								text: 'Yes',
								listeners: [
									{
										fn: function(button, e, eOpts){

											content = {};
											content.type = 'EMATYpe8';
											content.action='yes-tapped';
											HEART.toSensor(content);

											HEART.stressed('followup');
											HEART.must = true;
										},
										event: 'tap'
									}
								]
							},
							{
								xtype: 'button',
								itemId: 'no',
								text: 'No',
								listeners: [
									{
										fn: function(button, e, eOpts){

											content = {};
											content.type = 'EMATYpe8';
											content.action='no-tapped';
											HEART.toSensor(content);

											button.parent.parent.parent.parent.pop();
										},
										event: 'tap'
									}
								]
							}
						]
					}
				]
			}
		]
	}

});