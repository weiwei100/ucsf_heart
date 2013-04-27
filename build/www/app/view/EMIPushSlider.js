/*
 * File: app/view/EMIPushSlider.js
 * Date: Sat Apr 27 2013 21:05:21 GMT+0800 (CST)
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

Ext.define('HEART.view.EMIPushSlider', {
	extend: 'Ext.form.Panel',

	config: {
		cls: 'button',
		hideAnimation: {
			type: 'fadeOut',
			duration: 768
		},
		showAnimation: {
			type: 'fadeIn',
			duration: 768
		},
		items: [
			{
				xtype: 'label',
				html: '<center>Too many or too few push notifications?<center>',
				itemId: 'pushTitle',
				ui: ''
			},
			{
				xtype: 'label',
				border: '',
				centered: false,
				hidden: false,
				html: 'Reflect on if you are getting too many or too few push notifications. <br/> If too many, slide it left. <br/> If too few, slide to the right.',
				itemId: 'pushDesc',
				margin: '',
				styleHtmlContent: true
			},
			{
				xtype: 'sliderfield',
				itemId: 'pushSlider',
				label: '',
				value: [
					50
				],
				increment: 25
			},
			{
				xtype: 'label',
				html: '<center>Some pushes<center>',
				itemId: 'pushLevel'
			},
			{
				xtype: 'button',
				cls: 'button',
				itemId: 'pushDone',
				text: 'Done'
			}
		],
		listeners: [
			{
				fn: 'onPushSliderChange',
				event: 'change',
				delegate: '#pushSlider'
			},
			{
				fn: 'onPushSettingSave',
				event: 'tap',
				delegate: '#pushDone'
			}
		]
	},

	onPushSliderChange: function(me, Slider, thumb, newValue, oldValue, eOpts) {
		var label = me.parent.child('#pushLevel');

		switch(newValue){
			case 00: label.setHtml('<center>Only show urgent pushes.</center>'); 
			break;
			case 25: label.setHtml('<center>Very few pushes.</center>'); 
			break;
			case 50: label.setHtml('<center>Some pushes.</center>'); 
			break;
			case 75: label.setHtml('<center>Many pushes.</center>'); 
			break;
			case 100: label.setHtml('<center>Show all pushes.</center>'); 
			break;
		}
	},

	onPushSettingSave: function(button, e, eOpts) {
		user = HEART.getItem('local', 'user');
		user = JSON.parse(user);
		user.uuid = HEART.uuid;

		value = this.child('#pushSlider').getValue();

		user.priority = value/25;
		user = JSON.stringify(user);

		HEART.setItem('local', 'user', user);

		succ = function(response) {
			console.log(response);
		};

		fail = function(response) {
			console.log(response);
		};

		content={};
		content.uid=HEART.uuid;
		content.priority=value/25;

		HEART.toUser(content, succ, fail);
		///////////////////////////////////////
		user = HEART.getItem('local', 'pnapi');
		user = JSON.parse(user)||{};

		user.uid = HEART.uuid;
		user.priority = value/25;

		user = JSON.stringify(user);
		HEART.setItem('local', 'pnapi', user);
		///////////////////////////////////////

		this.destroy();
	},

	initialize: function() {
		this.callParent();
		user = HEART.getItem('local', 'user');
		priority = JSON.parse(user).priority*25||50;
		this.child('#pushSlider').setValue(priority);
	}

});