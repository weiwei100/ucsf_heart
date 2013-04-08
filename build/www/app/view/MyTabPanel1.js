/*
 * File: app/view/MyTabPanel1.js
 * Date: Sun Apr 07 2013 11:27:54 GMT+0800 (CST)
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

Ext.define('HEART.view.MyTabPanel1', {
	extend: 'Ext.tab.Panel',

	config: {
		items: [
			{
				xtype: 'formpanel',
				title: 'Check-in',
				iconCls: 'home',
				items: [
					{
						xtype: 'label',
						html: 'This week\'s value: <here>'
					},
					{
						xtype: 'label',
						html: 'Today\'s goal: <here>'
					},
					{
						xtype: 'label',
						html: 'Do a quick check-in (auto-show the correct EMA from these 3, auto-save when they adjust slider):'
					},
					{
						xtype: 'label',
						html: 'Notice  your thoughts, emotions and body sensations. (prefix to all EMAs)'
					},
					{
						xtype: 'fieldset',
						defaults: {
							labelWidth: '35%',
							labelAlign: 'top'
						},
						title: '',
						items: [
							{
								xtype: 'sliderfield',
								label: 'How much stress are you aware of right now?',
								labelWrap: true,
								value: [
									50
								]
							}
						]
					},
					{
						xtype: 'fieldset',
						defaults: {
							labelWidth: '35%',
							labelAlign: 'top'
						},
						title: '',
						items: [
							{
								xtype: 'sliderfield',
								label: 'The amount of pleasantness I feel is:',
								labelWrap: true,
								value: [
									50
								]
							},
							{
								xtype: 'sliderfield',
								label: 'The amount of unpleasantness I feel is:',
								labelWrap: true,
								value: [
									50
								]
							},
							{
								xtype: 'sliderfield',
								label: 'The amount of energy I have right now is:',
								labelWrap: true,
								value: [
									50
								]
							}
						]
					},
					{
						xtype: 'label',
						html: 'How intensely do you feel...'
					},
					{
						xtype: 'fieldset',
						defaults: {
							labelWidth: '35%',
							labelAlign: 'top'
						},
						title: '',
						items: [
							{
								xtype: 'sliderfield',
								label: 'Anger:',
								value: [
									50
								]
							},
							{
								xtype: 'sliderfield',
								label: 'Sadness:',
								value: [
									50
								]
							},
							{
								xtype: 'sliderfield',
								label: 'Shame:',
								value: [
									50
								]
							},
							{
								xtype: 'sliderfield',
								label: 'Happiness:',
								value: [
									50
								]
							},
							{
								xtype: 'sliderfield',
								label: 'Energy:',
								value: [
									50
								]
							}
						]
					}
				]
			},
			{
				xtype: 'formpanel',
				title: 'I\'m stressed!',
				iconCls: 'user',
				items: [
					{
						xtype: 'label',
						html: 'auto-load an EMI here'
					}
				]
			},
			{
				xtype: 'formpanel',
				title: 'Exercises',
				iconCls: 'organize',
				items: [
					{
						xtype: 'list',
						height: 282,
						ui: 'round',
						width: 275,
						emptyText: 'Empty',
						inline: '{\n    "EMIs": [\n        {\n            "title": "mountain",\n            "type": "mp3",\n            "shortdesc": "13469short description here"\n        },\n		{\n            "title": "brief mindfulness checkin",\n            "type": "mp3",\n            "shortdesc": "12346short description here"\n        },\n		{\n            "title": "tension check",\n            "type": "interactive",\n            "shortdesc": "2345short description here"\n        },\n		{\n            "title": "body awareness",\n            "type": "mp3",\n            "shortdesc": "234short description here"\n        },\n		{\n            "title": "value",\n            "type": "interactive",\n            "shortdesc": "13469short description here"\n        }\n	}\n}',
						itemTpl: [
							'<section class="movieListItem">',
							'<img src="{poster_thumb}">',
							'<h1>{Title}</h1>',
							'<div class="ratings">',
							'<span class="critics">Type: {Type}%</span>',
							'<span class="audience">Description: {ShortDescription}%</span>',
							'</div>',
							'</section>'
						],
						store: 'EMIs',
						grouped: true
					},
					{
						xtype: 'panel',
						tpl: [
							'<p>Name: </p>'
						]
					}
				]
			},
			{
				xtype: 'formpanel',
				title: 'Settings',
				iconCls: 'settings',
				items: [
					{
						xtype: 'textfield',
						label: 'First name',
						labelWidth: '50%',
						autoCapitalize: true,
						maxLength: 15
					},
					{
						xtype: 'textfield',
						label: 'Child\'s name',
						labelWidth: '50%',
						autoCapitalize: true,
						maxLength: 15
					},
					{
						xtype: 'textfield',
						label: 'Wake-up time',
						labelWidth: '50%',
						autoCorrect: false
					},
					{
						xtype: 'textfield',
						label: 'Sleep time',
						labelWidth: '50%'
					},
					{
						xtype: 'textfield',
						label: 'Gender',
						labelWidth: '50%'
					},
					{
						xtype: 'textfield',
						label: 'Weight',
						labelWidth: '50%'
					},
					{
						xtype: 'textfield',
						label: 'Height',
						labelWidth: '50%'
					}
				]
			}
		],
		tabBar: {
			docked: 'bottom',
			ui: 'light'
		}
	}

});