Ext.define('HEART.controller.EMXController', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			mainTabs: '#mainTabs',
			stressed: '#stressed',
			exercises: '#exercises'
		},

		control: {
			"#exerciseList": {
				select: 'onExerciseSelect'
			},
			"#exercises": {
				show: 'onExercisesShow',
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
				initialize: 'onAudioInitialize'
			}
		}
	},

	onExerciseSelect: function(dataview, record, eOpts) {
		type = record.get("type");
		form = Ext.create('HEART.view.'+type);

		form.emxType = type;
		form.goola = 'exercises';

		this.getExercises().push(form);

		dataview.deselectAll();

		content = {};
		content.type = type;
		content.action = 'exercise-select';

		HEART.toSensor(content);
	},

	onExercisesShow: function(component, eOpts) {

		content = {};
   		content.type = 'HEART';
      	content.action = 'exercises-show';
      	HEART.toSensor(content);
	},

	onExercisesHide: function(component, eOpts) {
		size=component.getItems().length;
		if( size<3 ) { return; }

		this.getExercises().pop();

		content = {};
   		content.type = 'HEART';
      	content.action = 'exercises-pop';
      	HEART.toSensor(content);
		
	},

	onStressedShow: function(component, eOpts) {

		EMX = ['EMITensionCheck', 'EMIGeneralMindfulness', 'EMIAudio3', 'EMIAudio4'];

		type = EMX[Math.floor(EMX.length*Math.random())]; 

		form = Ext.create('HEART.view.'+type);

		form.emxType = type;
		form.goola = 'stressed';

		this.getStressed().push(form);

		content = {};
		content.type = type;
		content.action = 'stressed-show';

		HEART.toSensor(content);
	},

	onStressedHide: function(component, eOpts) {
		size=component.getItems().length;
		if( size<2 ){ return; }

		this.getStressed().pop();

		content = {};
   		content.type = 'HEART';
      	content.action = 'stressed-pop';
      	HEART.toSensor(content);
	},

	onExerciseDone: function(button, e, eOpts) {
		form = button.parent.parent;
		content = form.getValues();

		content.type = form.emxType;
		content.action='form-submit';
		HEART.toSensor(content);
  Ext.Msg.alert('Notification', form.goola, Ext.emptyFn);
		if(form.goola=='exercises'){

			this.getExercises().pop();

		}else if(form.goola=='stressed'){

			this.getMainTabs().setActiveItem(0);

		}else if(form.goola=='pushwoosh'){

			this.getExercises().pop();
			this.getMainTabs().setActiveItem(0);

		}else{ form.parent.pop(); }
            

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

	onAudioInitialize: function(component, eOpts) {

		preSlider = component.child('#pre-slider');
		postSlider = component.child('#post-slider');

		button = component.child('button[text=Done]');
		button.setShowAnimation({type: "fadeIn", duration: 1024});

		audioFrame = component.child('#fsAudio');
		audioFrame.setShowAnimation({type: "fadeIn", duration: 1024});

		audioButton = audioFrame.child('#audioButton');

		content = {};

		audioHandle = function(button, e, eOpts) {
			if(button.getText()=='Play'){

				audio=HEART.getAudio();

				button.setText('Pause');
				audio.play();

				audio.getCurrentPosition(
					function(position){
						content.position=position; },
					function(error){console.log(error);}
        		);

				source = audio.src;
				index = source.lastIndexOf('/');
				content.name= source.slice(index+1);
				content.type = audio.getDuration();
				content.action = 'audio-play';
				HEART.toSensor(content);

			}else{

				audio=HEART.getAudio();

				audio.getCurrentPosition(
					function(position){
						content.position=position; },
					function(error){console.log(error);}
        		);

				source = audio.src;
				index = source.lastIndexOf('/');
				content.name= source.slice(index+1);
				content.type = audio.getDuration();
				content.action = 'audio-pause';
				HEART.toSensor(content);
					
				HEART.audioCallback();

				button.setText('Play');
				audio.pause();

			}
		};

		audioButton.on( {tap: audioHandle} );

		button.setShowAnimation({type: "fadeIn", duration: 1024});

		if(Math.random()>HEART.probability||HEART.must){
			preSlider.destroy();
			postSlider.destroy();
			HEART.audioCallback = function() {
				console.log(HEART.getAudio());
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

		HEART.must = false;

		audioRelease = function() { 
			audio=HEART.getAudio();

			if(audio!='strawberry'){

				audio.getCurrentPosition(
					function(position){
						content.position=position; },
					function(error){console.log(error);}
        		);

				source = audio.src;
				index = source.lastIndexOf('/');
				content.name= source.slice(index+1);
				content.type = audio.getDuration();
				content.action = 'audio-release';
				HEART.toSensor(content);

				audio.release();

				audio='strawberry';
			}   
		};

		component.on({ activeitemchange: audioRelease });

		button.on( { tap: audioRelease } );

		button.hide();
	},

	launch: function() {
		this.getExercises().getNavigationBar().hide();
		this.getStressed().getNavigationBar().hide();
	}

});