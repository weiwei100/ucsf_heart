/*
 * File: app/view/EMIIntentionSet.js
 * Date: Mon Apr 08 2013 18:43:29 GMT+0800 (CST)
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

Ext.define('HEART.view.EMIIntentionSet', {
	extend: 'Ext.form.Panel',

	config: {
		items: [
			{
				xtype: 'fieldset',
				title: '<b>What\'s your intention this week?</b>',
				items: [
					{
						xtype: 'label',
						disabled: false,
						html: '<p>Visualize the week ahead. How do you want to carry yourself this week?</p><p>What is this week\'s intention for  you?</p><p>Examples: self-compassion, me-time, patience.</p>',
						itemId: 'describe',
						styleHtmlContent: true
					},
					{
						xtype: 'textareafield',
						itemId: 'intentionText',
						label: 'Enter it here',
						labelAlign: 'top',
						labelWrap: true,
						name: 'content',
						required: true,
						maxLength: 100
					},
					{
						xtype: 'button',
						disabled: true,
						itemId: 'saveIntention',
						text: 'Done'
					}
				]
			}
		],
		listeners: [
			{
				fn: 'onTextareaChange',
				event: 'keyup',
				delegate: '#intentionText'
			},
			{
				fn: 'onIntentionSave',
				event: 'tap',
				delegate: '#saveIntention'
			}
		]
	},

	onTextareaChange: function(textfield, e, eOpts) {
		var value = textfield.getValue().toUpperCase();
		var button = textfield.parent.child('button');

		if(value.length<2||/\W+/.test(value)){
			button.disable();
		}else{
			button.enable();
		}

		textfield.setValue(value);
	},

	onIntentionSave: function(button, e, eOpts) {
		var intention = Ext.Viewport.getActiveItem();
		var text = intention.child('fieldset').child('textareafield').getValue();

		var content = { type: 'intention', data: text, user: 'kyle' };

		var succ = function(response) {
			console.log(response);
		};

		var	fail = function(response) {
			var feeds = Ext.getStore("Feeds");
			feeds.add({timestamp: Date.now(), type: 'intention', data: text, user: 'kyle', mark: false});
			feeds.sort("timestamp", 'DESC');	
			feeds.sync();
		};

		AJAX.toSensor(content, succ, fail);

		intention.destroy();
	}

});