Ext.define('HEART.view.EMIWkAheadSet', {
	extend: 'Ext.form.Panel',

	config: {
		cls: 'weekAhead',
		hideAnimation: {
			type: 'fadeOut',
			duration: 768
		},
		showAnimation: {
			type: 'fadeIn',
			duration: 768
		},
		items: [
			{
				xtype: 'fieldset',
				itemId: 'fset',
				title: 'Visualize the week ahead...',
				items: [
					{
						xtype: 'container',
						itemId: 'intention',
						items: [
							{
								xtype: 'label',
								html: 'Think about how you want to live this week.',
								cls: 'x-subtitle',
								itemId: 'describe'
							},
							{
								xtype: 'textareafield',
								itemId: 'intention',
								clearIcon: false,
								label: 'What would you like your intention to be for this week?',
								labelAlign: 'top',
								labelWrap: true,
								name: 'intention',
								maxLength: 100
							},
							{
								xtype: 'label',
								html: 'Example Intentions: <p>Feel more compassion for myself, be aware of my BREATH, notice when I feel grateful to others...</p>',
								itemId: 'example',
								cls: 'x-label-desc'
							}
						]
					},
					{
						xtype: 'container',
						itemId: 'mindful',
						items: [
							{
								xtype: 'label',
								html: '<p>Choose 1 activity for this week.</p><p> See what it feels like to bring your full awareness to this. </p><p>You can change it at any time.</p>',
								itemId: 'describe'
							},
							{
								xtype: 'textfield',
								itemId: 'habit',
								label: 'My mindful habit this week is:',
								labelAlign: 'top',
								labelWrap: true,
								name: 'habit'
							},
							{
								xtype: 'label',
								html: 'Example: <p>Brushing my teeth, Driving, Kissing my child goodnight...</p>',
								cls: 'x-label-desc',
								itemId: 'example'
							},
							{
								xtype: 'selectfield',
								itemId: 'time',
								label: 'Remind me of this at',
								labelWidth: '65%',
								name: 'time'
							}
						]
					},
					{
						xtype: 'button',
						cls: 'button',
						disabled: true,
						itemId: 'done',
						text: 'Done'
					},
					{
						xtype: 'button',
						itemId: 'notnow',
						text: 'Not Now'
					}
				]
			}
		],
		listeners: [
			{
				fn: 'onTextareaChange',
				event: 'keyup',
				delegate: '#intention'
			},
			{
				fn: 'onHabitChange',
				event: 'keyup',
				delegate: '#habit'
			},
			{
				fn: 'onAheadSave',
				event: 'tap',
				delegate: '#done'
			},
			{
				fn: 'onNotNowTap',
				event: 'tap',
				delegate: '#notnow'
			},
			{
				fn: 'onFormpanelInitialize',
				event: 'initialize'
			}
		]
	},

	onTextareaChange: function(textfield, e, eOpts) {
		value = textfield.getValue().toUpperCase();
		button = this.child('#fset').child('#done');

		if(this.doValidation()){
			button.enable();
		}else{
			button.disable();
		}

		textfield.setValue(value);
	},

	onHabitChange: function(textfield, e, eOpts) {
		button = this.child('#fset').child('#done');

		if(this.doValidation()){
			button.enable();
		}else{
			button.disable();
		}
	},

	onAheadSave: function(button, e, eOpts) {
		intention=this.child('#fset').child('#intention').child('#intention').getValue();
		habit=this.child('#fset').child('#mindful').child('#habit').getValue();
		time=this.child('#fset').child('#mindful').child('#time').getValue();

		user=HEART.getItem('local', 'user');
		user=JSON.parse(user);

		user.intention=intention;
		user.habit=habit; 
		user.time=time;

		HEART.toUser(user);

		content = this.getValues();
		content.type = this.emxType;
		content.action='form-submit';
		HEART.toSensor(content);

		this.parent.parent.getTabBar().show();

		this.parent.pop();
	},

	onNotNowTap: function(button, e, eOpts) {

		content = {};
		content.type = this.emxType;
		content.action='notnow-tapped';

		HEART.toSensor(content);

		HEART.notNow({page:this.emxType});
		this.parent.pop();
	},

	onFormpanelInitialize: function(component, eOpts) {
		time = this.child('#fset').child('#mindful').child('#time');

		options = [];

		for( i=5; i<24; i++ ){	
			option = { text: i +': 00', value: i };	
			options.push(option);
		}

		time.setOptions(options);

	},

	doValidation: function() {
		intention=this.child('#fset').child('#intention').child('#intention').getValue();
		habit=this.child('#fset').child('#mindful').child('#habit').getValue();

		if(intention.length<2||habit.length<2){
			return false;
		}else{
			return true;
		}

	}

});