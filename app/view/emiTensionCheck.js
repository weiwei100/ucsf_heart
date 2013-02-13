/*
 * File: app/view/emiTensionCheck.js
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

Ext.define('HEART.view.emiTensionCheck', {
	extend: 'Ext.form.Panel',

	config: {
		items: [
			{
				xtype: 'label',
				html: '<center><b>Tension Check</b></center>'
			},
			{
				xtype: 'label',
				html: 'For each, bring your attention to that area and relax it - even for 2sec!'
			},
			{
				xtype: 'fieldset',
				title: 'MyFieldSet',
				items: [
					{
						xtype: 'checkboxfield',
						label: 'Feet',
						labelWidth: '80%',
						value: 'Feet'
					},
					{
						xtype: 'checkboxfield',
						label: 'Left thigh',
						labelWidth: '80%',
						value: ''
					},
					{
						xtype: 'checkboxfield',
						label: 'Abdomen',
						labelWidth: '80%'
					},
					{
						xtype: 'checkboxfield',
						label: 'Upper back',
						labelWidth: '80%'
					},
					{
						xtype: 'checkboxfield',
						label: 'Left arm',
						labelWidth: '80%'
					},
					{
						xtype: 'checkboxfield',
						label: 'Both hands',
						labelWidth: '80%'
					},
					{
						xtype: 'checkboxfield',
						label: 'Cheeks',
						labelWidth: '80%'
					},
					{
						xtype: 'button',
						action: 'exercise',
						text: 'Done!'
					}
				]
			}
		]
	}

});