Ext.define('HEART.store.EMXs', {
	extend: 'Ext.data.Store',

	requires: [
		'HEART.model.EMX'
	],

	config: {
		autoLoad: true,
		data: [
			{
				title: 'Mindful Moment (35 seconds)',
				type: 'EMIAudio3',
				category: 'B. MINI-MEDITATIONS (AUDIO)'
			},
			{
				title: '2 Minute Meditation (2:00 min)',
				type: 'EMIAudio4',
				category: 'B. MINI-MEDITATIONS (AUDIO)'
			},
			{
				title: 'Breath Meditation (2:50 min)',
				type: 'EMIAudio2',
				category: 'B. MINI-MEDITATIONS (AUDIO)'
			},
			{
				title: '5 Minute Meditation (5 min)',
				type: 'EMIAudio5',
				category: 'B. MINI-MEDITATIONS (AUDIO)'
			},
			{
				title: 'Breathing with Life',
				type: 'EMIGeneralMindfulness',
				category: 'A. MINDFUL CHECK-INS (NO-AUDIO)'
			},
			{
				title: 'Mindful Body Scan',
				type: 'EMITensionCheck',
				category: 'A. MINDFUL CHECK-INS (NO-AUDIO)'
			},
			{
				title: 'Loving Kindness Meditation (5:40)',
				type: 'EMIAudio1',
				category: 'C. LONGER-MEDITATIONS (AUDIO)'
			},
			{
				title: '10 Minute Meditation (10 min)',
				type: 'EMIAudio6',
				category: 'C. LONGER-MEDITATIONS (AUDIO)'
			},
			{
				title: 'Body Scan (28:40 min)',
				type: 'EMIAudio7',
				category: 'C. LONGER-MEDITATIONS (AUDIO)'
			},
			{
				title: 'Meditation Timer',
				type: 'Customized',
				category: 'D: Customized Meditation'
			}
		],
		groupField: 'category',
		model: 'HEART.model.EMX',
		storeId: 'EMXs'
	}
});