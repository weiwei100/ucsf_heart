/*
 * File: app/view/FEEDBACK.js
 * Date: Fri Jun 28 2013 14:42:58 GMT+0800 (CST)
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
		items: [
			{
				xtype: 'fieldset',
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
				itemId: 'experience',
				title: 'My Experience'
			}
		]
	}

});