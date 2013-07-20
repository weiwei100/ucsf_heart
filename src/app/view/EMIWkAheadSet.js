/*
 * File: app/view/EMIWkAheadSet.js
 * Date: Fri Jul 19 2013 16:07:40 GMT+0800 (CST)
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
								cls: 'x-label-desc',
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
								html: 'Example Intentions: <br/> <p>Feel more compassion for myself, be aware of my breadth, notice when I feel grateful to others...</p>',
								itemId: 'example',
								cls: 'x-label-desc',
								style: 'color: rgb(128,128,128); font-size: 15px;'
							}
						]
					},
					{
						xtype: 'container',
						itemId: 'habit',
						items: [
							{
								xtype: 'label',
								html: 'Choose 1 activity for this week.<br/> See what it feels like to bring your full awareness to this. <br/> You can change it at any time.',
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
				fn: 'onHabitKeyup',
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

	onHabitKeyup: function(textfield, e, eOpts) {
		button = this.child('#fset').child('#done');

		if(this.doValidation()){
			button.enable();
		}else{
			button.disable();
		}
	},

	onAheadSave: function(button, e, eOpts) {
		intention = this.child('#fset').child('#intention').child('#intention').getValue();
		habit = this.child('#fset').child('#habit').child('#habit').getValue();
		time = this.child('#fset').child('#habit').child('#time').getValue();

		user = HEART.getItem('local', 'user');
		user = JSON.parse(user);

		user.intention=intention;
		user.habit = habit; 
		user.time = time;

		succ = function(response) {
			console.log(response);
		};

		fail = function(response) {
			console.log(response);
		};

		HEART.toUser( user, succ, fail );

		user = JSON.stringify(user);

		HEART.setItem('local', 'user', user);

		content = this.getValues();
		content.type = this.emxType;
		HEART.toSensor(content);

		this.parent.pop();
	},

	onNotNowTap: function(button, e, eOpts) {
		HEART.notNow({page:this.emxType});

		this.parent.pop();
	},

	onFormpanelInitialize: function(component, eOpts) {
		time = this.child('#fset').child('#habit').child('#time');

		options = [];

		for( i=5; i<24; i++ ){	
			option = { text: i +': 00', value: i };	
			options.push(option);
		}

		time.setOptions(options);

	},

	doValidation: function() {
		intention = this.child('#fset').child('#intention').child('#intention').getValue();
		habit = this.child('#fset').child('#habit').child('#habit').getValue();

		if(intention.length<2){
			return false;
		}else if(habit.length<2){
			return false;
		}else{
			return true;
		}

	}

});