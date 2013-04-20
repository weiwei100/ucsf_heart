/*
 * File: app/view/EMIIntentionSet.js
 * Date: Sat Apr 20 2013 19:11:44 GMT+0800 (CST)
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
		hideAnimation: {
			type: 'fadeOut',
			duration: 768
		},
		showAnimation: {
			type: 'fadeIn',
			duration: 768
		},
		items: [
			{
				xtype: 'label',
				html: 'What is your intention this week?',
				itemId: 'title'
			},
			{
				xtype: 'label',
				disabled: false,
				html: '<p>Visualize the week ahead. What do you want to cultivate this week?</p><p>Examples: self-compassion, patience, acceptiance, self-care.</p>',
				itemId: 'describe',
				styleHtmlContent: true
			},
			{
				xtype: 'textareafield',
				itemId: 'intention',
				label: 'Enter it here',
				labelAlign: 'top',
				labelWrap: true,
				name: 'intention',
				maxLength: 100
			},
			{
				xtype: 'button',
				disabled: true,
				itemId: 'done',
				text: 'Done'
			}
		],
		listeners: [
			{
				fn: 'onTextareaChange',
				event: 'keyup',
				delegate: '#intention'
			},
			{
				fn: 'onIntentionSave',
				event: 'tap',
				delegate: '#done'
			}
		]
	},

	onTextareaChange: function(textfield, e, eOpts) {
		value = textfield.getValue().toUpperCase();
		button = textfield.parent.child('button');

		if(value.length<2||/\W+/.test(value)){
			button.disable();
		}else{
			button.enable();
		}

		textfield.setValue(value);
	},

	onIntentionSave: function(button, e, eOpts) {
		text = button.parent.child('#intention').getValue();
		HEART.setItem('local', 'intention', text);

		form = button.parent;
		uuid = HEART.uuid;

		content = form.getValues();

		content.type = form.type;
		content.user = uuid;

		succ = function(response) {
			Ext.Msg.alert(':)', "<div align='center'>Data Submitted</div>", Ext.emptyFn);
		};

		fail = function(response) {
			Ext.Msg.alert(';(', "<div align='center'>Network Error</div>", Ext.emptyFn);

			feeds = Ext.getStore("Feeds");
			content.timestamp = Date.now();
			feeds.add(content);
			feeds.sort("timestamp", 'DESC');	
			feeds.sync();
		};

		HEART.toSensor(content, succ, fail);

		HEART.toUser({uuid: HEART.uuid, intention_set: true});

		form.destroy();
	}

});