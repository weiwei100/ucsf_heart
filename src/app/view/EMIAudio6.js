/*
 * File: app/view/EMIAudio6.js
 * Date: Mon Apr 29 2013 11:30:28 GMT+0800 (CST)
 *
 * This file was generated by Sencha Architect version 2.2.1.
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

Ext.define('HEART.view.EMIAudio6', {
	extend: 'Ext.form.Panel',

	config: {
		scrollable: 'vertical',
		items: [
			{
				xtype: 'fieldset',
				goola: 'audio',
				items: [
					{
						xtype: 'sliderfield',
						itemId: 'pre-slider',
						label: 'How do you feel (left=overwhelmed, right=balanced)?',
						labelAlign: 'top',
						labelWrap: true,
						name: 'pre-slider',
						value: [
							50
						]
					},
					{
						xtype: 'label',
						html: '<center><b>Ten_minute Meditation</b></center>',
						styleHtmlContent: true
					},
					{
						xtype: 'label',
						html: 'Listen to this guided session from the workshop. <br/> Tip: Use headphones and stand or sit down. <br/> Duration: 10:00 min',
						styleHtmlContent: true
					},
					{
						xtype: 'button',
						itemId: 'audioButton',
						text: 'Play'
					},
					{
						xtype: 'sliderfield',
						itemId: 'post-slider',
						label: 'How do you feel (left=overwhelmed, right=balanced)?',
						labelAlign: 'top',
						labelWrap: true,
						name: 'post-slider',
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
		]
	},

	initialize: function() {
		this.callParent();
		HEART.setAudio('W_10.0.m4a', HEART.audioCallback);
	}

});