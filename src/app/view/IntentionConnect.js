Ext.define('HEART.view.IntentionConnect', {
	extend: 'Ext.form.Panel',

	config: {
		cls: 'intention',
		layout: {
			type: 'vbox'
		},
		scrollable: 'vertical',
		hideAnimation: {
			type: 'fadeOut',
			duration: 768
		},
		showAnimation: {
			type: 'fadeIn',
			duration: 768
		},
		items: [
			{
				xtype: 'fieldset',
				itemId: 'fset',
				layout: {
					type: 'vbox'
				},
				items: [
					{
						xtype: 'label',
						hidden: true,
						html: 'Try to feel more compassion for my self.',
						itemId: 'guide',
						showAnimation: {
							type: 'fadeIn',
							duration: 2048
						}
					},
					{
						xtype: 'label',
						hidden: true,
						html: 'Please visualize what it would feel like to live from your intention today.',
						itemId: 'describe',
						showAnimation: {
							type: 'fadeIn',
							duration: 2048
						},
						styleHtmlContent: true
					},
					{
						xtype: 'button',
						hidden: true,
						itemId: 'done',
						showAnimation: {
							type: 'fadeIn',
							duration: 2048
						},
						text: 'Done'
					}
				],
				listeners: [
					{
						fn: function(component, eOpts) {
							component.child('#guide').show();

							setTimeout(function(){

								component.child('#describe').show();


								setTimeout(function(){

									component.child('#done').show();


								}, 2048);


							}, 2048);
						},
						event: 'initialize'
					}
				]
			}
		]
	}

});