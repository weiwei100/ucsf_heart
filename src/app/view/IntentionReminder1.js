/*
 * File: app/view/IntentionReminder1.js
 * Date: Wed Apr 17 2013 14:33:23 GMT+0800 (CST)
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

Ext.define('HEART.view.IntentionReminder1', {
	extend: 'Ext.form.Panel',

	config: {
		items: [
			{
				xtype: 'fieldset',
				title: '<center>Are you being your intention?</center>',
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
						xtype: 'sliderfield',
						itemId: 'being',
						label: 'Can you connection with and feel your intention right now? <br/> (left=not at all, right=a lot)',
						labelAlign: 'top',
						labelWrap: true,
						value: [
							50
						]
					},
					{
						xtype: 'button',
						itemId: 'reminderDone',
						text: 'Done'
					},
					{
						xtype: 'button',
						itemId: 'editIntention',
						text: 'Change my intention'
					}
				]
			}
		],
		listeners: [
			{
				fn: 'onReminderDoneTap',
				event: 'tap',
				delegate: '#reminderDone'
			},
			{
				fn: 'onEditIntentionTap',
				event: 'tap',
				delegate: '#editIntention'
			}
		]
	},

	onReminderDoneTap: function(button, e, eOpts) {
		var being = button.parent.child('#being');
		var value = being.getValue();
		var content = {data: value};

		var type = 'intentionReminder1';
		var uuid =  AJAX.uuid;

		content.type = type;
		content.user = uuid;

		var succ = function(response) {
			console.log(response);
		};

		var fail = function(response) {
			var feeds = Ext.getStore("Feeds");
			feeds.add({timestamp: Date.now(), type: type, data: value, user: uuid});
			feeds.sort("timestamp", 'DESC');		
			feeds.sync();
		};

		AJAX.toSensor(content, succ, fail);

		this.destroy();
	},

	onEditIntentionTap: function(button, e, eOpts) {
		var intention = Ext.create('HEART.view.EMIIntentionSet');
		Ext.Viewport.setActiveItem(intention);
	},

	initialize: function() {
		this.callParent();
		var intention = window.localStorage.getItem('intention');
		if(intention!=null){
			this.child('fieldset').child('#intention').setHtml(intention);
		}
	}

});