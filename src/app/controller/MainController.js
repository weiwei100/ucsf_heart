/*
 * File: app/controller/MainController.js
 * Date: Thu Apr 18 2013 15:21:43 GMT+0800 (CST)
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

Ext.define('HEART.controller.MainController', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			homePanel: '#homepanel',
			stressed: '#stressed'
		},

		control: {
			"#homepanel #editIntention": {
				tap: 'onEditIntentionTap'
			},
			"#homepanel #homeSlider": {
				change: 'onHomeSliderChange'
			},
			"#homepanel #homeDone": {
				tap: 'onHomeDoneTap'
			},
			"#settings #setNotifications": {
				tap: 'onPushSettingEdit'
			},
			"formpanel": {
				activeitemchange: 'onHomePanelActive'
			}
		}
	},

	onEditIntentionTap: function(button, e, eOpts) {
		var intention = Ext.create('HEART.view.EMIIntentionSet');
		Ext.Viewport.setActiveItem(intention);
	},

	onHomeSliderChange: function(me, Slider, thumb, newValue, oldValue, eOpts) {
		var value = Slider.getValue();

		window.localStorage.setItem('home', value);

		var uuid = AJAX.uuid;

		var content = { type: 'homePanel', user: uuid, data: value };

		var succ = function(response) {
			console.log(response);
		};

		var fail = function(response) {
			var feeds = Ext.getStore("Feeds");
			feeds.add({timestamp: Date.now(), type: 'homePanel', user: uuid, data: value});
			feeds.sort("timestamp", 'DESC');		
			feeds.sync();
		};

		AJAX.toSensor(content, succ, fail);

		me.parent.child('#homeDone').enable();

		setTimeout(function(){Slider.setValue(value/2)}, 60000);
	},

	onHomeDoneTap: function(button, e, eOpts) {
		var slider = button.parent.child('sliderfield');
		var value = slider.getValue();

		var uuid = AJAX.uuid;

		var content = { type: 'homePanel', user: uuid, data: value };

		var succ = function(response) {
			console.log(response);
		};

		var fail = function(response) {
			var feeds = Ext.getStore("Feeds");
			feeds.add({timestamp: Date.now(), type: 'homePanel', user: uuid, data: value});
			feeds.sort("timestamp", 'DESC');		
			feeds.sync();
		};

		AJAX.toSensor(content, succ, fail);
	},

	onPushSettingEdit: function(button, e, eOpts) {
		var user = window.localStorage.getItem('user');
		var push_set = 50;

		if(user!=null){
			user = JSON.parse(user);	
			if(user.push_set!=null){
				push_set = user.push_set;
			}
		}

		var values = button.parent.getValues();
		values.uuid = AJAX.uuid;
		values.push_set = push_set;

		user = JSON.stringify(values);

		window.localStorage.setItem('user', user);

		AJAX.toUser({uuid: AJAX.uuid, wake: values.wake_time, sleep: values.sleep_time});

		this.getHomePanel().parent.getTabBar().show();
		var form = Ext.create('HEART.view.EMIPushSlider');
		Ext.Viewport.setActiveItem(form);
	},

	onHomePanelActive: function(container, value, oldValue, eOpts) {
		this.renderIntention();
	},

	renderIntention: function() {
		var intention = window.localStorage.getItem('intention');
		if(intention!=null){
			this.getHomePanel().child('button').setText(intention);
		}
	},

	launch: function() {
		this.renderIntention();
		this.getHomePanel().child('sliderfield').setValue(window.localStorage.getItem('home'));
		setInterval( function(){ if(Ext.device.Connection.isOnline()) {AJAX.sync();} }, 4096);
	}

});