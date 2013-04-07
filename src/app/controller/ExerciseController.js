/*
 * File: app/controller/ExerciseController.js
 * Date: Sun Apr 07 2013 14:12:04 GMT+0800 (CST)
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

Ext.define('HEART.controller.ExerciseController', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			exercises: '#exercises'
		},

		control: {
			"button[action=exercise]": {
				tap: 'onButtonTap'
			}
		}
	},

	onButtonTap: function(button, e, eOpts) {
		var form = button.parent.parent;
		var values = form.getValues();

		var title = form.record_data.get("type");

		var feeds = Ext.getStore("Feeds");

		feeds.add({timestamp: Date.now(), activity: title, formData: values, mark: false});
		feeds.sort("timestamp", 'DESC');
		feeds.sync();

		form.submit({
			url: 'login.php',
			method: 'POST',
			success: function(form, result) {
				Ext.Msg.alert('', 'Data submitted successfully!');
			},
			failure: function(form, result) {
				Ext.Msg.alert('', 'Still under development.  Data currently not collected');
			}
		});

		this.getExercises().pop();
	}

});