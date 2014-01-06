Ext.define('HEART.store.EMXs', {
	extend: 'Ext.data.Store',

	requires: [
		'HEART.model.EMX'
	],

	config: {
		autoLoad: true,
		data: [
            //////////////////////////////////////////////
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
            //////////////////////////////////////////////
			{
				title: 'Mountain Meditation',
				type: 'EMIAudio3',
				category: 'B. MINI-MEDITATIONS (AUDIO)'
			},
			{
				title: 'HEART Meditation',
				type: 'EMIAudio2',
				category: 'B. MINI-MEDITATIONS (AUDIO)'
			},
			{
				title: 'Sky Meditation',
				type: 'EMIAudio5',
				category: 'B. MINI-MEDITATIONS (AUDIO)'
			},
               
            {
               title: 'Short Meditation',
               type: 'EMIAudio7',
               category: 'B. MINI-MEDITATIONS (AUDIO)'
            },
            //////////////////////////////////////////////
			{
				title: 'Loving Kindness Meditation',
				type: 'EMIAudio1',
				category: 'C. LONGER-MEDITATIONS (AUDIO)'
			},
			{
				title: 'Body Scan',
				type: 'EMIAudio6',
				category: 'C. LONGER-MEDITATIONS (AUDIO)'
			},
			{
				title: 'Sitting Meditation',
				type: 'EMIAudio4',
				category: 'C. LONGER-MEDITATIONS (AUDIO)'
			},
            //////////////////////////////////////////////
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