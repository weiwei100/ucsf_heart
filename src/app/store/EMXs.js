/*
 * File: app/store/EMXs.js
 * Date: Mon Apr 29 2013 11:30:29 GMT+0800 (CST)
 *
 * This file was generated by Sencha Architect version 2.2.1.
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
				title: 'Most important now',
				type: 'EMIReflection1',
				category: 'REFLECTION'
			},
			{
				title: 'Next child interaction',
				type: 'EMIReflection2',
				category: 'REFLECTION'
			},
			{
				title: 'Preventing presence',
				type: 'EMIReflection3',
				category: 'REFLECTION'
			},
			{
				title: 'This interaction',
				type: 'EMIReflection4',
				category: 'REFLECTION'
			},
			{
				title: 'Habits shaping my child',
				type: 'EMIReflection5',
				category: 'REFLECTION'
			},
			{
				title: 'Habits shaping myself',
				type: 'EMIReflection6',
				category: 'REFLECTION'
			},
			//////////////////////////////
			{
				title: 'Loving-kindness Meditation',
				type: 'EMIAudio1',
				category: 'GUIDED AUDIO'
			},
			{
				title: 'Breath Meditation',
				type: 'EMIAudio2',
				category: 'GUIDED AUDIO'
			},
			{
				title: 'Body Connection',
				type: 'EMIAudio3',
				category: 'GUIDED AUDIO'
			},
			{
				title: 'Two-Minute Meditation',
				type: 'EMIAudio4',
				category: 'GUIDED AUDIO'
			},
			{
				title: 'Five-Minute Meditation',
				type: 'EMIAudio5',
				category: 'GUIDED AUDIO'
			},
			{
				title: 'Ten-Minute Meditation',
				type: 'EMIAudio6',
				category: 'GUIDED AUDIO'
			},
			{
				title: 'Body Scan',
				type: 'EMIAudio7',
				category: 'GUIDED AUDIO'
			},
			//////////////////////////////
			{
				title: 'Track Meditation',
				type: 'EMITrackMeditation',
				category: 'TRACK'
			},
			{
				title: 'Track Exercise',
				type: 'EMITrackExercise',
				category: 'TRACK'
			},
			//////////////////////////////
			{
				title: 'Current stress level',
				type: 'EMAType1',
				category: 'CHECK-IN'
			},
			{
				title: 'Current feelings & energy',
				type: 'EMAType2',
				category: 'CHECK-IN'
			},
			{
				title: 'Current emotions',
				type: 'EMAType3',
				category: 'CHECK-IN'
			},
			{
				title: 'Avoiding emotions',
				type: 'EMAType4',
				category: 'CHECK-IN'
			},
			{
				title: 'State of mind',
				type: 'EMAType5',
				category: 'CHECK-IN'
			},
			//////////////////////////////
			{
				title: 'Tension Check',
				type: 'EMITensionCheck',
				category: 'CHECK-IN'
			},
			/*{
				title: 'Set weekly intention ',
				type: 'EMIIntentionSet',
				category: 'CHECK-IN'
			},
			{
				title: 'Set notification level',
				type: 'EMIPushSlider',
				category: 'CHECK-IN'
			},
			*/{
				title: 'Breathing with life',
				type: 'EMIGeneralMindfulness',
				category: 'CHECK-IN'
			}
		],
		groupField: 'category',
		model: 'HEART.model.EMX',
		storeId: 'EMXs'
	}
});