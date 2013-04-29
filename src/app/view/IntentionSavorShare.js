/*
 * File: app/view/IntentionSavorShare.js
 * Date: Mon Apr 29 2013 11:30:28 GMT+0800 (CST)
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
						itemId: 'intention'
					},
					{
						xtype: 'label',
						html: 'Take a few moments and savor the feelings and sensations of your intention.<br/>Take a moments to imagine sharing this with someone special.',
						itemId: 'describe',
						styleHtmlContent: true
					},
					{
						xtype: 'sliderfield',
						itemId: 'being',
						label: 'Can your feel this? <br/> (left=not at all, right=very much so)',
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