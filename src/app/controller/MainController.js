/*
 * File: app/controller/MainController.js
 * Date: Wed Jul 03 2013 17:57:15 GMT+0800 (CST)
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

Ext.define('HEART.controller.MainController', {
	extend: 'Ext.app.Controller',

	config: {
	},

	launch: function() {
		if(Ext.device.Connection.isOnline()){
			//HEART.sync();
		}
	}

});