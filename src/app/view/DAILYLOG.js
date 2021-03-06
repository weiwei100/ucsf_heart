Ext.define('HEART.view.DAILYLOG', {
	extend: 'Ext.form.Panel',

	config: {
		cls: 'dailyLog',
		items: [
			{
				xtype: 'fieldset',
				itemId: 'fset',
				items: [
					{
						xtype: 'label',
						html: 'My Daily Log',
						cls: 'x-form-fieldset-title linkColor',
						itemId: 'title',
						listeners: [
							{
								fn: function(component, eOpts) {
									component.element.on({
										tap : function(e, t){

											content = {};
											content.type = 'popup';
											content.title = 'mylog-instruction';

											HEART.toSensor(content);

											content = '<p>Instructions: "Each night we ask a few quick questions about your day’s activities. These should take less than 1 minute to complete. We don’t expect you to complete it every night, but the more the better, for the research and for your own tracking. A missing value on meditation, mindful eating, or exericise will count as a 0 (not done that day). Thank you so much for committing to the mindful path for your life and for this research.”</p>';

											Ext.create('Ext.Panel', {
												hideOnMaskTap: true,
												autoDestroy: true,
												scrollable: 'vertical',
												height: '50%',
												width: '95%',
												html: content,
												modal: true,
												padding: 10,
												left: 0,
												top: 0,
												cls: 'popup'
											}).showBy(component);

										}
									});
								},
								event: 'initialize'
							}
						]
					},
					{
						xtype: 'sliderfield',
						itemId: 'thoughts',
						label: 'How much were you lost in thoughts (of past or future) in the past 5 minutes? <br/><br> <div><span style="float:right">Very Much</span><span>Not at all</span></div>',
						labelAlign: 'top',
						labelWrap: true,
						name: 'thoughts',
						value: [
							50
						]
					},
					{
						xtype: 'sliderfield',
						itemId: 'notice',
						label: 'Did you notice being present and aware (in the activity you were engaged in) in the past 10 minutes? <br/><br/> <div><span style="float:right">Very Much</span><span>Not at all</span></div>',
						labelAlign: 'top',
						labelWrap: true,
						name: 'notice',
						value: [
							50
						]
					},
					{
						xtype: 'checkboxfield',
						itemId: 'meditation',
						label: 'Any formal meditation today?',
						labelWrap: true,
						name: 'meditation'
					},
					{
						xtype: 'label',
						html: '(body scan, recorded or self-guided meditation, or mindful breathing)',
						cls: 'x-html x-label-tip'
					},
					{
						xtype: 'selectfield',
						disabled: true,
						hidden: true,
						itemId: 'howlong',
						label: 'How long ?',
						labelWidth: '50%',
						name: 'howlong',
						options: [
							{
								text: '5 min or less',
								value: '0'
							},
							{
								text: 'Up to 30 min',
								value: '1'
							},
							{
								text: 'More than 30 min',
								value: '2'
							}
						]
					},
					
					{
						xtype: 'checkboxfield',
						itemId: 'mindful',
						label: 'Any mindful eating today?',
						labelWidth: '',
						labelWrap: true,
						name: 'mindful'
					},
					{
								xtype: 'label',
								html: '(What\'s mindful eating?)',
								cls: 'x-html  x-label-tip linkColor',
								itemId: 'middle',							
								listeners: [
									{
										fn: function(component, eOpts) {
											component.element.on({
												tap : function(e, t){

													content = {};
													content.type = 'popup';
													content.action = 'minfuleating-iinstruction';

													HEART.toSensor(content);

													content='<p>Mindful eating means eating while paying attention to the full experience of eating. Even just one minute of mindful eating counts as a “yes!”</p>';
													content+='<p>ð You might check in at be beginning of a meal, taking a mindful minute of breathing.</p>';
													content+='<p>ð You might check with your sensations of hunger and satiety, rating them on a ten point scale, at the start and in the middle of a meal or snack.</p>';
													content+='<p>ð Enjoy the pleasure of the food, notice when the pleasure diminishes.</p>';

													Ext.create('Ext.Panel', {
														hideOnMaskTap: true,
														autoDestroy: true,
														scrollable: 'vertical',
														html: content,
														modal: true,
														padding: 10,
														height: '50%',
														width: '95%',
														left: 0,
														top: 0,
														cls: 'popup'
													}).showBy(component);

												}
											});


										},
										event: 'initialize'
									}
								]
							},

					{
						xtype: 'selectfield',
						itemId: 'exercise',
						label: 'Any exercise today? (10min or more)',
						labelAlign: 'top',
						name: 'exercise',
						options: [
							{
								text: 'None',
								value: '0'
							},
							{
								text: 'Walking (or equivalent)',
								value: '1'
							},
							{
								text: 'More than 30 minAerobic (like jogging)',
								value: '2'
							},
							{
								text: 'Mind-body activity (yoga, chi gung, etc)',
								value: '3'
							}
						]
					},
					{
						xtype: 'container',
						hidden: true,
						hideAnimation: {
							type: 'fadeOut',
							duration: 2048
						},
						itemId: 'group',
						showAnimation: {
							type: 'fadeIn',
							duration: 2048
						},
						items: [
							{
								xtype: 'label',
								html: '<div class="thankyou">THANK YOU</div>',
								itemId: 'thanks',
								styleHtmlContent: true
							},
							{
								xtype: 'label',
								html: 'Have a few moments to reflect on your day?',
								itemId: 'describe'
							},
							{
								xtype: 'button',
								itemId: 'ok',
								text: 'YES'
							},
							{
								xtype: 'button',
								itemId: 'no',
								text: 'NO'
							}
						]
					}
				]
			}
		],
		listeners: [
			{
				fn: 'onMeditationCheck',
				event: 'check',
				delegate: '#meditation'
			},
			{
				fn: 'onMeditationUncheck',
				event: 'uncheck',
				delegate: '#meditation'
			},
			{
				fn: 'onAnyExerciseChange',
				event: 'focus',
				delegate: '#exercise'
			},
			{
				fn: 'onOKTap',
				event: 'tap',
				delegate: '#ok'
			},
			{
				fn: 'onNoTap',
				event: 'tap',
				delegate: '#no'
			}
		]
	},

	onMeditationCheck: function(checkboxfield, e, eOpts) {
		howlong=checkboxfield.parent.child('#howlong')

		howlong.enable();
		howlong.show();
	},

	onMeditationUncheck: function(checkboxfield, e, eOpts) {
		howlong=checkboxfield.parent.child('#howlong')

		howlong.disable();
		howlong.hide();
	},

	onAnyExerciseChange: function(textfield, e, eOpts) {
		textfield.parent.child('#group').show();
	},

	onOKTap: function(button, e, eOpts) {
		form = button.parent.parent.parent;
		content = form.getValues();

		content.type = form.emxType;

		container = button.parent.parent;

		exercise = container.child('#exercise').getValue();
		mindful = container.child('#mindful').getChecked();

		meditation=container.child('#meditation').getChecked();
		howlong = container.child('#howlong').getValue();

		mylog=HEART.mylog();

		if(exercise>0){
			exercised = mylog.exercised||{times:0,days:1,updated:Date.now()};
			exercised.times+=1;

			updated = (new Date(exercised.updated)).getDay();
			today = (new Date()).getDay();

			if(updated!=today){
				exercised.days+=1;
			}

			exercised.updated=Date.now();

			mylog.exercised=exercised; 
		}

		if(mindful){
			mindful = mylog.mindful||{times:0,days:1,updated:Date.now()};
			mindful.times+=1;

			updated = (new Date(mindful.updated)).getDay();
			today = (new Date()).getDay();

			if(updated!=today){
				mindful.days+=1;
			}

			mindful.updated=Date.now();

			mylog.mindful=mindful; 
		}

		if(meditation){
			costing = mylog.meditation||{days:1,minutes:0, updated:Date.now()};

			updated = (new Date(costing.updated)).getDay();
			today = (new Date()).getDay();

			if(updated!=today){
				costing.days+=1;
			}

			costing.updated=Date.now();

			if(howlong==0){
				costing.minutes+=5;	
			}else if(howlong==1){
				costing.minutes+=15;
			}else if(howlong==2){
				costing.minutes+=30;	
			}

			mylog.meditation=costing;
		}else{
			delete content.howlong;
		}

		mylog = JSON.stringify(mylog);
		HEART.setItem('local', 'mylog', mylog);

		this.parent.pop();

		form = Ext.create('HEART.view.Experience');
		form.emxType='Experience';
		form.goola='followup';
		this.parent.push(form);

		HEART.toSensor(content);
	},

	onNoTap: function(button, e, eOpts) {

		content = {};
		content.type = this.emxType;
		content.action='no-tapped';

		HEART.toSensor(content);

		HEART.notNow({page:this.emxType});
		this.parent.pop();
	}

});