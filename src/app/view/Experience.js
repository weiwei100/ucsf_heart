Ext.define('HEART.view.Experience', {
	extend: 'Ext.form.Panel',

	config: {
		cls: 'experience',
		items: [
			{
				xtype: 'fieldset',
				title: 'My Experience',
				items: [
					{
						xtype: 'label',
						html: 'Write a few words to capture your experiences today (emotions felt, your reactions, etc)',
						cls: 'x-subtitle linkColor',
						itemId: 'describe',
						listeners: [
							{
								fn: function(component, eOpts) {
									component.element.on({
										tap : function(e, t){


											content = {};
											content.type = 'popup';
											content.action = 'experience-guide';
											HEART.toSensor(content);

											content = '<p>Do you have a moment to reflect on your day? “If you’d like, write a few words to capture your most salient experience and predominant emotions felt, and your relationship to this experience whether you observed it, reacted to it. <br/>Click for more background on this”</p>';

											follow='<p>Why write about our experiences? Reflecting on some of the most salient pleasant/unpleasant/ moments of your day can help to promote mindfulness and non- reactivity</p>';

											follow+='<p>When some experience has an unpleasant feeling tone we often try to ignore it, avoid it, or make it go away as quickly as possible. When it has a pleasant feeling tone we often try to grasp on to it, or to get more of it, or to worry about how to make it continue. If the moment is neither pleasant or unpleasant (neutral) we often space out or go into our heads into planning or memory or rumination.</p>';

											follow+='<p>Our mindfulness practice encourages and enables us to meet all of our moments more fully, the pleasant/unpleasant/and neutral moments so that we spend less time in avoidance and disconnection and are able to live with greater presence and stability in the midst of our life’s changing conditions.</p>';

											Ext.create('Ext.Panel', {
												scrollable: 'vertical',
												hideOnMaskTap: true,
												autoDestroy: true,
												modal: true,
												padding: 10,
												height: '50%',
												width: '95%',
												left: 0,
												top: 0,
												cls: 'popup',

												items: [
												{
													xtype: 'label',
													html: content,
													itemId: 'short',
													listeners: {
														initialize: function(component, eOpts){
															component.element.on({
																tap: function(){
																	component.parent.child('#long').show();
																}
															});
														}
													}

												},
												{
													xtype: 'label',
													html: follow,
													itemId: 'long',
													hidden: true
												}
												]

											}).showBy(component);

										}
									});
								},
								event: 'initialize'
							}
						]
					},
					{
						xtype: 'textfield',
						itemId: 'pleasant',
						label: 'Moments of pleasant feeling today? How did you respond?',
						labelAlign: 'top',
						labelWidth: '100%',
						labelWrap: true,
						name: 'pleasant'
					},
					{
						xtype: 'textfield',
						itemId: 'unpleasant',
						label: 'Moments of unpleasant feeling today? How did you respond?',
						labelAlign: 'top',
						labelWidth: '100%',
						labelWrap: true,
						name: 'unpleasant'
					},
					{
						xtype: 'image',
						height: 111,
						hidden: true,
						hideAnimation: {
							type: 'fade',
							duration: 4096
						},
						html: '<div class="thankyou" style="font-size:.8em;padding-top:3em">Thank You</div>',
						itemId: 'heart',
						showAnimation: {
							type: 'fade',
							duration: 4096
						},
						src: 'heart-icon.png'
					},
					{
						xtype: 'button',
						hideAnimation: {
							type: 'fadeOut',
							duration: 2048
						},
						itemId: 'done',
						text: 'Done'
					}
				]
			}
		],
		listeners: [
			{
				fn: 'onDoneTap',
				event: 'tap',
				delegate: '#done'
			}
		]
	},

	onDoneTap: function(button, e, eOpts) {
		form = button.parent.parent;
		content = form.getValues();

		content.type = form.emxType;
		content.action='form-submit';

		HEART.toSensor(content);

		pleasant = button.parent.child('#pleasant');
		unpleasant = button.parent.child('#unpleasant');

		ref = this;

		experiences = Ext.getStore('Experiences');

		content = {};

		content.timestamp = Date.now();
		content.pleasant = pleasant.getValue();
		content.unpleasant = unpleasant.getValue();

		experiences.add(content);
		experiences.sort("timestamp", 'DESC');		
		experiences.sync();

		count = experiences.getCount();
		if(count>63){
			experiences.removeAt(count-1);
		}


		button.hide();

		pleasant.hide();
		unpleasant.hide();

		heart = button.parent.child('#heart');

		heart.show();

		setTimeout(function(){
			heart.hide();
			ref.parent.pop();	  
		}, 5000);
	}

});