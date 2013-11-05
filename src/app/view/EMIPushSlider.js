Ext.define('HEART.view.EMIPushSlider', {
	extend: 'Ext.form.Panel',

	config: {
		cls: 'push-slider',
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
				xtype: 'label',
				html: 'Too many or too few push notifications?',
				cls: 'x-subtitle',
				itemId: 'pushTitle',
				ui: ''
			},
			{
				xtype: 'label',
				html: '<p>Reflect on if you are getting too many or too few push notifications.</p><p>If too many, slide it left.</p><p>If too few, slide to the right.</p>',
				cls: 'x-label-desc',
				itemId: 'pushDesc'
			},
			{
				xtype: 'sliderfield',
				itemId: 'pushSlider',
				name: 'level',
				value: [
					50
				],
				increment: 25
			},
			{
				xtype: 'label',
				html: '<center>Some pushes<center>',
				itemId: 'pushLevel'
			},
			{
				xtype: 'button',
				cls: 'button',
				itemId: 'pushDone',
				text: 'Done'
			}
		],
		listeners: [
			{
				fn: 'onPushSliderChange',
				event: 'change',
				delegate: '#pushSlider'
			},
			{
				fn: 'onPushSettingSave',
				event: 'tap',
				delegate: '#pushDone'
			}
		]
	},

	onPushSliderChange: function(me, Slider, thumb, newValue, oldValue, eOpts) {
		label = me.parent.child('#pushLevel');

		me.parent.setLabel(newValue, label);

		user = HEART.getItem('local', 'user');
		user = JSON.parse(user);

		user.priority = newValue/25;

		HEART.toUser(user);
	},

	onPushSettingSave: function(button, e, eOpts) {
		content = button.parent.getValues();
		content.type = this.emxType;
		content.action='form-submit';
		HEART.toSensor(content);

		this.parent.pop();
	},

	initialize: function() {
		this.callParent();
		user = HEART.getItem('local', 'user');
		priority = JSON.parse(user).priority*25||50;
		this.child('#pushSlider').setValue(priority);
		this.setLabel(priority, this.child('#pushLevel'));
	},

	setLabel: function(value, label) {
		switch(value){
			case 0: label.setHtml('<center>Only show urgent pushes.</center>'); 
			break;
			case 25: label.setHtml('<center>Very few pushes.</center>'); 
			break;
			case 50: label.setHtml('<center>Some pushes.</center>'); 
			break;
			case 75: label.setHtml('<center>Many pushes.</center>'); 
			break;
			case 100: label.setHtml('<center>Show all pushes.</center>'); 
			break;
		}
	}

});