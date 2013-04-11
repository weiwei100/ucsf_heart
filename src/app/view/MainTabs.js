/*
 * File: app/view/MainTabs.js
 * Date: Mon Apr 08 2013 16:32:08 GMT+0800 (CST)
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
		items: [
			{
				xtype: 'formpanel',
				title: 'Home',
				iconCls: 'home',
				id: 'homepanel',
				items: [
					{
						xtype: 'label',
						html: 'My intention for this week is:',
						itemId: 'homeTitle'
					},
					{
						xtype: 'button',
						itemId: 'editIntention',
						text: 'Here'
					},
					{
						xtype: 'label',
						html: 'Stop and notice your body then your emotions. How much stress are you aware of right now?',
						itemId: 'homeHow',
						styleHtmlContent: true
					},
					{
						xtype: 'sliderfield',
						itemId: 'homeSlider',
						labelAlign: 'bottom',
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
				id: 'stressed',
				itemId: 'stressedView'
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
						itemTpl: [
							'<div>{title}</div>'
						],
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
						required: true,
						autoCapitalize: true,
						maxLength: 15
					},
					{
						xtype: 'textfield',
						itemId: 'childName',
						label: 'Child\'s name',
						labelWidth: '50%',
						name: 'child_name',
						required: true,
						autoCapitalize: true,
						maxLength: 15
					},
					{
						xtype: 'textfield',
						itemId: 'wakeTime',
						label: 'Wake-up time',
						labelWidth: '50%',
						name: 'wake_time',
						required: true,
						autoCorrect: false
					},
					{
						xtype: 'textfield',
						itemId: 'sleepTime',
						label: 'Sleep time',
						labelWidth: '50%',
						name: 'sleep_time',
						required: true
					},
					{
						xtype: 'selectfield',
						centered: false,
						itemId: 'gender',
						label: 'Gender',
						name: 'gender',
						required: true,
						placeHolder: 'tap here',
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
						xtype: 'spinnerfield',
						itemId: 'weight',
						label: 'Weight',
						name: 'weight',
						required: true,
						stepValue: 5,
						groupButtons: false,
						increment: 64
					},
					{
						xtype: 'spinnerfield',
						itemId: 'height',
						label: 'Height',
						name: 'height',
						required: true,
						stepValue: 5,
						groupButtons: false,
						increment: 64
					},
					{
						xtype: 'button',
						itemId: 'setNotifications',
						text: 'Set More or Fewer Notifications'
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

		var uuid = Ext.device.Device.uuid;
		var user = Ext.getStore("Users").last();
		var settings = this.child('#settings');

		if(user==null){
			this.getTabBar().hide();
			this.setActiveItem(settings);
		}else{
			settings.setRecord(user);
		}
	}

});