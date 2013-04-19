/*
 * File: app/view/EMAType3.js
 * Date: Thu Apr 18 2013 20:21:42 GMT+0800 (CST)
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

Ext.define('HEART.view.EMAType3', {
	extend: 'Ext.form.Panel',

	config: {
		scrollable: 'vertical',
		items: [
			{
				xtype: 'label',
				html: 'What emotions are you experiencing in this moment? <br> (left=none, right=a lot)'
			},
			{
				xtype: 'fieldset',
				goola: 'ema',
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
						label: 'Joy',
						labelAlign: 'top',
						labelWrap: true,
						name: 'joy',
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
						label: 'Fear',
						labelAlign: 'top',
						labelWrap: true,
						name: 'fear',
						value: [
							50
						]
					},
					{
						xtype: 'sliderfield',
						label: 'Anxiety',
						labelAlign: 'top',
						labelWrap: true,
						name: 'anxiety',
						value: [
							50
						]
					},
					{
						xtype: 'sliderfield',
						label: 'Love',
						labelAlign: 'top',
						labelWrap: true,
						name: 'love',
						value: [
							50
						]
					},
					{
						xtype: 'sliderfield',
						label: 'Frustration',
						labelAlign: 'top',
						labelWrap: true,
						name: 'frustration',
						value: [
							50
						]
					},
					{
						xtype: 'sliderfield',
						label: 'Gratitude',
						labelAlign: 'top',
						labelWrap: true,
						name: 'gratitude',
						value: [
							50
						]
					},
					{
						xtype: 'sliderfield',
						label: 'Exhaustion',
						labelAlign: 'top',
						labelWrap: true,
						name: 'exhaustion',
						value: [
							50
						]
					},
					{
						xtype: 'sliderfield',
						label: 'Contentment',
						labelAlign: 'top',
						labelWrap: true,
						name: 'Contentment',
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