/*
 * File: app/view/emiReflection5.js
 * Date: Wed Apr 10 2013 15:50:46 GMT+0800 (CST)
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

Ext.define('HEART.view.emiReflection5', {
	extend: 'Ext.form.Panel',

	config: {
		items: [
			{
				xtype: 'fieldset',
				items: [
					{
						xtype: 'sliderfield',
						itemId: 'pre-slider',
						label: 'How do you feel (stress-pesce)?',
						labelAlign: 'top',
						labelWrap: true,
						name: 'pre-slider',
						value: [
							50
						]
					},
					{
						xtype: 'label',
						html: '<center><b>Reflect</b></center>'
					},
					{
						xtype: 'textareafield',
						label: 'What habitual thoughts or stories are shaping how I experience my child in this moment?',
						labelAlign: 'top',
						labelWrap: true,
						name: 'reflect',
						required: true
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