/*
 * File: app/view/MindfulnessHabit.js
 * Date: Tue Jul 02 2013 19:57:11 GMT+0800 (CST)
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

Ext.define('HEART.view.MindfulnessHabit', {
	extend: 'Ext.form.Panel',

	config: {
		items: [
			{
				xtype: 'label',
				centered: true,
				html: 'something',
				itemId: 'mindful'
			},
			{
				xtype: 'button',
				docked: 'bottom',
				itemId: 'ok',
				text: 'OK'
			}
		],
		listeners: [
			{
				fn: 'onOKTap',
				event: 'tap',
				delegate: '#ok'
			}
		]
	},

	onOKTap: function(button, e, eOpts) {
		this.parent.pop();

	}

});