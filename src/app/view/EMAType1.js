/*
 * File: app/view/EMAType1.js
 * Date: Wed Jun 26 2013 11:06:36 GMT+0800 (CST)
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
		scrollable: 'vertical',
		items: [
			{
				xtype: 'label',
				html: 'What is happening right now?',
				margin: '8px'
			},
			{
				xtype: 'fieldset',
				goola: 'ema',
				hideOnMaskTap: false,
				modal: false,
				items: [
					{
						xtype: 'sliderfield',
						itemId: 'mysliderfield',
						label: 'How much stress are you experiencing in this moment? <div><span style="float:right">a lot</span><span>none</span></span>',
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
						text: 'Done'
					}
				]
			}
		],
		listeners: [
			{
				fn: 'onMysliderfieldChange',
				event: 'change',
				delegate: '#mysliderfield'
			}
		]
	},

	onMysliderfieldChange: function(me, Slider, thumb, newValue, oldValue, eOpts) {
		value = me.getValue();

		content = {};
		content.uid = HEART.uuid;
		content.ema_type_1=value;

		succ = function(response) {
			console.log(response);
		};

		fail = function(response) {
			console.log(response);
		};

		HEART.toUser(content, succ, fail);
		///////////////////////////////////////////
		user = HEART.getItem('local', 'pnapi')||{};
		user = JSON.parse(user);

		user.uid = HEART.uuid;
		user.emi_type_1 = value;

		user = JSON.stringify(user);
		HEART.setItem('local', 'pnapi', user);
		//////////////////////////////////////
	}

});