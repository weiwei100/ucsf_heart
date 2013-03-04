/*
 * File: app/view/MainTabs.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
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

Ext.define('HEART.view.MainTabs', {
	extend: 'Ext.tab.Panel',
	alias: 'widget.mainview',

	config: {
		items: [
			{
				xtype: 'formpanel',
				title: 'Home',
				iconCls: 'home',
				items: [
					{
						xtype: 'label',
						html: 'This week\'s intention is <b>Self-compassion</b>.<br><br>'
					},
					{
						xtype: 'label',
						html: '<center><b>[Name]\'s recent progress</b></center>'
					},
					{
						xtype: 'list',
						border: '1px',
						height: 295,
						width: 282,
						itemTpl: [
							'<div>{title} - {timestamp:date("d-m-Y")}</div>'
						],
						store: 'Feeds',
						plugins: [
							{
								autoPaging: true,
								type: 'listpaging'
							}
						]
					}
				]
			},
			{
				xtype: 'navigationview',
				title: 'I\'m stressed!',
				iconCls: 'favorites',
				id: 'exercises',
				items: [
					{
						xtype: 'list',
						id: 'exerciseList',
						itemTpl: [
							'<div>{title}</div>'
						],
						store: 'EMIs',
						grouped: true
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