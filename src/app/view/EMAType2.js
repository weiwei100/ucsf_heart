Ext.define('HEART.view.EMAType2', {
	extend: 'Ext.form.Panel',

	config: {
		cls: 'EMAType',
		items: [
			{
				xtype: 'label',
				cls: 'desc',
				html: 'What is happening in your body right now?',
				cls: 'x-subtitle',
				itemId: 'question'
			},
			{
				xtype: 'fieldset',
				goola: 'ema',
				itemId: 'fset',
				items: [
					{
						xtype: 'sliderfield',
						itemId: 'pleasantness',
						label: 'The amount of pleasant feeling I am experiencing is: <br/><br/><div><span style="float:right">a lot</span><span>none</span></div>',
						labelAlign: 'top',
						labelWrap: true,
						name: 'pleasantness',
						value: [
							50
						]
					},
					{
						xtype: 'sliderfield',
						itemId: 'unpleasantness',
						label: 'The amount of unpleasant feeling I am experiencing is:<br/><br/><div><span style="float:right">a lot</span><span>none</span></div>',
						labelAlign: 'top',
						labelWrap: true,
						name: 'unpleasantness',
						value: [
							50
						]
					},
					{
						xtype: 'sliderfield',
						itemId: 'energy',
						label: 'My energy level in this moment is:<br/><br/><div><span style="float:right">a lot</span><span>none</span></div>',
						labelAlign: 'top',
						labelWrap: true,
						name: 'energy',
						value: [
							50
						]
					},
					{
						xtype: 'button',
						action: 'exercise',
						itemId: 'done',
						text: 'Done'
					}
				]
			}
		]
	}

});