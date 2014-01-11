Ext.define('HEART.view.QuestionSet1', {
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
						itemId: 'stressed',
						label: 'How stressed do you feel right now?<br/><br/><div><span style="float:right">Extremely</span><span>Not at all</span></div>',
						labelAlign: 'top',
						labelWrap: true,
						name: 'stressed',
						value: [
							50
						]
					},
					{
						xtype: 'sliderfield',
						itemId: 'comfortable',
						label: 'How physically comfortable do you feel right now?<br/><br/><div><span style="float:right">Extremely</span><span>Not at all</span></div>',
						labelAlign: 'top',
						labelWrap: true,
						name: 'comfortable',
						value: [
							50
						]
					},
					{
						xtype: 'sliderfield',
						itemId: 'racing',
						label: 'Do you have racing thoughts right now?<br/><br/><div><span style="float:right">Extremely</span><span>Not at all</span></div>',
						labelAlign: 'top',
						labelWrap: true,
						name: 'racing',
						value: [
							50
						]
					},
					{
						xtype: 'sliderfield',
						itemId: 'relating',
						label: 'How are you relating to your experience right now?<br/><br/><div><span style="float:right">Able to be with it</span><span>Pushing it away</span></div>',
						labelAlign: 'top',
						labelWrap: true,
						name: 'relating',
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