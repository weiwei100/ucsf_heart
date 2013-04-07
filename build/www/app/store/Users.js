/*
 * File: app/store/Users.js
 * Date: Tue Apr 02 2013 18:39:26 GMT+0800 (CST)
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

Ext.define('HEART.store.Users', {
	extend: 'Ext.data.Store',

	requires: [
		'HEART.model.User'
	],

	config: {
		autoLoad: true,
		model: 'HEART.model.User',
		storeId: 'Users',
		proxy: {
			type: 'localstorage',
			id: 'users'
		}
	}
});