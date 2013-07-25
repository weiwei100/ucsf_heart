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
						itemId: 'experience',
						label: 'What is your experience in this moment?<br/><br/><div><span style="float:right">overwhelmed</span><span>balanced</span></div>',
						labelAlign: 'top',
						labelWrap: true,
						name: 'experience',
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
		experience=button.parent.child('#experience').getValue();

		user = HEART.getItem('local', 'user');
		user = JSON.parse(user);

		user.experience=experience;

		user = JSON.stringify(user);
		HEART.setItem('local', 'user', user);

		if(this.goola=='followup'){return;}

		if(experience>50){

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

				}, 1000*60*15);

				setTimeout(function(){

					user = HEART.getItem('local', 'user');
					user = JSON.parse(user);

					if(user.experience>50){

						form = Ext.create('HEART.view.'+emx);
						form.emxType = emx;
						form.goola = 'followup';

						Ext.Viewport.getActiveItem().setActiveItem(2);
						Ext.Viewport.getActiveItem().getActiveItem().push(form);
					}


				}, 1000*60*30);

			}	

		}


		mylog = JSON.parse(HEART.getItem('local', 'mylog'))||{};

		dead = new Date(Date.now()-Date.now()%(1000*60*60*24*7)+(1000*60*60*24*10));

		if(mylog.expire){
			if(Date.now()>mylog.expire){
				mylog = {};
				mylog.expire = dead;
			}

		}else{
			mylog.expire = dead
		}

		balance = mylog.balance||{ average: experience, count: 0 };

		balance.average-=0;
		balance.count-=0;
		experience-=0;

		balance.average=(balance.average*balance.count+experience)/(balance.count+1);

		balance.count+=1;

		mylog.balance=balance;

		mylog = JSON.stringify(mylog);
		HEART.setItem('local', 'mylog', mylog);
	}

});