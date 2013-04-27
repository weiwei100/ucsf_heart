/*
 * File: app/view/IntentionReminder3.js
 * Date: Sat Apr 27 2013 17:02:14 GMT+0800 (CST)
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

Ext.define('HEART.view.IntentionReminder3', {
	extend: 'Ext.form.Panel',

	config: {
		items: [
			{
				xtype: 'label',
				html: '<center>Feel your intention today.</center>',
				padding: '8px'
			},
			{
				xtype: 'fieldset',
				items: [
					{
						xtype: 'label',
						html: 'Your current intention is:',
						itemId: 'describe'
					},
					{
						xtype: 'label',
						itemId: 'intention'
					},
					{
						xtype: 'label',
						html: 'Take a few moments and savor the feelings and sensations of your intention. <br/> Take a moment to imagine sharing this with someone special.',
						itemId: 'more',
						margin: '8px'
					},
					{
						xtype: 'sliderfield',
						itemId: 'being',
						label: 'Can you connection with and feel your intention right now? <br/> (left=not at all, right=a lot)',
						labelAlign: 'top',
						labelWrap: true,
						name: 'being',
						value: [
							50
						]
					},
					{
						xtype: 'button',
						action: 'exercise',
						itemId: 'done',
						text: 'Done'
					},
					{
						xtype: 'button',
						action: 'intention',
						itemId: 'intentionEdit',
						text: 'Change my intention'
					}
				]
			}
		]
	},

	initialize: function() {
		this.callParent();
		intention = HEART.getItem('local', 'intention');
		if(intention!=null){
			this.child('fieldset').child('#intention').setHtml(intention);
		}
	}

});