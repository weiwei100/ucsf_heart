/*
 * File: app/model/Feed.js
 * Date: Mon Apr 29 2013 17:38:34 GMT+0800 (CST)
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

Ext.define('HEART.model.Feed', {
	extend: 'Ext.data.Model',

	config: {
		fields: [
			{
				dateFormat: 'time',
				name: 'timestamp',
				type: 'int'
			},
			{
				name: 'type'
			},
			{
				name: 'data'
			},
			{
				name: 'user'
			},
			{
				allowNull: false,
				name: 'id'
			}
		]
	}
});