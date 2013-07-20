/*
 * File: app/view/EMAType1.js
 * Date: Thu Jul 18 2013 21:52:18 GMT+0800 (CST)
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.0.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('HEART.view.EMAType1', {
	extend: 'Ext.form.Panel',

	config: {
		cls: 'EMAType',
		items: [
			{
				xtype: 'label',
				html: 'What is happening right now?',
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

		if(this.goola=='followup'){return;}


		if(stress>50){

			if(this.goola=='stressed'){

				setTimeout(function(){

					form = Ext.create('HEART.view.EMAType6');
					form.emxType = 'EMAType6';
					form.goola = 'stressed';

					Ext.Viewport.getActiveItem().setActiveItem(2);
					Ext.Viewport.getActiveItem().getActiveItem().push(form);

				}, 1000*60*30);

			}else{

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

						if(user.stress>50){

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

		stressed = mylog.stressed||{high: stress, low: stress, average: stress, count: 0};

		if(stress>stressed.high){
			stressed.high=stress;
		}else if(stress<stressed.low){
			stressed.low=stress
		}

		stressed.average-=0;
		stressed.count-=0;
		stress-=0;

		stressed.average=(stressed.average*stressed.count+stress)/(stressed.count+1);

		stressed.count+=1;

		mylog.stressed=stressed;

		mylog = JSON.stringify(mylog);
		HEART.setItem('local', 'mylog', mylog);
	}

});