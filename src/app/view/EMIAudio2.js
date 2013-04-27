/*
 * File: app/view/EMIAudio2.js
 * Date: Thu Apr 25 2013 14:11:47 GMT+0800 (CST)
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

Ext.define('HEART.view.EMIAudio2', {
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
						html: '<center><b>Breath Meditation</b></center>'
					},
					{
						xtype: 'label',
						html: '<p>Listen to this guided session from the workshop.</p><p>Tip: Use headphones and sit or lay down. <br/> Duration: 2:50 min</p>'
					},
					{
						xtype: 'audio',
						itemId: 'audioPanel',
						enableControls: true,
						url: 'https://dl.dropboxusercontent.com/u/37254590/T_2.50.m4a'
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
	}

});