Ext.define('HEART.view.IntentionRemind', {
	extend: 'Ext.form.Panel',

	config: {
		cls: 'intention',
		scrollable: 'vertical',
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
				items: [
					{
						xtype: 'label',
						html: 'Take a few moments to reflect on your intention',
						itemId: 'describe',
						styleHtmlContent: true
					},
					{
						xtype: 'label',
						html: '<center><b>Intention:</b>&nbsp;&nbsp;<b>Eat</b><center>',
						itemId: 'intention',
						listeners: [
							{
								fn: function(component, eOpts) {
									user = HEART.getItem('local', 'user');
									user = JSON.parse(user);

									content='<center><b>Intention:</b>&nbsp;&nbsp;<b>'+user.intention+'</b><center>';

									component.setHtml(content);
								},
								event: 'initialize'
							}
						]
					},
					{
						xtype: 'label',
						html: 'Notice how you feel in your body..<br>Notice how you feel in your heart/mind as you engage this reflection..',
						itemId: 'question',
						styleHtmlContent: true
					},
					{
						xtype: 'button',
						hideAnimation: {
							type: 'fadeOut',
							duration: 1024
						},
						itemId: 'fakeTimer',
						style: {
							background: 'transparent',
							color: 'green'
						},
						iconCls: 'time',
						iconMask: true
					},
					{
						xtype: 'button',
						hidden: true,
						itemId: 'done',
						showAnimation: {
							type: 'fadeIn',
							duration: 1024
						},
						text: 'Done'
					},
					{
						xtype: 'label',
						hidden: true,
						itemId: 'timer',
						style: '{ \n	font-size: 90px;\n	\n}'
					},
					{
						xtype: 'label',
						hidden: true,
						hideAnimation: {
							type: 'fadeOut',
							duration: 1024
						},
						html: '<div class="wrapper">   <div class="pie spinner"></div>   <div class="pie filler"></div>   <div class="mask"></div> </div>',
						itemId: 'reser',
						showAnimation: {
							type: 'fadeIn',
							duration: 1024
						}
					},
					{
						xtype: 'label',
						hideAnimation: {
							type: 'fadeOut',
							duration: 1024
						},
						html: 'Click the timer and open up to this experience for a few moments now...',
						itemId: 'guide',
						styleHtmlContent: true
					}
				]
			}
		],
		listeners: [
			{
				fn: 'onFakeTimerTap',
				event: 'tap',
				delegate: '#fakeTimer'
			},
			{
				fn: 'onDoneTap',
				event: 'tap',
				delegate: '#done'
			},
			{
				fn: 'onTimerShow',
				event: 'show',
				delegate: '#timer'
			}
		]
	},

	onFakeTimerTap: function(button, e, eOpts) {
		button.hide();

		content = {};
		content.type = 'IntentionRemind';
		content.action = 'FakeTimer-Tap';
		HEART.toSensor(content);

		fset = button.parent
		fset.child('#guide').hide();

		setTimeout(function(){

			fset.child('#timer').show();

			setTimeout(function(){

				fset.child('#timer').hide();

				setTimeout(function(){
					fset.child('#done').show();
				}, 1024);

			}, 21000);


		}, 1024);

	},

	onDoneTap: function(button, e, eOpts) {
		content = {};
		content.type = 'IntentionRemind';
		content.action = 'form-submit';
		HEART.toSensor(content);

		this.parent.pop();
	},

	onTimerShow: function(component, eOpts) {
		count = 20 - 0;

		setInterval(function(){

			if(count<1){
				component.hide();
				component.parent.child('#done').show();
				return;
			}

			component.setHtml('<center class="huge-text">'+count+'</center>');
			count-=1;

		}, 1000);
	}

});