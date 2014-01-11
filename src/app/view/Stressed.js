Ext.define('HEART.view.Stressed', {
	extend: 'Ext.form.Panel',

	config: {
		
		items: [
			
			{
				xtype: 'fieldset',
				goola: 'ema',
				itemId: 'fset',
				items: [
					{
						xtype: 'sliderfield',
						itemId: 'stressed',
						label: 'How stressed do you feel right now?<br/><br/><div><span style="float:right">Extremely</span><span>Not at all</span></div>',
						labelAlign: 'top',
						labelWrap: true,
						name: 'stressed',
						value: [ 50 ]
					},
					{
						action: 'exercise',
						xtype: 'button',
						itemId: 'done',
						text: 'Done',

						listeners: [
							{
								fn: function(component, eOpts) {
									component.element.on({
										tap : function(e, t){

											component.parent.parent.parent.push(component.parent.parent.dest);
										}
									});
								},
								event: 'initialize'
							}
						]
					}
				]
			}
		]
	}

});