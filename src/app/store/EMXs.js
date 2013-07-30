Ext.define('HEART.store.EMXs', {
	extend: 'Ext.data.Store',

	requires: [
		'HEART.model.EMX'
	],

	config: {
		autoLoad: true,
		data: [
			{ title: 'Intention Connect', type: 'IntentionConnect', category: 'Other'},
			{
				title: 'Mindful Moment (35 seconds)',
				type: 'EMIAudio3',
				category: 'MINI-MEDITATIONS (AUDIO)'
			},
			{
				title: '2 Minute Meditation (2:00 min)',
				type: 'EMIAudio4',
				category: 'MINI-MEDITATIONS (AUDIO)'
			},
			{
				title: 'Breath Meditation (2:50 min)',
				type: 'EMIAudio2',
				category: 'MINI-MEDITATIONS (AUDIO)'
			},
			{
				title: '5 Minute Meditation (5 min)',
				type: 'EMIAudio5',
				category: 'MINI-MEDITATIONS (AUDIO)'
			},
			{
				title: 'Breathing with Life',
				type: 'EMIGeneralMindfulness',
				category: 'MINDFUL CHECK-INS (NO-AUDIO)'
			},
			{
				title: 'Mindfull Body Scan',
				type: 'EMITensionCheck',
				category: 'MINDFUL CHECK-INS (NO-AUDIO)'
			},
			{
				title: 'Loving Kindness Meditation (5:40)',
				type: 'EMIAudio1',
				category: 'LONGER-MEDITATIONS (AUDIO)'
			},
			{
				title: '10 Minute Meditation (10 min)',
				type: 'EMIAudio6',
				category: 'LONGER-MEDITATIONS (AUDIO)'
			},
			{
				title: 'Body Scan (28:40 min)',
				type: 'EMIAudio7',
				category: 'LONGER-MEDITATIONS (AUDIO)'
			},
			{
				title: 'My Daily Log',
				type: 'DAILYLOG',
				category: 'DASHBOARD'
			},
			{
				title: 'My Experiences',
				type: 'Experience',
				category: 'DASHBOARD'
			},
			{
				title: 'My Activity Summary',
				type: 'FEEDBACK',
				category: 'DASHBOARD'
			}
		],
		groupField: 'category',
		model: 'HEART.model.EMX',
		storeId: 'EMXs'
	}
});