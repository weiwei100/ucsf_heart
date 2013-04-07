/*
 * File: app/view/emaType3.js
 * Date: Sun Apr 07 2013 12:36:00 GMT+0800 (CST)
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

Ext.define('HEART.view.emaType3', {
	extend: 'Ext.form.Panel',

	config: {
		items: [
			{
				xtype: 'fieldset',
				title: 'Tell us about your current emotions.',
				items: [
					{
						xtype: 'sliderfield',
						label: 'Anger',
						labelAlign: 'top',
						labelWrap: true,
						name: 'anger',
						value: [
							50
						]
					},
					{
						xtype: 'sliderfield',
						label: 'Sadness',
						labelAlign: 'top',
						labelWrap: true,
						name: 'sadness',
						value: [
							50
						]
					},
					{
						xtype: 'sliderfield',
						label: 'Shame',
						labelAlign: 'top',
						labelWrap: true,
						name: 'shame',
						value: [
							50
						]
					},
					{
						xtype: 'sliderfield',
						label: 'Happiness',
						labelAlign: 'top',
						labelWrap: true,
						name: 'happiness',
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