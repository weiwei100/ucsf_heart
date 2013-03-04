/*
 * File: app/view/emaEmotion.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
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

Ext.define('HEART.view.emaEmotion', {
	extend: 'Ext.form.Panel',

	config: {
		items: [
			{
				xtype: 'fieldset',
				defaults: {
					labelWidth: '35%',
					labelAlign: 'top'
				},
				title: '',
				items: [
					{
						xtype: 'sliderfield',
						label: 'Anger:',
						name: 'anger',
						value: [
							50
						]
					},
					{
						xtype: 'sliderfield',
						label: 'Sadness:',
						name: 'sadness',
						value: [
							50
						]
					},
					{
						xtype: 'sliderfield',
						label: 'Shame:',
						name: 'shame',
						value: [
							50
						]
					},
					{
						xtype: 'sliderfield',
						label: 'Happiness:',
						name: 'happiness',
						value: [
							50
						]
					},
					{
						xtype: 'sliderfield',
						label: 'Energy:',
						name: 'energy',
						value: [
							50
						]
					},
					{
						xtype: 'button',
						action: 'exercise',
						ui: 'confirm',
						text: 'Done'
					}
				]
			}
		]
	}

});