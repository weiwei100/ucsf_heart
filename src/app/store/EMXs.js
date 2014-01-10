Ext.define('HEART.store.EMXs', {
	extend: 'Ext.data.Store',

	requires: [
		'HEART.model.EMX'
	],

	config: {
		autoLoad: true,
		data: [

			{
				title: 'Meditation Timer',
				type: 'Customized',
				category: 'Customized Meditation'
			},
			//////////////////////////////////////////////
            {
               title: 'Mindful Moment ( 33sec )',
               type: 'EMIAudio7',
               category: 'MINI-MEDITATIONS (AUDIO)'
            },
            {
				title: 'Sky Meditation ( 2min 4sec )',
				type: 'EMIAudio2',
				category: 'MINI-MEDITATIONS (AUDIO)'
			},
			{
				title: 'HEART Meditation ( 2min 51sec )',
				type: 'EMIAudio5',
				category: 'MINI-MEDITATIONS (AUDIO)'
			},
			{
				title: 'Mountain Meditation ( 2min 27sec)',
				type: 'EMIAudio3',
				category: 'MINI-MEDITATIONS (AUDIO)'
			},
            //////////////////////////////////////////////
            {
				title: 'Body Scan ( 19min 42sec )',
				type: 'EMIAudio6',
				category: 'LONGER-MEDITATIONS (AUDIO)'
			},
			{
				title: 'Sitting Meditation ( 20min 46sec )',
				type: 'EMIAudio4',
				category: 'LONGER-MEDITATIONS (AUDIO)'
			},
			{
				title: 'Loving Kindness Meditation ( 6min )',
				type: 'EMIAudio1',
				category: 'LONGER-MEDITATIONS (AUDIO)'
			}
		],
		groupField: 'category',
		model: 'HEART.model.EMX',
		storeId: 'EMXs'
	}
});