Ext.define('HEART.view.FEEDBACK', {
	extend: 'Ext.form.Panel',

	config: {
		cls: 'feedback',
		layout: {
			type: 'vbox'
		},
		items: [
			{
				xtype: 'fieldset',
				itemId: 'activity',
				title: 'My Activity',
				items: [
					{
						xtype: 'label',
						html: 'Here is your summary statistics of your activities this week. <br/> (Note: Missed days count as 0)',
						cls: 'x-subtitle',
						itemId: 'describe'
					},
					{
						xtype: 'label',
						html: 'You exercised XX times this week.',
						cls: 'with-margin',
						itemId: 'exercised'
					},
					{
						xtype: 'label',
						html: 'You did mindful eating XX times this week.',
						cls: 'with-margin',
						itemId: 'mindful'
					},
					{
						xtype: 'label',
						html: 'You did meditation on XX days and roughly XX minutes this week.',
						cls: 'with-margin',
						itemId: 'meditation'
					},
					{
						xtype: 'label',
						html: 'Your stress level: Your range of stress was XX to XX, the average is XX.',
						cls: 'with-margin',
						itemId: 'stress'
					},
					{
						xtype: 'label',
						html: 'Your average feelings of balance were XX.',
						cls: 'with-margin',
						itemId: 'balance'
					}
				],
				listeners: [
					{
						fn: function(component, eOpts) {


							mylog = JSON.parse(HEART.getItem('local', 'mylog'))||{};

							dead = new Date(Date.now()-Date.now()%(1000*60*60*24*7)+(1000*60*60*24*10));

							if(mylog.expire){
								if(Date.now()>mylog.expire){
									mylog = {};
									mylog.expire = dead;
								}

							}else{
								mylog.expire = dead
							}

							label=component.child('#exercised');

							object = mylog.exercised||{times: 0, days:0};

							content = 'You exercised '+object.times+' times this week ('+object.days+' of days)';

							label.setHtml(content);

							label=component.child('#mindful');

							object = mylog.mindful||{times:0, days: 0};

							content = 'You did mindful eating '+object.times+' times this week ('+object.days+' of the days)';

							label.setHtml(content);

							label=component.child('#meditation');

							object = mylog.meditation||{days:0, minutes:0};

							content = 'You did meditation on '+object.days+' days and roughly '+object.minutes+'minutes this week, (average of '+Math.ceil(object.minutes/object.days)+' per day, which we will count as 5, 15, or 30, depending on which of the 3 choices they clicked.)';

							label.setHtml(content);

							label=component.child('#stress');

							object = mylog.stressed||{low:0, high:0, average:0};

							content = 'Your stress level: Your range of stress was '+object.low+' to '+object.high+', the average is '+object.average;

							label.setHtml(content);

							label=component.child('#balance');

							object = mylog.balance||{average:0};

							content = 'Your average feelings of balance were '+object.average;

							label.setHtml(content);

							mylog = JSON.stringify(mylog);

							HEART.setItem('local', 'mylog', mylog);
						},
						event: 'initialize'
					}
				]
			},
			{
				xtype: 'fieldset',
				itemId: 'experience',
				height: 64,
				layout: {
					type: 'vbox'
				},
				title: 'My Experience',
				items: [
					{
						flex: 3,
						xtype: 'list',
						itemHeight: 93,
						itemId: 'explist',
						scrollable: 'false',
						emptyText: 'Nothing...',
						itemTpl: [
							'<p class="x-label" style="margin:0 -0.9em"><b>{[ (new Date(values.timestamp-0)).toDateString() ]}</b></p>',
							'<p class="x-label" style="margin:-0.4em 0 0 -0.9em">Pleasant: {pleasant}<br />Unpleasant: {unpleasant}</p>',
						],
						store: 'Experiences',
						listeners: [
							{
								fn: function(component, eOpts){
									value = { direction: 'vertical', directionLock: true };
									component.setScrollable(value);			
								},
								event: 'itemtouchstart'
							},
							{
								fn: function(component, eOpts){
									component.setScrollable('false');			
								},
								event: 'itemtouchend'
							}
						]
					}
				],
				listeners: [
					{
						fn: function(component, eOpts){
							experiences = Ext.getStore('Experiences');
							count = experiences.getCount();
							height=count*95;
							height=(height<100)?100:height;
							height=(height>500)?500:height;
							component.setHeight(height);
							experiences.sort("timestamp", 'DESC');		
							experiences.sync();
						},
						event: 'initialize'
					}
				]
			},
			{
				xtype: 'button',
				itemId: 'ok',
				text: 'OK'
			}
		],
		listeners: [
			{
				fn: 'onOKTap',
				event: 'tap',
				delegate: '#ok'
			}
		]
	},

	onOKTap: function(button, e, eOpts) {
		this.parent.pop();
	}

});