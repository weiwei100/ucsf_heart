/*
 * File: app/controller/MainController.js
 * Date: Fri Jun 28 2013 12:00:42 GMT+0800 (CST)
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
		control: {
			"button[action=intention]": {
				tap: 'onEditIntentionTap'
			},
			"textfield[goola=number]": {
				keyup: 'onNumberFieldKeyup'
			}
		}
	},

	onEditIntentionTap: function(button, e, eOpts) {
		form = Ext.create('HEART.view.EMIIntentionSet');
		form.emxType = 'EMIIntentionSet';
		form.goola = button.getItemId();
		Ext.Viewport.setActiveItem(form);
	},

	onNumberFieldKeyup: function(textfield, e, eOpts) {
		var value = textfield.getValue();

		if(/\D+/.test(value)){
			var message = "<div align='center'>Please don't enter letters or other characters.</div>";
			Ext.Msg.alert(';(', message, Ext.emptyFn);
			textfield.setValue(0);
		}
	},

	launch: function() {
		if(Ext.device.Connection.isOnline()){
			//HEART.sync();
		}
	}

});