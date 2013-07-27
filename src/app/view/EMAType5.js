Ext.define('HEART.view.EMAType5', {
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
						itemId: 'feeling',
						label: 'How are you feeling in this moment?<br/><br/><div><span style="float:right">overwhelmed</span><span>balanced</span></div>',
						labelAlign: 'top',
						labelWrap: true,
						name: 'feeling',
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
		feeling=button.parent.child('#feeling').getValue();

		user = HEART.getItem('local', 'user');
		user = JSON.parse(user);

		user.feeling=feeling;

		user = JSON.stringify(user);
		HEART.setItem('local', 'user', user);

		mylog=HEART.mylog();

		balance=mylog.balance||{average:feeling,count:0};

		balance.average-=0;balance.count-=0;feeling-=0;
		balance.average=(balance.average*balance.count+feeling)/(balance.count+1);
		balance.count+=1;mylog.balance=balance;

		mylog = JSON.stringify(mylog);
		HEART.setItem('local', 'mylog', mylog);

		if(this.goola=='followup'){return;}

		if(feeling>50){

			HEART.stressed('followup');

			if(Math.random()<1/3){

				emx = this.emxType;

				setTimeout(function(){

					HEART.follow(emx, 'followup');

				}, 1000*60*15);

				setTimeout(function(){

					user = HEART.getItem('local', 'user');
					user = JSON.parse(user);

					if(user.feeling>50){

						HEART.follow(emx, 'followup');

					}

				}, 1000*60*30);

			}	

		}

	}

});