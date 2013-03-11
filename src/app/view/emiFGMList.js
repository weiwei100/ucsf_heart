/*
 * File: app/view/emiFGMList.js
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

Ext.define('HEART.view.emiFGMList', {
	extend : 'Ext.form.Panel',
	xtype: 'fgmlist',

	config : {
		items : [{
			xtype : 'label',
			html : '<center><b>Feel the Goodness</b></center>'
		}, {
			xtype : 'label',
			html : 'These are your feel good moments.'
		}, {
			xtype : 'list',
			border : '1px',
			height : 322,
			itemTpl : ['<img src="{local}" height=320 />'],
			store : 'FGMs',
			plugins : [{
				autoPaging : true,
				type : 'listpaging'
			}]
		}]
	}

});
