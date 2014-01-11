Ext.define('HEART.view.QuestionSet2', {
	extend: 'Ext.form.Panel',

	config: {
		cls: 'EMAType',
		items: [
			{
				xtype: 'fieldset',
				goola: 'ema',
				itemId: 'fset',
				items: [
					{
						xtype: 'sliderfield',
						itemId: 'anxious',
						label: 'How anxious do you feel right now?<br/><br/><div><span style="float:right">Extremely</span><span>Not at all</span></div>',
						labelAlign: 'top',
						labelWrap: true,
						name: 'anxious',
						value: [
							50
						]
					},
					{
						xtype: 'sliderfield',
						itemId: 'restless',
						label: 'How restless in your body do you feel right now?<br/><br/><div><span style="float:right">Extremely</span><span>Not at all</span></div>',
						labelAlign: 'top',
						labelWrap: true,
						name: 'restless',
						value: [
							50
						]
					},
					{
						xtype: 'sliderfield',
						itemId: 'silence',
						label: 'How much are you aware of silence between thoughts?<br/><br/><div><span style="float:right">Extremely</span><span>Not at all</span></div>',
						labelAlign: 'top',
						labelWrap: true,
						name: 'silence',
						value: [
							50
						]
					},
					{
						xtype: 'sliderfield',
						itemId: 'wish',
						label: 'How much do you wish that what you are experiencing were different than what it is?<br/><br/><div><span style="float:right">Extremely</span><span>Not at all</span></div>',
						labelAlign: 'top',
						labelWrap: true,
						name: 'wish',
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