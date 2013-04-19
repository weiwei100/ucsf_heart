/*
 * File: app/view/EMAType1.js
 * Date: Thu Apr 18 2013 20:24:27 GMT+0800 (CST)
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

Ext.define('HEART.view.EMAType1', {
	extend: 'Ext.form.Panel',

	config: {
		items: [
			{
				xtype: 'label',
				html: 'What is happening right now?'
			},
			{
				xtype: 'fieldset',
				goola: 'ema',
				hideOnMaskTap: false,
				modal: false,
				items: [
					{
						xtype: 'sliderfield',
						label: 'How much stress are you experiencing in this moment? <br/> (left=none, right=alot)',
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
		]
	}

});