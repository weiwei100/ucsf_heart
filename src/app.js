Ext.Loader.setConfig({

});

Ext.application({

	requires: [
		'Ext.device.Connection'
	],
	models: [
		'Feed',
		'EMX',
		'Experience',
		'Quote'
	],
	stores: [
		'Feeds',
		'EMXs',
		'Experiences',
		'Quotes'
	],
	views: [
		'MainTabs',
		'EMITensionCheck',
		'EMIGeneralMindfulness',
		'EMAType1',
		'EMAType2',
		'EMAType3',
		'EMAType4',
		'EMAType5',
		'EMAType6',
		'EMAType7',
		'EMAType8',
		'EMIAudio1',
		'EMIAudio2',
		'EMIAudio3',
		'EMIAudio4',
		'EMIAudio5',
		'EMIAudio6',
		'EMIAudio7',
		'EMIHabit',
		'FEEDBACK',
		'DAILYLOG',
		'Experience',
		'EMIPushSlider',
		'EMIWkAheadSet',
		'IntentionRemind',
		'IntentionConnect',
		'QUOTES',
		'Stressed',
		'Presented',
		'Customized'
	],
	controllers: [
		'EMXController',
		'MainController'
	],
	name: 'HEART',

	launch: function() {
		Ext.create('HEART.view.MainTabs',{fullscreen:true});
	}

});
