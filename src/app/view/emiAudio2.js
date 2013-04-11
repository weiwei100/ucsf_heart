/*
 * File: app/view/emiAudio2.js
 * Date: Wed Apr 10 2013 11:59:41 GMT+0800 (CST)
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

Ext.define('HEART.view.emiAudio2', {
	extend: 'Ext.form.Panel',

	config: {
		items: [
			{
				xtype: 'fieldset',
				items: [
					{
						xtype: 'sliderfield',
						itemId: 'per-slider',
						label: 'How do you feel (stress--peace)?',
						labelAlign: 'top',
						labelWrap: true,
						name: 'pre-slider',
						value: [
							50
						]
					},
					{
						xtype: 'label',
						html: '<center><b>Guided elaxation</b></center>'
					},
					{
						xtype: 'label',
						html: '<p>Listen to this guided session from the workshop.</p><p>Tip: Use headphones. <br/> Duration: 10min</p>'
					},
					{
						xtype: 'audio',
						centered: false
					},
					{
						xtype: 'sliderfield',
						itemId: 'post-slider',
						label: 'How do you feel (stress--peace)?',
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