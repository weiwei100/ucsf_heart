/*
 * File: app/view/MainTabs.js
 * Date: Sat Apr 27 2013 20:57:18 GMT+0800 (CST)
 *
 * This file was generated by Sencha Architect version 2.2.0.
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
				id: 'homePanel',
				items: [
					{
						xtype: 'image',
						height: 86,
						itemId: 'homeIcon',
						src: 'heart-icon'
					},
					{
						xtype: 'label',
						html: '<center>My intention for this week is:</center>',
						itemId: 'homeTitle'
					},
					{
						xtype: 'button',
						action: 'intention',
						baseCls: 'x-html',
						itemId: 'editIntention',
						iconCls: 'compose',
						iconMask: true,
						text: '<b>press here to set</b>'
					},
					{
						xtype: 'sliderfield',
						itemId: 'homeSlider',
						label: 'Stop and notice your body then your emotions. What are you aware of right now? <br/> (left=overwhelmed, right=balance)',
						labelAlign: 'top',
						labelWrap: true,
						name: 'stress',
						value: [
							50
						]
					},
					{
						xtype: 'button',
						disabled: true,
						itemId: 'homeDone',
						text: 'Done'
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
				xtype: 'formpanel',
				title: 'Settings',
				iconCls: 'settings',
				id: 'settings',
				items: [
					{
						xtype: 'textfield',
						itemId: 'firstname',
						label: 'First name',
						labelWidth: '50%',
						name: 'name',
						autoCapitalize: true,
						maxLength: 15
					},
					{
						xtype: 'textfield',
						itemId: 'childName',
						label: 'Child\'s name',
						labelWidth: '50%',
						name: 'child_name',
						autoCapitalize: true,
						maxLength: 15
					},
					{
						xtype: 'selectfield',
						itemId: 'wakeTime',
						label: 'Wake time',
						labelWidth: '50%',
						name: 'wake_time',
						readOnly: false
					},
					{
						xtype: 'selectfield',
						itemId: 'sleepTime',
						label: 'Sleep time',
						labelWidth: '50%',
						name: 'sleep_time',
						readOnly: false
					},
					{
						xtype: 'selectfield',
						centered: false,
						itemId: 'gender',
						label: 'Gender',
						labelWidth: '50%',
						name: 'gender',
						options: [
							{
								text: 'Male',
								value: 'm'
							},
							{
								text: 'Female',
								value: 'f'
							}
						]
					},
					{
						xtype: 'textfield',
						goola: 'number',
						itemId: 'weight',
						label: 'Weight',
						labelWidth: '50%',
						name: 'weight',
						maxLength: 15
					},
					{
						xtype: 'textfield',
						goola: 'number',
						itemId: 'height',
						label: 'Height',
						labelWidth: '50%',
						name: 'height',
						maxLength: 15
					},
					{
						xtype: 'button',
						itemId: 'settingsDone',
						text: 'Set Notification Frequency'
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
				fn: 'onHomeSliderChange',
				event: 'change',
				delegate: '#homeSlider'
			},
			{
				fn: 'onHomeDoneTap',
				event: 'tap',
				delegate: '#homeDone'
			},
			{
				fn: 'onSettingsDoneTap',
				event: 'tap',
				delegate: '#settingsDone'
			}
		]
	},

	onHomeSliderChange: function(me, Slider, thumb, newValue, oldValue, eOpts) {
		value = me.getValue();

		HEART.setItem('local', 'home', value);

		content = me.parent.getValues();

		content.type = 'homePanel';
		content.uuid = HEART.uuid;

		var succ = function(response) {
			console.log(response);
		};

		var fail = function(response) {
			feeds = Ext.getStore("Feeds");
			content.timestamp = Date.now();
			feeds.add(data);
			feeds.sort("timestamp", 'DESC');		
			feeds.sync();
		};

		HEART.toSensor(content, succ, fail);

		me.parent.child('#homeDone').enable();

		setTimeout(function(){me.setValue(value/2)},60000);
	},

	onHomeDoneTap: function(button, e, eOpts) {
		value = button.parent.child('#homeSlider').getValue();

		message="<div align='center'>" + value + "</div>";

		Ext.Msg.alert(':)', message, Ext.emptyFn);

		button.disable();
	},

	onSettingsDoneTap: function(button, e, eOpts) {
		user = HEART.getItem('local', 'user');

		values = button.parent.getValues();

		var empty;

		for(field in values){
			if(values[field]=='')
			{ empty=true; break; }
		}

		if(empty){return;}

		values.uuid = HEART.uuid;

		if(user!=null){
			user = JSON.parse(user);
			value = user.priority||2;	
			values.priority = value;
		}

		user = JSON.stringify(values);

		HEART.setItem('local', 'user', user);

		succ = function(response) {
			console.log(response);
		};

		fail = function(response) {
			console.log(response);
		};

		content = {};

		content.uid=HEART.uuid;

		content.wakeup=values.wake_time;
		content.sleep=values.sleep_time;

		HEART.toUser( content, succ, fail );
		///////////////////////////////////////
		user = HEART.getItem('local', 'pnapi');
		user = JSON.parse(user)||{};

		user.uid = HEART.uuid;
		user.wakeup = values.wake_time;
		user.sleep = values.sleep_time;

		user = JSON.stringify(user);
		HEART.setItem('local', 'pnapi', user);
		///////////////////////////////////////

		this.getTabBar().show();
		form = Ext.create('HEART.view.EMIPushSlider');
		form.emxType = 'EMIPushSlider';

		Ext.Viewport.setActiveItem(form);
	},

	initialize: function() {
		this.callParent();

		user = HEART.getItem('local','user');
		settings = this.child('#settings');

		if( user==null ){
			this.getTabBar().hide();
			this.setActiveItem(settings);
		}else{
			user = JSON.parse(user);
			settings.setValues(user);
			hVar = HEART.getItem('local','home')||50;
			homePanel = this.child('#homePanel');
			slider=homePanel.child('#homeSlider');
			slider.setValue(hVar);
			value=HEART.getItem('local', 'intention');
			if(value!=null){
				homePanel.child('#editIntention').setText(value);
			}
		}

		wakeOptions = new Array();

		for( i=5; i<12; i++ ){	
			option = { text: i +': 00', value: i };	
			wakeOptions.push(option);
			option = { text: i +': 30', value: i+0.5 };
			wakeOptions.push(option);
		}

		settings.child('#wakeTime').setOptions(wakeOptions);

		sleepOptions = new Array();

		for( i=18; i<24; i++ ){	
			option = { text: i +': 00', value: i };	
			sleepOptions.push(option);
			option = { text: i +': 30', value: i+0.5 };
			sleepOptions.push(option);
		}

		settings.child('#sleepTime').setOptions(sleepOptions);

	}

});