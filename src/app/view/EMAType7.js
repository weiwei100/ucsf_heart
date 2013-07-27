Ext.define('HEART.view.EMAType7', {
	extend: 'Ext.form.Panel',

	config: {
		cls: 'EMAType',
		items: [
			{
				xtype: 'label',
				cls: 'desc',
				html: 'What emotions are you experiencing in this moment?<br/><br/><div><span style="float:right"> a lot</span><span>none</span></div>',
				cls: 'x-subtitle'
			},
			{
				xtype: 'fieldset',
				goola: 'ema',
				items: [
					{
						xtype: 'sliderfield',
						label: 'I\'m feeling anger:',
						labelAlign: 'top',
						labelWrap: true,
						name: 'anger',
						value: [
							0
						]
					},
					{
						xtype: 'sliderfield',
						label: 'I\'m feeling sad:',
						labelAlign: 'top',
						labelWrap: true,
						name: 'sad',
						value: [
							0
						]
					},
					{
						xtype: 'sliderfield',
						label: 'I\'m feeling joyful:',
						labelAlign: 'top',
						labelWrap: true,
						name: 'joyful',
						value: [
							0
						]
					},
					{
						xtype: 'sliderfield',
						label: 'I\'m feeling calm:',
						labelAlign: 'top',
						labelWrap: true,
						name: 'calm',
						value: [
							0
						]
					},
					{
						xtype: 'sliderfield',
						label: 'I\'m feeling fearful or anxious:',
						labelAlign: 'top',
						labelWrap: true,
						name: 'fora',
						value: [
							0
						]
					},
					{
						xtype: 'sliderfield',
						label: 'I\'m feeling fearful or grateful:',
						labelAlign: 'top',
						labelWrap: true,
						name: 'grateful',
						value: [
							0
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
	}

});