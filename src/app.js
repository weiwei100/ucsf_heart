/*
 * File: app.js
 *
 * This file was generated by Sencha Architect version 2.2.0.
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

Ext.Loader.setConfig({

});

Ext.application({

	requires: [
		'Ext.device.Device',
		'Ext.device.Connection'
	],
	models: [
		'Feed',
		'EMX'
	],
	stores: [
		'Feeds',
		'EMXs'
	],
	views: [
		'MainTabs',
		'EMITensionCheck',
		'EMIGeneralMindfulness',
		'EMIIntentionSet',
		'EMIPushSlider',
		'EMAType1',
		'EMAType2',
		'EMAType3',
		'EMAType4',
		'EMAType5',
		'EMIReflection1',
		'EMIReflection2',
		'EMIReflection3',
		'EMIReflection4',
		'EMIReflection5',
		'EMIReflection6',
		'IntentionReminder1',
		'IntentionReminder2',
		'IntentionSavorShare',
		'EMIAudio1',
		'EMIAudio2',
		'EMIAudio3',
		'EMITrackExercise',
		'EMITrackMeditation'
	],
	controllers: [
		'EMXsController',
		'MainController'
	],
	name: 'HEART',

	launch: function() {

		Ext.create('HEART.view.MainTabs', {fullscreen: true});
	}

});
