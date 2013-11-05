Ext.define('HEART.view.EMIGeneralMindfulness', {
	extend: 'Ext.form.Panel',

	config: {
		cls: 'breathLife',
		disabled: false,
		items: [
			{
				xtype: 'fieldset',
				goola: 'emi',			
				title: 'Breathing With Life',
				items: [
					{
						xtype: 'label',
						html: 'Wherever you are in this moment',
						cls: 'x-subtitle',
						itemId: 'describe'
					},
					{
						xtype: 'checkboxfield',
						label: 'Feeling your feet planted on the ground',
						labelWidth: '80%',
						labelWrap: true
					},
					{
						xtype: 'checkboxfield',
						label: 'Feeling your breath supporting you',
						labelWidth: '80%',
						labelWrap: true,
						value: ''
					},
					{
						xtype: 'checkboxfield',
						label: 'Feeling your body just as it is',
						labelWidth: '80%',
						labelWrap: true
					},
					{
						xtype: 'checkboxfield',
						label: 'Breathing with everything',
						labelWidth: '80%',
						labelWrap: true
					},
					{
						xtype: 'checkboxfield',
						label: 'Just as it is',
						labelWidth: '80%',
						labelWrap: true
					},
					{
						xtype: 'button',
						action: 'exercise',
						text: 'Done'
					}
				]
			}
		]
	}

});