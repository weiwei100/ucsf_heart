/*
 * File: app.js
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

//@require @packageOverrides
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
		'EMIPushSlider',
		'EMAType1',
		'EMAType2',
		'EMAType3',
		'EMAType4',
		'EMAType5',
		'EMIAudio1',
		'EMIAudio2',
		'EMIAudio3',
		'EMIAudio4',
		'EMIAudio5',
		'EMIAudio6',
		'EMIAudio7',
		'EMIHabit',
		'DAILYLOG',
		'Experience',
		'FEEDBACK',
		'EMAType7',
		'EMIWkAheadSet',
		'IntentionRemind',
		'QUOTES',
		'IntentionConnect',
		'EMAType6'
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
