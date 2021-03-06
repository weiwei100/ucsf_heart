Ext.define('HEART.view.EMIAudio5', {
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
						title: 'HEART Meditation',
						items: [
							{
								xtype: 'label',
								html: '<p>Tip: Use headphones and sit or lay down.</p><p>Duration: 2:51 min</p>'
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
		HEART.setAudio('heart_meditation.m4a', HEART.audioCallback);

		var form = this;

		var sss = function(){

			HEART.questions();

			form.un({
				show: sss
			});
		};

		form.on({

			show: sss
		});
	},

	destroy: function() {

		HEART.getAudio().release();

		HEART.questions();
	}

});