Ext.define('HEART.view.EMAType1', {
	extend: 'Ext.form.Panel',

	config: {
		cls: 'EMAType',
		items: [
			{
				xtype: 'label',
				html: 'What is happening right now?',
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
						itemId: 'stress',
						label: 'How much stress are you experiencing in this moment? <br/><br/><div><span style="float:right">a lot</span><span>none</span></div>',
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

	onDoneTap: function(button, e, eOpts) {
		stress=button.parent.child('#stress').getValue();

		user = HEART.getItem('local', 'user');
		user = JSON.parse(user);

		user.stress=stress;

		user = JSON.stringify(user);
		HEART.setItem('local', 'user', user);

		mylog=HEART.mylog();

		stressed=mylog.stressed||{high:stress,low:stress,average:stress,count:0};

		if(stress>stressed.high){stressed.high=stress;}
		else if(stress<stressed.low){stressed.low=stress;}

		stressed.average-=0;stressed.count-=0;stress-=0;
		stressed.average=(stressed.average*stressed.count+stress)/(stressed.count+1);
		stressed.count+=1;mylog.stressed=stressed;

		mylog = JSON.stringify(mylog);
		HEART.setItem('local', 'mylog', mylog);

		if(this.goola=='followup'){return;}

		if(stress>50){

			if(this.goola=='stressed'){

				setTimeout(function(){

					HEART.follow('EMAType6', 'stressed');
					
					content = {};
					content.from = 'EMAType1';
					content.type = 'EMAType6';
					content.action = 'followup';
					HEART.toSensor(content);

				}, 1000*60*30);

			}else{

				HEART.stressed('followup');

				if(Math.random()<1/3){

					emx = this.emxType;

					setTimeout(function(){

						HEART.follow(emx, 'followup');

					}, 1000*60*15);

					setTimeout(function(){

						user = HEART.getItem('local', 'user');
						user = JSON.parse(user);

						if(user.stress>50){

							HEART.follow(emx, 'followup');

						}

					}, 1000*60*30);

				}	

			}

		}

	}

});