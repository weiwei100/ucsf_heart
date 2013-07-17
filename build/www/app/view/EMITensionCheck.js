/*
 * File: app/view/EMITensionCheck.js
 * Date: Mon Jul 15 2013 18:06:56 GMT+0800 (CST)
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

Ext.define('HEART.view.EMITensionCheck', {
	extend: 'Ext.form.Panel',

	config: {
		items: [
			{
				xtype: 'fieldset',
				goola: 'emi',
				centered: false,
				title: '<div align=\'center\'>Mindful Body-Scan<div>',
				items: [
					{
						xtype: 'label',
						html: 'Feel and relax each body part for a few seonds, then check:',
						itemId: 'describe',
						margin: '8px'
					},
					{
						xtype: 'checkboxfield',
						label: 'Feet',
						labelWidth: '80%',
						labelWrap: true,
						value: 'Feet'
					},
					{
						xtype: 'checkboxfield',
						label: 'Thighs',
						labelWidth: '80%',
						labelWrap: true,
						value: ''
					},
					{
						xtype: 'checkboxfield',
						label: 'Belly',
						labelWidth: '80%',
						labelWrap: true
					},
					{
						xtype: 'checkboxfield',
						label: 'Chest',
						labelWidth: '80%',
						labelWrap: true
					},
					{
						xtype: 'checkboxfield',
						label: 'Hands',
						labelWidth: '80%',
						labelWrap: true
					},
					{
						xtype: 'checkboxfield',
						label: 'Face & Jaw',
						labelWidth: '80%',
						labelWrap: true
					},
					{
						xtype: 'button',
						action: 'exercise',
						cls: 'button',
						itemId: 'done',
						text: 'Done'
					}
				]
			}
		],
		listeners: [
			{
				fn: 'onDoneTap',
				event: 'tap',
				delegate: '#done'
			}
		]
	},

	onDoneTap: function(button, e, eOpts) {
		if(this.goola=='stressed' && Math.random()>2/3){

			setTimeout(function(){

				form = Ext.create('HEART.view.EMAType1');
				form.goola = 'stressed';

				Ext.Viewport.getActiveItem().setActiveItem(2);
				Ext.Viewport.getActiveItem().getActiveItem().push(form);

			}, 1000*60*15);

		}
	}

});