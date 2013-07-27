Ext.define('HEART.view.EMAType4', {
	extend: 'Ext.form.Panel',

	config: {
		cls: 'EMAType',
		items: [
			{
				xtype: 'label',
				cls: 'desc',
				html: 'Is there an emotion present you are trying NOT to feel or are pushing away right now?',
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
						label: 'I am pushing away feeling hopeful:<br/><br/><div><span style="float:right">a lot</span><span>none</span></div>',
						labelAlign: 'top',
						labelWrap: true,
						name: 'hopeful',
						value: [
							0
						]
					},
					{
						xtype: 'sliderfield',
						label: 'I am pushing away feeling anger:<br/><br/><div><span style="float:right">a lot</span><span>none</span></div>',
						labelAlign: 'top',
						labelWrap: true,
						name: 'anger',
						value: [
							0
						]
					},
					{
						xtype: 'sliderfield',
						label: 'I am pushing away feeling sadness:<br/><br/><div><span style="float:right">a lot</span><span>none</span></div>',
						labelAlign: 'top',
						labelWrap: true,
						name: 'sandness',
						value: [
							0
						]
					},
					{
						xtype: 'sliderfield',
						label: 'I am pushing away feeling shame:<br/><br/><div><span style="float:right">a lot</span><span>none</span></div>',
						labelAlign: 'top',
						labelWrap: true,
						name: 'shame',
						value: [
							0
						]
					},
					{
						xtype: 'sliderfield',
						label: 'I am pushing away feeling fear:<br/><br/><div><span style="float:right">a lot</span><span>none</span></div>',
						labelAlign: 'top',
						labelWrap: true,
						name: 'fear',
						value: [
							0
						]
					},
					{
						xtype: 'sliderfield',
						label: 'I am pushing away feeling anxiety:<br/><br/><div><span style="float:right">a lot</span><span>none</span></div>',
						labelAlign: 'top',
						labelWrap: true,
						name: 'anxiety',
						value: [
							0
						]
					},
					{
						xtype: 'sliderfield',
						label: 'How much energy are you using to avoid these feelings (if any)?<br/><br/><div><span style="float:right">a lot</span><span>none</span></div>',
						labelAlign: 'top',
						labelWrap: true,
						name: 'much',
						value: [
							0
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
		],
		listeners: [
			{
				fn: 'onDoneTap',
					event: 'tap',
					delegate: '#done'
			}
		]
	},

	onDoneTap: function(button, e, eOpts){
		values = this.getValues();

		fear = values.fear;
		angry = values.angry;
		anxiety= values.anxiety;

		if(fear>49||angry>49||anxiety>49){
			setTimeout(function(){
				
				HEART.follow('EMAType8', 'followup');

			}, 1000*60*15);
		}
		
	}

});