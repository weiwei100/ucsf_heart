Ext.define('HEART.view.EMIAudio7', {
	extend: 'Ext.form.Panel',

	config: {
		cls: 'EMIAudio',
		scrollable: 'vertical',
		items: [
			{
				xtype: 'fieldset',
				goola: 'audio',
				items: [
					{
						xtype: 'sliderfield',
						itemId: 'pre-slider',
						label: 'How stressed do you feel now? <br/><br/><div><span style="float:right">A lot</span><span>Not at all</span></div>',
						labelAlign: 'top',
						labelWrap: true,
						name: 'pre-slider',
						value: [
							50
						]
					},
					{
						xtype: 'fieldset',
						itemId: 'fsAudio',
						title: 'Body Scan',
						items: [
							{
								xtype: 'label',
								html: '<p>Enjoy this meditation.</p><p>Tip: Use headphones and stand or sit down.</p><p>Duration: 28:40 min</p>'
							},
							{
								xtype: 'button',
								itemId: 'audioButton',
								text: 'Play'
							}
						]
					},
					{
						xtype: 'sliderfield',
						itemId: 'post-slider',
						label: 'How stressed do you feel now? <br/><br/><div><span style="float:right">A lot</span><span>Not at all</span></div>',
						labelAlign: 'top',
						labelWrap: true,
						name: 'post-slider',
						value: [
							50
						]
					},
					{
						xtype: 'button',
						action: 'exercise',
						text: 'Done'
					}
				]
			}
		]
	},

	initialize: function() {
		this.callParent();
		HEART.setAudio('WBodyScan.mp3', HEART.audioCallback);
	}

});