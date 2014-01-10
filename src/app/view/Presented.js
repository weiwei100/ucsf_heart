Ext.define('HEART.view.Presented', {
	extend: 'Ext.form.Panel',

	config: {
		cls: 'present',
		items: [
			
			{
				xtype: 'fieldset',
				goola: 'ema',
				itemId: 'fset',
				items: [
					{
						xtype: 'sliderfield',
						itemId: 'balanced',
						label: 'How balanced do you feel with what is happening right now? <br/><br/><div><span style="float:right">Balanced</span><span>Not at all</span></div>',
						labelAlign: 'top',
						labelWrap: true,
						name: 'balanced',
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
											
											HEART.showImage(4096, 10);

											setTimeout(function(){

												component.parent.parent.parent.parent.setActiveItem(0);

											}, 4096);
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