/*
 * File: app/controller/EMXsController.js
 * Date: Thu Apr 11 2013 17:35:04 GMT+0800 (CST)
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

Ext.define('HEART.controller.EMXsController', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			exercises: '#exercises',
			stressed: '#stressed'
		},

		control: {
			"#exerciseList": {
				select: 'onListSelect'
			},
			"#exercises": {
				hide: 'onExercisesHide'
			},
			"#stressed": {
				show: 'onStressedShow',
				hide: 'onStressedHide'
			},
			"button[action=exercise]": {
				tap: 'onExerciseDone'
			},
			"sliderfield[name=pre-slider]": {
				change: 'onPreSliderChange'
			},
			"sliderfield[name=post-slider]": {
				change: 'onPostSliderChange'
			}
		}
	},

	onListSelect: function(dataview, record, eOpts) {
		var exercise = Ext.create('HEART.view.' + record.get("type"));
		exercise.record_data = record;

		if(record.get("type").indexOf('emi')>=0&&Math.random()<AJAX.probability){
			var field = exercise.child('fieldset');
			field.child('#pre-slider').hide();
			field.child('#post-slider').hide();
		}

		this.getExercises().push(exercise);
	},

	onExercisesHide: function(component, eOpts) {
		this.getExercises().pop();
	},

	onStressedShow: function(component, eOpts) {
		var EMXs = Ext.getStore('EMXs');
		var count = EMXs.getAllCount();

		var index = Math.floor(count*Math.random());
		var emx = EMXs.getAt(index);

		var exercise = Ext.create('HEART.view.' + emx.get("type"));

		exercise.record_data = emx;
		this.getStressed().push(exercise);
	},

	onStressedHide: function(component, eOpts) {
		this.getStressed().pop();
	},

	onExerciseDone: function(button, e, eOpts) {
		var form = button.parent.parent;
		var values = form.getValues();
		var content = values;

		console.log(form.record_data);

		var type = form.record_data.get('type');

		content.type = type;
		content.user = 'kyle';

		var succ = function(response) {
			console.log(response);
		};

		var fail = function(response) {
			var feeds = Ext.getStore("Feeds");
			feeds.add({timestamp: Date.now(), type: type, data: values, mark: false});
			feeds.sort("timestamp", 'DESC');		
			feeds.sync();
		};

		AJAX.toSensor(content, succ, fail);

		this.getExercises().pop();
	},

	onPreSliderChange: function(me, Slider, thumb, newValue, oldValue, eOpts) {
		Slider.hide();
	},

	onPostSliderChange: function(me, Slider, thumb, newValue, oldValue, eOpts) {
		Slider.hide();
	},

	launch: function() {
		this.getExercises().getNavigationBar().hide();
		this.getStressed().getNavigationBar().hide();
	}

});