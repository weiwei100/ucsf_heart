/*
 * File: app/view/MindfulnessHabit.js
 * Date: Fri Jul 12 2013 16:28:49 GMT+0800 (CST)
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
		layout: {
			type: 'vbox'
		},
		items: [
			{
				xtype: 'label',
				html: '<br/><br/><br/>',
				itemId: 'empty'
			},
			{
				xtype: 'container',
				flex: 3,
				itemId: 'content',
				items: [
					{
						xtype: 'label',
						html: 'Mindfulness Habit: Eat',
						itemId: 'habit',
						listeners: [
							{
								fn: function(component, eOpts) {
									user = HEART.getItem('local', 'user');
									user = JSON.parse(user);

									content='<center><b>Mindfulness Habit:</b>&nbsp;&nbsp;<b>'+user.habit+'</b><center>';

									component.setHtml(content);
								},
								event: 'initialize'
							}
						]
					}
				]
			},
			{
				xtype: 'container',
				flex: 1,
				itemId: 'handler',
				items: [
					{
						xtype: 'button',
						itemId: 'done',
						text: 'Done'
					}
				]
			}
		],
		listeners: [
			{
				fn: 'onOKTap',
				event: 'tap',
				delegate: '#done'
			}
		]
	},

	onOKTap: function(button, e, eOpts) {
		this.parent.pop();
	}

});