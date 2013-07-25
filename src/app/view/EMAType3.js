Ext.define('HEART.view.EMAType3', {
	extend: 'Ext.form.Panel',

	config: {
		cls: 'EMAType',
		items: [
			{
				xtype: 'label',
				cls: 'desc',
				html: 'What emotions are you experiencing in this moment?',
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
						itemId: 'anger',
						label: 'I am feeling anger:<br/><div><span style="float:right">a lot</span><span>none</span></div>',
						labelAlign: 'top',
						labelWrap: true,
						name: 'anger',
						value: [
							50
						]
					},
					{
						xtype: 'sliderfield',
						itemId: 'sandness',
						label: 'I am feeling sad:<br/><div><span style="float:right">a lot</span><span>none</span></div>',
						labelAlign: 'top',
						labelWrap: true,
						name: 'sadness',
						value: [
							50
						]
					},
					{
						xtype: 'sliderfield',
						itemId: 'joy',
						label: 'I am feeling joyful<br/><div><span style="float:right">a lot</span><span>none</span></div>',
						labelAlign: 'top',
						labelWrap: true,
						name: 'joy',
						value: [
							50
						]
					},
					{
						xtype: 'sliderfield',
						itemId: 'calm',
						label: 'I am feeling calm:<br/><div><span style="float:right">a lot</span><span>none</span></div>',
						labelAlign: 'top',
						labelWrap: true,
						name: 'calm',
						value: [
							50
						]
					},
					{
						xtype: 'sliderfield',
						itemId: 'fora',
						label: 'I am feeling fearful or anxious:<br/><div><span style="float:right">a lot</span><span>none</span></div>',
						labelAlign: 'top',
						labelWrap: true,
						name: 'fora',
						value: [
							50
						]
					},
					{
						xtype: 'sliderfield',
						itemId: 'grate',
						label: 'I am feeling grateful:<br/><div><span style="float:right">a lot</span><span>none</span></div>',
						labelAlign: 'top',
						labelWrap: true,
						name: 'grate',
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
		],
		listeners: [
			{
				fn: 'onDoneRelease',
				event: 'release',
				delegate: '#done'
			}
		]
	},

	onDoneRelease: function(button, e, eOpts) {
		anger=button.parent.child('#anger').getValue();
		fora=button.parent.child('#fora').getValue();

		user = HEART.getItem('local', 'user');
		user = JSON.parse(user);

		user.anger=anger;
		user.fora=fora;

		user = JSON.stringify(user);
		HEART.setItem('local', 'user', user);

		if(this.goola=='followup'){return;}

		if(anger>50||fora>50){

			EMX = ['EMITensionCheck', 'EMIGeneralMindfulness', 'EMIAudio4', 'EMIAudio7'];

			type = EMX[Math.floor(EMX.length*Math.random())]; 

			form = Ext.create('HEART.view.'+type);

			Ext.Viewport.getActiveItem().setActiveItem(2);
			Ext.Viewport.getActiveItem().getActiveItem().push(form);

			if(Math.random()<1/3){

				emx = this.emxType;

				setTimeout(function(){

					form = Ext.create('HEART.view.'+emx);
					form.emxType = emx;
					form.goola = 'followup';

					Ext.Viewport.getActiveItem().setActiveItem(2);
					Ext.Viewport.getActiveItem().getActiveItem().push(form);

				}, 1000*20*15);

				setTimeout(function(){

					user = HEART.getItem('local', 'user');
					user = JSON.parse(user);

					if(anger>50||fora>50){

						form = Ext.create('HEART.view.'+emx);
						form.emxType = emx;
						form.goola = 'followup';

						Ext.Viewport.getActiveItem().setActiveItem(2);
						Ext.Viewport.getActiveItem().getActiveItem().push(form);
					}


				}, 1000*60*30);

			}	

		}
	}

});