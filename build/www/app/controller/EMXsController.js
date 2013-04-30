/*
 * File: app/controller/EMXsController.js
 * Date: Tue Apr 30 2013 21:58:03 GMT+0800 (CST)
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

Ext.define('HEART.controller.EMXsController', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			exercises: '#exercises',
			stressed: '#stressed',
			mainTabs: '#mainTabs'
		},

		control: {
			"#exerciseList": {
				select: 'onExerciseSelect'
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
			"fieldset[goola=ema]": {
				initialize: 'onEMAInitialize'
			},
			"fieldset[goola=emi]": {
				initialize: 'onEMIInitialize'
			},
			"fieldset[goola=audio]": {
				initialize: 'onAudioPanelInitialize'
			},
			"fieldset[goola=reflect]": {
				initialize: 'onReflectionInitialize'
			}
		}
	},

	onExerciseSelect: function(dataview, record, eOpts) {
		type = record.get("type");
		form = Ext.create('HEART.view.'+type);

		form.emxType = type;
		form.goola = 'exercises';

		content = {};
		content.type = type;
		content.action = 'show-exercises';
		HEART.toSensor(content);

		this.getExercises().push(form);
	},

	onExercisesHide: function(component, eOpts) {
		this.getExercises().pop();
		this.getExercises().child('dataview').deselectAll();
	},

	onStressedShow: function(component, eOpts) {
		EMXs = Ext.getStore('EMXs');
		count = EMXs.getAllCount();

		index = Math.floor(count*Math.random());
		type = EMXs.getAt(index).get('type');

		form = Ext.create('HEART.view.'+type);

		form.emxType = type;
		form.goola = 'stressed';

		content = {};
		content.type = type;
		content.action = 'show-stressed';
		HEART.toSensor(content);

		this.getStressed().push(form);
	},

	onStressedHide: function(component, eOpts) {
		this.getStressed().pop();
	},

	onExerciseDone: function(button, e, eOpts) {
		form = button.parent.parent;
		content = form.getValues();

		type = form.emxType;

		content.type = type;

		content.action = 'submit';

		HEART.toSensor(content);

		if(form.goola=='exercises'){
			this.getExercises().pop();
			this.getExercises().child('dataview').deselectAll();
			this.getMainTabs().setActiveItem(2);
		}else if(form.goola=='push'){
			this.getExercises().pop();
			this.getExercises().child('dataview').deselectAll();
			this.getMainTabs().setActiveItem(0);
		}else if(form.goola=='stressed'){
			this.getStressed().hide();
			this.getMainTabs().setActiveItem(0);
			//	this.getStressed().show();
		}else{
			form.destroy();
		}


	},

	onEMAInitialize: function(component, eOpts) {
		items = component.getInnerItems();

		for(i=1;i<items.length;i++){
			component.getAt(i).hide();
		}

		for(i=0; i< items.length; i++){
			item = component.getAt(i);
			item.index = i;

			onChange = function() {
				next = component.getAt(this.index+1);
				next.setShowAnimation({type: "fadeIn", duration: 1024});
				next.show();
				next.addAfterListener('show', function(){component.parent.getScrollable().getScroller().scrollToEnd({type: "slide"});});
			};

			item.on({ change: onChange });
		}
	},

	onEMIInitialize: function(component, eOpts) {
		items = component.getInnerItems();

		for(i=2;i<items.length;i++){
			component.getAt(i).hide();
		}

		for(i=1; i< items.length; i++){
			item = component.getAt(i);
			item.index = i;

			onChange = function() {
				next = component.getAt(this.index+1);
				next.setShowAnimation({type: "fadeIn", duration: 1024});
				next.show();
				setTimeout(function(){component.parent.getScrollable().getScroller().scrollToEnd({type: "slide"});}, 64);
			};

			item.on({ change: onChange });
		}
	},

	onAudioPanelInitialize: function(component, eOpts) {
		preSlider = component.child('#pre-slider');
		postSlider = component.child('#post-slider');

		button = component.child('button[text=Done]');
		button.setShowAnimation({type: "fadeIn", duration: 1024});

		audioFrame = component.child('#fsAudio');
		audioFrame.setShowAnimation({type: "fadeIn", duration: 1024});

		audioButton = audioFrame.child('#audioButton');
		audioHandle = function(button, e, eOpts) {
			if(button.getText()=='Play'){
				HEART.getAudio().play();
				button.setText('Pause');

			}else{
				HEART.getAudio().pause();
				button.setText('Play');
				HEART.audioCallback();
			}
		};


		audioButton.on( {tap: audioHandle} );

		button.setShowAnimation({type: "fadeIn", duration: 1024});

		if(Math.random()>HEART.probability){
			preSlider.destroy();
			postSlider.destroy();
			HEART.audioCallback = function() {

				button.show();
				setTimeout(function(){component.parent.getScrollable().getScroller().scrollToEnd({type: "slide"});}, 64);
			};
		}else{ 
			preSlider.on( { change: function() { audioFrame.show(); setTimeout(function(){component.parent.getScrollable().getScroller().scrollToEnd({type: "slide"});}, 64);} } );
			audioFrame.hide();
			postSlider.setShowAnimation({type: "fadeIn", duration: 1024});
			postSlider.hide();
			postSlider.on( { change: function() { button.show(); setTimeout(function(){component.parent.getScrollable().getScroller().scrollToEnd({type: "slide"});}, 64);} } );
			HEART.audioCallback =function() {

				postSlider.show();
				setTimeout(function(){component.parent.getScrollable().getScroller().scrollToEnd({type: "slide"});}, 64);
			};
		}

		audioRelease = function() { 
			audio=HEART.getAudio();
			if(HEART!='strawberry'){
				audio.release();
				audio='strawberry';
			}   
		};

		component.on({ activeitemchange: audioRelease });

		button.on( { tap: audioRelease } );

		button.hide();
	},

	onReflectionInitialize: function(component, eOpts) {
		preSlider = component.child('#pre-slider');

		fsReflect = component.child("#fsReflect");
		write = fsReflect.child('button[text=Write]');

		reflect = fsReflect.child('#reflect');

		postSlider = component.child('#post-slider');

		button = component.child('button[text=Done]');


		callback = {};
		button.hide();

		button.setShowAnimation({type: "fadeIn", duration: 1024});

		if(Math.random()>HEART.probability){
			preSlider.destroy();
			postSlider.destroy();

			callback = function() {
				value = reflect.getValue();
				if(value.length<2){
					button.hide();
				}else{
					button.show();
					setTimeout(function(){component.parent.getScrollable().getScroller().scrollToEnd({type: "slide"});}, 64);
				}
			};

		}else{

			preSlider.on( { change: function() { fsReflect.show(); } } );

			fsReflect.setShowAnimation({type: "fadeIn", duration: 1024});

			fsReflect.hide();

			callback = function() {
				value = reflect.getValue();
				if(value.length<2){
					postSlider.hide();
				}else{
					postSlider.show();
					setTimeout(function(){component.parent.getScrollable().getScroller().scrollToEnd({type: "slide"});}, 64);
				}
			};

			postSlider.hide();

			postSlider.on( { change: function() { button.show(); setTimeout(function(){component.parent.getScrollable().getScroller().scrollToEnd({type: "slide"});}, 64); } } );

		}

		write.setHideAnimation( { type: "fadeOut", duration: 1024 } );
		write.on( { tap: function() { write.hide(); reflect.show(); setTimeout(function(){component.parent.getScrollable().getScroller().scrollToEnd({type: "slide"});}, 64); } } );

		reflect.on( 'keyup', callback );
	},

	launch: function() {
		this.getExercises().getNavigationBar().hide();
		this.getStressed().getNavigationBar().hide();
	}

});