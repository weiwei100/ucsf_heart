/*
 * File: app/view/MainTabs.js
 * Date: Fri Jul 19 2013 17:42:16 GMT+0800 (CST)
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

Ext.define('HEART.view.MainTabs', {
	extend: 'Ext.tab.Panel',
	alias: 'widget.mainview',

	config: {
		id: 'mainTabs',
		ui: 'light',
		hideAnimation: {
			type: 'fadeOut',
			duration: 256
		},
		showAnimation: {
			type: 'fadeIn',
			duration: 1024
		},
		layout: {
			animation: 'slide',
			type: 'card'
		},
		items: [
			{
				xtype: 'formpanel',
				title: 'Home',
				iconCls: 'home',
				cls: 'homePanel',
				id: 'homePanel',
				layout: {
					type: 'vbox'
				},
				scrollable: 'vertical',
				items: [
					{
						xtype: 'label',
						html: '<center><img src="heart-icon.png" height=111></center>',
						itemId: 'image'
					},
					{
						xtype: 'container',
						itemId: 'header',
						margin: 22,
						layout: {
							align: 'center',
							pack: 'center',
							type: 'hbox'
						},
						items: [
							{
								xtype: 'label',
								html: '<b>Welcome,</b>',
								itemId: 'welcome',
								listeners: [
									{
										fn: function(component, eOpts) {
											component.element.on({
												tap : function(e, t){

													content='<p>“HEART stands for health enhancement, emotions, and resiliency training.” In addition to the workshops, we developed the HEART app to help you bring mindfulness into your day.</p>';

													content+='<p>HEART helps you to develop your own present moment awareness, to find greater calm and stability in the midst of your life’s changing conditions. The HEART app is here to help you work with various aspects of mindfulness—increasing awareness of your own body and mind states, and developing the capacity to “be with” whatever is happening in a more relaxed and balanced way.</p>';

													content+='<p>You can decide how you want to use the HEART app – using it in whatever way you find most supportive. More use of HEART should lead to greater stress resiliency.”</p>';

													Ext.create('Ext.Panel', {
														hideOnMaskTap: true,
														autoDestroy: true,
														scrollable: 'vertical',
														html: content,
														modal: true,
														padding: 10,
														height: '50%',
														width: '95%',
														left: 0,
														top: 0,
														cls: 'popup'
													}).showBy(component);

												}
											});
										},
										event: 'initialize'
									}
								]
							},
							{
								xtype: 'label',
								html: '<b>[NAME] to H.E.A.R.T.</b>',
								itemId: 'sometext',
								padding: 8
							}
						]
					},
					{
						xtype: 'label',
						html: '<center>Meditation</center>',
						itemId: 'meditation',
						margin: 22,
						listeners: [
							{
								fn: function(component, eOpts) {
									component.element.on({
										tap : function(e, t){
											component.parent.parent.setActiveItem(2);
										}
									});
								},
								event: 'initialize'
							}
						]
					},
					{
						xtype: 'label',
						html: '<center><b>Intention:</b>&nbsp;&nbsp;[TEXT]</center>',
						itemId: 'intention'
					}
				]
			},
			{
				xtype: 'navigationview',
				title: 'I\'m stressed!',
				iconCls: 'user',
				id: 'stressed'
			},
			{
				xtype: 'navigationview',
				title: 'Exercises',
				iconCls: 'organize',
				cls: 'exercise',
				id: 'exercises',
				items: [
					{
						xtype: 'list',
						id: 'exerciseList',
						hideOnMaskTap: true,
						allowDeselect: true,
						disableSelection: false,
						emptyText: 'Nothing',
						itemTpl: [
							'<div>{title}</div>'
						],
						pressedDelay: 64,
						store: 'EMXs',
						grouped: true
					}
				]
			},
			{
				xtype: 'navigationview',
				title: 'Settings',
				badgeText: '',
				iconCls: 'settings',
				hidden: false,
				id: 'settingsNav',
				items: [
					{
						xtype: 'formpanel',
						cls: 'setting',
						itemId: 'settings',
						items: [
							{
								xtype: 'textfield',
								itemId: 'name',
								label: 'First name',
								labelWidth: '40%',
								labelWrap: true,
								name: 'name',
								autoCapitalize: true,
								maxLength: 10
							},
							{
								xtype: 'textfield',
								itemId: 'pid',
								label: 'Participant Id',
								labelWidth: '40%',
								labelWrap: true,
								name: 'pid'
							},
							{
								xtype: 'label',
								html: 'Please keep the app silent between:',
								cls: 'x-label-desc',
								itemId: 'silent'
							},
							{
								xtype: 'selectfield',
								itemId: 'awake',
								label: 'Awake Time',
								labelWidth: '40%',
								labelWrap: true,
								name: 'awake',
								readOnly: false
							},
							{
								xtype: 'selectfield',
								itemId: 'sleep',
								label: 'Sleep Time',
								labelWidth: '40%',
								labelWrap: true,
								name: 'sleep',
								readOnly: false
							},
							{
								xtype: 'label',
								html: 'Please remind me to fill out my Daily Log in the evening at:',
								itemId: 'remind',
								cls: 'x-label-desc'
							},
							{
								xtype: 'selectfield',
								itemId: 'daily',
								label: 'Daily Log Time',
								labelWidth: '40%',
								labelWrap: true,
								name: 'daily'
							},
							{
								xtype: 'button',
								itemId: 'save',
								text: 'Save'
							},
							{
								xtype: 'container',
								itemId: 'buttons',
								items: [
									{
										xtype: 'button',
										itemId: 'ahead',
										text: 'Week Ahead'
									},
									{
										xtype: 'button',
										itemId: 'notification',
										text: 'Notification Frequency'
									}
								]
							}
						]
					}
				]
			}
		],
		tabBar: {
			docked: 'bottom',
			ui: 'light',
			layout: {
				align: 'center',
				type: 'hbox'
			}
		},
		listeners: [
			{
				fn: 'onHomePanelActivate',
				event: 'activate',
				delegate: '#homePanel'
			},
			{
				fn: 'onSaveTap',
				event: 'tap',
				delegate: '#save'
			},
			{
				fn: 'onIntentionSetTap',
				event: 'tap',
				delegate: '#ahead'
			},
			{
				fn: 'onNotificationTap',
				event: 'tap',
				delegate: '#notification'
			}
		]
	},

	onHomePanelActivate: function(container, newActiveItem, oldActiveItem, eOpts) {
		user = HEART.getItem('local', 'user');

		if(!user){ return; }

		user = JSON.parse(user);

		if(user.intention){
			container.child('#intention').show();
		}else{
			container.child('#intention').hide();
		}

		content = '"'+user.name+'"'+'&nbsp;to&nbsp;'+'H.E.A.R.T.';
		container.child('#header').child('#sometext').setHtml(content);

		content=user.intention||'nothing'; 

		if(content.length>10){
			content=content.substring(0,10);
			content+='...';
		}

		text = '<center><b>Intention:</b>&nbsp;&nbsp;'+content+'</center>';

		container.child('#intention').setHtml(text);

		container.child('#intention').element.on({
			tap : function(e, t){

				callback = function(){
					content = {};
					content.type = 'popup';
					content.action = 'show-intention';

					HEART.toSensor(content);
				};

				Ext.Msg.alert('Intention', user.intention, callback);

			}
		});
	},

	onSaveTap: function(button, e, eOpts) {
		user = HEART.getItem('local', 'user');
		values = button.parent.getValues();

		var empty;

		for(field in values){
			if(values[field]=='')
			{ empty=true; break; }
		}

		message = "You must fill out all information before continuing";

		if(empty){
			Ext.Msg.alert('Error', message, Ext.emptyFn);
			return;
		}

		if(user!=null){
			user = JSON.parse(user);
			value = user.priority||2;	
			values.priority = value;

			values.intention=user.intention;
			values.habit=user.habit;
			values.time=user.time;
		}

		user = JSON.stringify(values);

		HEART.setItem('local', 'user', user);

		button.parent.child('#buttons').show();

		succ = function(response) {
			console.log(response);
		};

		fail = function(response) {
			console.log(response);
		};

		HEART.toUser( values, succ, fail );

		this.getTabBar().show();
		this.setActiveItem(0);
	},

	onIntentionSetTap: function(button, e, eOpts) {
		nav = button.parent.parent.parent;

		form = Ext.create('HEART.view.EMIWkAheadSet');
		form.emxType = 'EMIWkAheadSet';
		form.goola = 'settings';

		nav.push(form);

	},

	onNotificationTap: function(button, e, eOpts) {
		nav = button.parent.parent.parent;

		form = Ext.create('HEART.view.EMIPushSlider');
		form.emxType = 'EMIPushSlidert';
		form.goola = 'settings';

		nav.push(form);
	},

	initialize: function() {
		this.callParent();

		nav = this.child('#settingsNav');
		settings = nav.child('#settings');
		buttons = settings.child('#buttons');

		awakeOptions = [];

		for( i=5; i<12; i++ ){	
			option = { text: i +': 00', value: i };	
			awakeOptions.push(option);
			option = { text: i +': 30', value: i+0.5 };
			awakeOptions.push(option);
		}

		settings.child('#awake').setOptions(awakeOptions);

		sleepOptions = [];

		for( i=18; i<24; i++ ){	
			option = { text: i +': 00', value: i };	
			sleepOptions.push(option);
			option = { text: i +': 30', value: i+0.5 };
			sleepOptions.push(option);
		}

		settings.child('#sleep').setOptions(sleepOptions);

		dailyOptions = [];

		for( i=17; i<24; i++ ){
			option = { text: i+": 00", value: i };
			dailyOptions.push(option);
			option = { text: i+": 30", value: i+0.5 };
			dailyOptions.push(option);
		}

		settings.child('#daily').setOptions(dailyOptions);

		user = HEART.getItem('local','user');

		if(user){
			user = JSON.parse(user);
			settings.setValues(user);
		}else{
			this.setActiveItem(nav);
			this.getTabBar().hide();
			buttons.hide();
		}
	}

});