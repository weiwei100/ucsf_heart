Ext.define('HEART.view.EMIAudio3', {
	extend: 'Ext.form.Panel',

	config: {
		cls: 'EMIAudioA',
		scrollable: 'vertical',
		items: [
			{
				xtype: 'fieldset',
				goola: 'audio',
				items: [
					{
						xtype: 'sliderfield',
						random_show: 'y',
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
						title: 'Mountain Meditation',
						items: [
							{
								xtype: 'label',
								html: '<p>Tip: Use headphones and stand or sit down.</p><p>Duration: 2:27</p>'							},
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
		HEART.setAudio('mountain_meditation.m4a', HEART.audioCallback);
	}

});