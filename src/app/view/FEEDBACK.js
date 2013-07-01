/*
 * File: app/view/FEEDBACK.js
 * Date: Mon Jul 01 2013 18:35:41 GMT+0800 (CST)
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

Ext.define('HEART.view.FEEDBACK', {
	extend: 'Ext.form.Panel',

	config: {
		layout: {
			type: 'vbox'
		},
		scrollable: 'vertical',
		items: [
			{
				xtype: 'fieldset',
				flex: 1,
				itemId: 'activity',
				title: 'My Activity',
				items: [
					{
						xtype: 'label',
						html: 'Here is your summary statistics of your activities this week. (Note: Missed days count as 0)',
						itemId: 'describe',
						styleHtmlContent: true
					}
				]
			},
			{
				xtype: 'fieldset',
				flex: 2,
				itemId: 'experience',
				layout: {
					type: 'vbox'
				},
				scrollable: 'vertical',
				title: 'My Experience',
				items: [
					{
						xtype: 'list',
						flex: 1,
						itemId: 'explist',
						emptyText: 'Nothing...',
						itemTpl: [
							'<span>Time: {timestamp}</span><br/>',
							'<span>Pleasant: {pleasant}</span><br/>',
							'<span>Unpleasant: {unpleasant}</span>'
						],
						store: 'Experiences'
					}
				]
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
		if(this.goola=='settings'){
			this.parent.pop();
		}else{
			button.parent.destroy();
		}
	}

});