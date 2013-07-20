/*
 * File: app/store/EMXs.js
 * Date: Fri Jun 28 2013 15:53:44 GMT+0800 (CST)
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.0.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('HEART.store.EMXs', {
	extend: 'Ext.data.Store',

	requires: [
		'HEART.model.EMX'
	],

	config: {
		autoLoad: true,
		data: [
			{
				title: 'Mindfulness Moment',
				type: 'EMIAudio3',
				category: 'MINI-MEDITATIONS (AUDIO)'
			},
			{
				title: 'Two Minute Meditation',
				type: 'EMIAudio4',
				category: 'MINI-MEDITATIONS (AUDIO)'
			},
			{
				title: 'Breath Meditation',
				type: 'EMIAudio2',
				category: 'MINI-MEDITATIONS (AUDIO)'
			},
			{
				title: 'Five Minute Meditation',
				type: 'EMIAudio5',
				category: 'MINI-MEDITATIONS (AUDIO)'
			},
			{
				title: 'Breathing with Life',
				type: 'EMIGeneralMindfulness',
				category: 'MINI-MEDITATIONS (NO-AUDIO)'
			},
			{
				title: 'Mindfull Body Scan',
				type: 'EMITensionCheck',
				category: 'MINI-MEDITATIONS (NO-AUDIO)'
			},
			{
				title: 'Loving Kindness Meditation',
				type: 'EMIAudio1',
				category: 'LONGER-MEDITATIONS (AUDIO)'
			},
			{
				title: 'Ten Minute Meditation',
				type: 'EMIAudio6',
				category: 'LONGER-MEDITATIONS (AUDIO)'
			},
			{
				title: 'Body Scan',
				type: 'EMIAudio7',
				category: 'LONGER-MEDITATIONS (AUDIO)'
			},
			{
				title: 'Quotes',
				type: 'QUOTES',
				category: 'WISDOM'
			},
			{
				title: 'My Log',
				type: 'DAILYLOG',
				category: 'DASHBOARD'
			},
			{
				title: 'My Experiences',
				type: 'Experience',
				category: 'DASHBOARD'
			},
			{
				title: 'My Activity',
				type: 'FEEDBACK',
				category: 'DASHBOARD'
			}
		],
		groupField: 'category',
		model: 'HEART.model.EMX',
		storeId: 'EMXs'
	}
});