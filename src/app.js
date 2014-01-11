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
		'EMITensionCheck',
		'EMIGeneralMindfulness',
		'FEEDBACK',
		'DAILYLOG',
		'Experience',
		'EMIPushSlider',
		'EMIWkAheadSet',
		'IntentionRemind',
		'IntentionConnect',
		'Stressed',
		'Presented',
		'Customized',
		'QUOTES',
		'QuestionSet1',
		'QuestionSet2',
		'WeeklyMoment'
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
