Ext.define('HEART.view.Customized', {
	extend: 'Ext.form.Panel',

	config: {
		//cls: 'EMAType',
		items: [
			
			{
				xtype: 'fieldset',
				goola: 'ema',
				title: 'Your customized Meditation',
				itemId: 'fset',
				items: [
					
					{
						xtype: 'selectfield',
						itemId: 'audio',
						label: 'Audio',
						labelWidth: '40%',
						labelWrap: true,
						name: 'audio',
						readOnly: false
					},
					{
						xtype: 'selectfield',
						itemId: 'timer',
						label: 'Timer',
						labelWidth: '40%',
						labelWrap: true,
						name: 'timer',
						readOnly: false
					}
				]
			},
			{
				xtype: 'fieldset',
				itemId: 'fsAudio',
				items: [
					{
						xtype: 'label',
						itemId: 'timer',
						style: '{ \n	font-size: 90px;\n	\n}'
					},
					{
						xtype: 'button',
						itemId: 'begin',
						text: 'Begin',

						listeners: [
							{
								fn: function(component, eOpts) {
									component.element.on({
										tap : function(e, t){

											component.hide();

											component.parent.parent.child('#fset').hide();

											var values = component.parent.parent.getValues();

											var duration = values.timer*60000;

											HEART.showImage(duration);
											
											audio=HEART.getAudio();

											audio.play();

											HEART.audioCallback = function(){

												if(values.audio==1){

													HEART.setAudio('Dear_Esther.mp3', HEART.audioCallback);

													audio.play();
												}	
											};

											setTimeout(function(){

												if(duration>audio.getDuration()){

													setTimeout(function(){

														HEART.setAudio('singing_bowl_3_chime.wav', HEART.audioCallback);

														audio.play();

														HEART.audioCallback = function(){
															
															audio.release();

															component.parent.parent.parent.pop();

														};

													}, duration-audio.getDuration()*1000-4096);
												}

											}, 4096);

											var count = values.timer*60;

											var timerLabel = component.parent.child('#timer');

											setInterval(function(){

												if(count<1){

													timerLabel.hide();

													return;
												}

												timerLabel.setHtml('<center class="huge-text">'+Math.floor(count/60)+":"+Math.floor(count%60)+'</center>');
												count-=1;

											}, 1000);
										}
									});
								},
								event: 'initialize'
							}
						]
					}
				]
			}
		]
	},

	initialize: function() {

		this.callParent();

		audioOptions = [];

		audioOptions.push({ text: 'Silence', value: 0 });
		audioOptions.push({ text: 'Guided intro', value: 1 });

		this.child('#fset').child('#audio').setOptions(audioOptions);

		timerOptions = [];

		for( i=1; i<=30; i++ ){	
			option = { text: i +' min', value: i };	
			timerOptions.push(option);
		}

		this.child('#fset').child('#timer').setOptions(timerOptions);

		HEART.setAudio('singing_bowl_3_chime.wav', HEART.audioCallback);
	}

});