Ext.define('HEART.view.EMAType7', {
	extend: 'Ext.form.Panel',

	config: {
		cls: 'EMAType',
		items: [
			{
				xtype: 'label',
				cls: 'desc',
				html: 'What emotions are you experiencing in this moment?',
				cls: 'x-subtitle'
			},
			{
				xtype: 'fieldset',
				goola: 'ema',
				items: [
					{
						xtype: 'sliderfield',
						label: 'How much stress are you experiencing in this moment? <br/><br/><div><span style="float:right"> a lot</span><span>none</span></div>',
						labelAlign: 'top',
						labelWrap: true,
						name: 'stress',
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
	}

});