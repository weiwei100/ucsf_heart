Ext.define('HEART.view.EMITensionCheck', {
	extend: 'Ext.form.Panel',

	config: {
		cls: 'bodyScan',
		items: [
			{
				xtype: 'fieldset',
				goola: 'emi',
				title: 'Mindful Body-Scan',
				items: [
					{
						xtype: 'label',
						html: 'Feel and relax each body part for a few seconds, then check:',
						cls: 'x-subtitle',
						itemId: 'describe'
					},
					{
						xtype: 'checkboxfield',
						label: 'Feet',
						labelWidth: '80%',
						labelWrap: true,
						value: 'Feet'
					},
					{
						xtype: 'checkboxfield',
						label: 'Thighs',
						labelWidth: '80%',
						labelWrap: true,
						value: ''
					},
					{
						xtype: 'checkboxfield',
						label: 'Belly',
						labelWidth: '80%',
						labelWrap: true
					},
					{
						xtype: 'checkboxfield',
						label: 'Chest',
						labelWidth: '80%',
						labelWrap: true
					},
					{
						xtype: 'checkboxfield',
						label: 'Hands',
						labelWidth: '80%',
						labelWrap: true
					},
					{
						xtype: 'checkboxfield',
						label: 'Face & Jaw',
						labelWidth: '80%',
						labelWrap: true
					},
					{
						xtype: 'button',
						action: 'exercise',
						cls: 'button',
						itemId: 'done',
						text: 'Done'
					}
				]
			}
		],
		listeners: [
			{
				fn: 'onDoneTap',
				event: 'tap',
				delegate: '#done'
			}
		]
	},

	onDoneTap: function(button, e, eOpts) {
		if(this.goola=='stressed' && Math.random()>2/3){

			setTimeout(function(){

				form = Ext.create('HEART.view.EMAType1');
				form.emxType = 'EMAType1';
				form.goola = 'stressed';

				Ext.Viewport.getActiveItem().setActiveItem(2);
				Ext.Viewport.getActiveItem().getActiveItem().push(form);
			}, 1000*60*15);

		}
	}

});