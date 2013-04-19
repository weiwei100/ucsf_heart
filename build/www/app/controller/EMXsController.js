/*
 * File: app/controller/EMXsController.js
 * Date: Fri Apr 19 2013 15:14:54 GMT+0800 (CST)
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
			},
			"fieldset[goola=ema]": {
				initialize: 'onEMAInitialize'
			},
			"button[text=Write]": {
				tap: 'onWriteTap'
			},
			"fieldset[goola=emi]": {
				initialize: 'onEMIInitialize'
			},
			"fieldset[goola=audio]": {
				initialize: 'onAudioInitialize'
			},
			"fieldset[goola=reflect]": {
				initialize: 'onReflectionInitialize'
			}
		}
	},

	onListSelect: function(dataview, record, eOpts) {
		var exercise = Ext.create('HEART.view.' + record.get("type"));
		exercise.record_data = record;
		var type = record.get("type");
		var find = type.indexOf('Reflection')>=0||type.indexOf('Audio')>=0

		if(find&&Math.random()<AJAX.probability){
			var field = exercise.child('fieldset');
			field.child('#pre-slider').destroy();
			field.child('#post-slider').destroy();
		}

		exercise.goola = 'exercises';

		this.getExercises().push(exercise);
	},

	onExercisesHide: function(component, eOpts) {
		this.getExercises().pop();
		this.getExercises().child('dataview').deselectAll();
	},

	onStressedShow: function(component, eOpts) {
		var EMXs = Ext.getStore('EMXs');
		var count = EMXs.getAllCount();

		var index = Math.floor(count*Math.random());
		var emx = EMXs.getAt(index);

		var exercise = Ext.create('HEART.view.' + emx.get("type"));

		exercise.record_data = emx;
		exercise.goola = 'stressed';

		this.getStressed().push(exercise);
	},

	onStressedHide: function(component, eOpts) {
		this.getStressed().pop();
	},

	onExerciseDone: function(button, e, eOpts) {
		var form = button.parent.parent;
		var values = form.getValues();
		var content = values;

		var type = form.record_data.get('type');
		var uuid = AJAX.uuid;

		content.type = type;
		content.user = uuid;

		var succ = function(response) {
			Ext.Msg.alert(':)', "<div align='center'>Data Submitted</div>", Ext.emptyFn);
		};

		var fail = function(response) {
			Ext.Msg.alert(';(', "<div align='center'>Network Error</div>", Ext.emptyFn);
			var feeds = Ext.getStore("Feeds");
			feeds.add({timestamp: Date.now(), type: type, data: values, user: uuid});
			feeds.sort("timestamp", 'DESC');		
			feeds.sync();
		};

		AJAX.toSensor(content, succ, fail);

		content = { uid: AJAX.uuid };

		if(type.indexOf('Type')>=0){
			if(type.indexOf('1')>=0){
				content.emi_type_1=values.stress;
			}else if(type.indexOf('2')>=0){
				content.emi_type_2=values.unpleasantness;
			}else if(type.indexOf('3')>=0){
				content.emi_type_3=values.anxiety;	
			}
			AJAX.toUser(content);
		}

		if(form.goola=='exercises'){
			this.getExercises().pop();
			this.getExercises().child('dataview').deselectAll();
		}else if(form.goola=='stressed'){
			this.getStressed().pop();
			this.getStressed().hide();
			this.getStressed().show();
		}else{
			form.destroy();
		}
	},

	onPreSliderChange: function(me, Slider, thumb, newValue, oldValue, eOpts) {
		me.setHideAnimation({type :"fadeOut", duration : 256});
		me.hide();
	},

	onPostSliderChange: function(me, Slider, thumb, newValue, oldValue, eOpts) {
		me.setHideAnimation({type :"fadeOut", duration : 256});
		me.hide();
	},

	onEMAInitialize: function(component, eOpts) {
		var items = component.getInnerItems();

		for(i=1;i<items.length;i++){
			component.getAt(i).hide();
		}

		var index = 0;

		for(i=0; i< items.length; i++){
			var comp = component.getAt(i);
			comp.index = i;
			var onChange = function(){

				this.setHideAnimation({type :"fadeOut", duration : 256});
				this.hide(); 
				var next = component.getAt(this.index+1);

				next.setShowAnimation({type :"fadeIn", duration : 1024});
				next.show();
			};

			comp.on({ change: onChange });
		}
	},

	onWriteTap: function(button, e, eOpts) {
		button.setHideAnimation({type :"fadeOut", duration : 256});
		button.hide();
		var textarea = button.parent.child('textareafield')
		textarea.setShowAnimation({type :"fadeIn", duration : 768});
		textarea.show();

		var post = button.parent.child('#post-slider');
		var done = button.parent.child('button[text=Done]');

		if(post!=null){
			post.setShowAnimation({type :"fadeIn", duration : 1024});
			post.show();
		}

		done.setShowAnimation({type :"fadeIn", duration : 1024});
		done.show();
	},

	onEMIInitialize: function(component, eOpts) {
		var items = component.getInnerItems();

		for(i=2;i<items.length;i++){
			component.getAt(i).hide();
		}

		var index = 0;

		for(i=1; i< items.length; i++){
			var comp = component.getAt(i);
			comp.index = i;
			var onChange = function(){

				this.setHideAnimation({type :"fadeOut", duration : 256});
				this.hide(); 
				var next = component.getAt(this.index+1);

				next.setShowAnimation({type :"fadeIn", duration : 1024});
				next.show();
			};

			comp.on({ change: onChange });
		}
	},

	onAudioInitialize: function(component, eOpts) {
		var audio = component.child('#audioPanel');
		var post = component.child('#post-slider');
		var button = component.child('button');

		post.hide();
		button.hide();

		callback = function() {
			var slider = this.parent.child('#post-slider');
			if(slider!=null){
				slider.show();
			}else{
				button.show();
			}
		};

		audio.on( { ended: callback, stop: callback, pause: callback } );

		post.on( { change: function(){ button.show() } } );
	},

	onReflectionInitialize: function(component, eOpts) {
		var post = component.child('#post-slider');
		var button = component.child('button[text=Done]');

		post.hide();
		button.hide();
	},

	launch: function() {
		this.getExercises().getNavigationBar().hide();
		this.getStressed().getNavigationBar().hide();
	}

});