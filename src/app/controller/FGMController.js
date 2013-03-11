
Ext.define('HEART.controller.FGMController', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			'uploadBtn': 'feelgood #loadBtn',
			'imageList': 'fgmlist list',
			'followUp': 'fgmfollowup',
			'exercises': '#exercises'
		},

		control: {
			uploadBtn: {
				loadsuccess: 'onLoadSuccess',
				loadfailure: 'onLoadFailure'
			},
			imageList: {
				itemtap: 'onListItemTap'
			},
			"button[action=goback]": {
				tap: 'goBack'
			},
			"button[action=rate]": {
				tap: 'rate'
			}
		}
	},
	
	rate: function(button, e, options) {
		var form = button.parent;
		var values = form.getValues();
		var FGMs = Ext.getStore("FGMs")
		var follow = Ext.getStore("Follow");
		var id = follow.getAt(0).id;
		var index = FGMs.findBy( function(record) { return record.id == id } );
		FGMs.getAt(index).set('rate', values.rate);
		FGMs.sync();
		follow.removeAll();
		this.goBack();
	},

	onLoadSuccess: function(dataurl, e) {
		Ext.getStore("FGMs").add( { timestamp: Date.now(), local: dataurl, remote: '' } );
		Ext.getStore("FGMs").sort("timestamp", 'DESC');
		Ext.getStore("FGMs").sync();
	},
	
	onLoadFailure: function(message) {
		console.log(message);
	},
	
	onListItemTap: function(dataview, index, target, record, e, options)  {
		var follow = Ext.Viewport.add({xtype: 'fgmfollowup'});
		Ext.getStore("Follow").add( record.data );
		follow.setRecord(record);
		Ext.Viewport.animateActiveItem(this.getFollowUp(), this.slideRightTransition);
	},
	
	goBack: function() {
		Ext.Viewport.animateActiveItem(this.getExercises(), this.slideLeftTransition);
	},
	
	slideRightTransition: { type: 'slide', direction: 'right' },
	slideLeftTransition: { type: 'slide', direction: 'left' }

});