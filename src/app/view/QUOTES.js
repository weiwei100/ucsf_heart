/*
 * File: app/view/QUOTES.js
 * Date: Fri Jul 19 2013 03:14:40 GMT+0800 (CST)
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

Ext.define('HEART.view.QUOTES', {
	extend: 'Ext.form.Panel',

	config: {
		cls: 'quotes',
		layout: {
			type: 'vbox'
		},
		items: [
			{
				xtype: 'container',
				flex: 3,
				itemId: 'content',
				padding: 20,
				items: [
					{
						xtype: 'label',
						html: '<br/><br/><br/>',
						itemId: 'empty'
					},
					{
						xtype: 'label',
						goola: 'nothing',
						itemId: 'quote',
						listeners: [
							{
								fn: function(component, eOpts) {
									component.element.on({

										painted: function(e, t){

											if(HEART.goola!='pushwoosh'){

												quotes=Ext.getStore('Quotes'); 
												count=quotes.getAllCount();
												quote='This is quote';

												index=Math.ceil(Math.random()*count);

												quote=quotes.getAt(index).data.text;

												HEART.quote=quote;

												wrapped = '';

												quotewords = quote.split(" ", 10);

												for (var i = 0; i< quotewords.length; i++) {
													wrapped += quotewords[i];
													wrapped += " ";
												};
												if(quotewords.length > 10){
													wrapped+='...';
												}
												
												component.setHtml("<div class='quote'>" + wrapped + "</div>");
											}
										}

									});

									component.element.on({

										tap : function(e, t){

											quotes=Ext.getStore('Quotes'); 
											count=quotes.getAllCount();
											quote=HEART.quote;

											if(HEART.goola=='pushwoosh'){
												wrapped=component.getHtml();
												wrapped=wrapped.substring(0, wrapped.length-3);

												for(i=0;i<count;i++){
													text = quotes.getAt(i).data.text;
													if(text.indexOf(wrapped)>=0)
													{ quote=text; break; }
												}
												component.setHtml(quote);
											}

											component.setHtml("<div class='quote'>" + quote + "</div>");
											

											content = {};
											content.type = 'label';
											content.action = 'show-quote';

											HEART.toSensor(content);


										}

									});
								},
								event: 'initialize'
							}
						]
					}
				]
			},
			{
				xtype: 'container',
				flex: 1,
				itemId: 'handler',
				items: [
					{
						xtype: 'button',
						itemId: 'done',
						text: 'Done'
					}
				]
			}
		],
		listeners: [
			{
				fn: 'onOKTap',
				event: 'tap',
				delegate: '#done'
			}
		]
	},

	onOKTap: function(button, e, eOpts) {
		this.parent.pop();
	}

});