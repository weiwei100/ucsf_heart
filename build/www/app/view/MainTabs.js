/*
 * File: app/view/MainTabs.js
 * Date: Sat Apr 20 2013 19:15:00 GMT+0800 (CST)
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
						height: 128,
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
								value: 'm'
							},
							{
								text: 'Other',
								value: 'o'
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
						itemId: 'done',
						text: 'Set Notification Frequency'
					}
				]
			}
		],
		tabBar: {
			docked: 'bottom',
			ui: 'light'
		}
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
		}

		var options = new Array();

		for( i=0; i<24; i++ ){	

			option = { text: i +': 00', value: i };	
			options.push(option);
			option = { text: i +': 30', value: i+0.5 };
			options.push(option);
		}

		settings.child('#wakeTime').setOptions(options);
		settings.child('#sleepTime').setOptions(options);
	}

});