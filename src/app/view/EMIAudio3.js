/*
 * File: app/view/EMIAudio3.js
 * Date: Wed Jul 17 2013 20:00:13 GMT+0800 (CST)
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

Ext.define('HEART.view.EMIAudio3', {
	extend: 'Ext.form.Panel',

	config: {
		cls: 'EMIAudio',
		scrollable: 'vertical',
		items: [
			{
				xtype: 'fieldset',
				goola: 'audio',
				items: [
					{
						xtype: 'sliderfield',
						random_show: 'y',
						itemId: 'pre-slider',
						label: 'How stressed do you feel now? <br/><br/><div><span style="float:right">A lot</span><span>Not at all</span></div>',
						labelAlign: 'top',
						labelWrap: true,
						name: 'pre-slider',
						value: [
							50
						]
					},
					{
						xtype: 'fieldset',
						itemId: 'fsAudio',
						title: 'Body Connection',
						items: [
							{
								xtype: 'label',
								html: 'Enjoy this meditation. <br/> Tip: Use headphones and stand or sit down. <br/> Duration: 0:35 min'							},
							{
								xtype: 'button',
								itemId: 'audioButton',
								text: 'Play'
							}
						]
					},
					{
						xtype: 'sliderfield',
						itemId: 'post-slider',
						label: 'How stressed do you feel now? <br/><br/><div><span style="float:right">A lot</span><span>Not at all</span></div>',
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
		HEART.setAudio('T35sec.mp3', HEART.audioCallback);
	}

});