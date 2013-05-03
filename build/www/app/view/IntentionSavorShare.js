/*
 * File: app/view/IntentionSavorShare.js
 * Date: Fri May 03 2013 23:40:48 GMT+0800 (CST)
 *
 * This file was generated by Sencha Architect version 2.2.1.
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

Ext.define('HEART.view.IntentionSavorShare', {
	extend: 'Ext.form.Panel',

	config: {
		items: [
			{
				xtype: 'fieldset',
				title: '<center>Feel Your Intention</center>',
				items: [
					{
						xtype: 'label',
						html: 'Your current intention is:',
						margin: '5px'
					},
					{
						xtype: 'label',
						itemId: 'intention',
						margin: '5px'
					},
					{
						xtype: 'label',
						html: 'Take a few moments and savor the feelings and sensations of your intention.',
						itemId: 'describe',
						styleHtmlContent: true
					},
					{
						xtype: 'sliderfield',
						itemId: 'connect',
						label: 'Can you connect with and feel your intention right now? <div><span style="float:right">A Lot</span><span>Not at all</span></div>',
						labelAlign: 'top',
						labelWrap: true,
						name: 'connect',
						value: [
							50
						]
					},
					{
						xtype: 'label',
						html: 'Now, imagine sharing this with someone special',
						itemId: 'describe1',
						styleHtmlContent: true
					},
					{
						xtype: 'sliderfield',
						itemId: 'share',
						label: 'Can you feel this?',
						labelAlign: 'top',
						labelWrap: true,
						name: 'share',
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