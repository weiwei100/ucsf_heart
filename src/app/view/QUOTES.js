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
						itemId: 'quote',
						listeners: [
							{
								fn: function(component, eOpts) {
									component.element.on({

										painted: function(e, t){

											wrapped=HEART.getItem('session', 'wrapped');
											quotes=Ext.getStore('Quotes'); 
											count=quotes.getAllCount();
											quote='Quote not found.';

											for(i=0;i<count;i++){
													text = quotes.getAt(i).data.text;
													if(text.indexOf(wrapped)>=0)
													{ quote=text; break; }
											}

											component.setHtml("<div class='quote'>" + quote +  "</div>");
											
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
		content = {};
		content.type = 'QUOTES';
		content.action = 'form-submit';
		
		HEART.toSensor(content);
		
		this.parent.pop();
	}

});