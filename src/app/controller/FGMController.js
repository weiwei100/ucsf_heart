
Ext.define('HEART.controller.FGMController', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			'uploadBtn': 'feelgood #loadBtn',
			'momentsList': 'fgmlist list',
			'followUp': 'fgmfollowup',
			'exercises': '#exercises'
		},
		control: {
			uploadBtn: {
				loadsuccess: 'onLoadSuccess',
				loadfailure: 'onLoadFailure'
			},
			momentsList: {
				itemtap: 'onListItemTap'
			},
			"button[action=back]": {
				tap: 'back'
			},
			"button[action=rate]": {
				tap: 'rate'
			}
		}
	},

	onLoadSuccess: function(dataurl, e) {
		var FGMs = Ext.getStore("FGMs");
		FGMs.add({ timestamp: Date.now(), local: dataurl });
		FGMs.sort("timestamp", 'DESC');
		FGMs.sync();
	},
	
	onLoadFailure: function(message) {
		console.log(message);
	},
	
	onListItemTap: function(dataview, index, target, record, e, options)  {
		follow = Ext.create('HEART.view.emiFGMFollowUp').setRecord(record);
		this.getFollowUp().child('image').setSrc(record.data.local);
		this.getExercises().push(follow);
	},
	
	back: function() {
		this.getExercises().pop();
	},
	
	rate: function(button, e, options) {
		var form = button.parent;
		var id = form.getRecord().id;
		var FGMs = Ext.getStore("FGMs");
		var index = FGMs.findBy(function(record){ return record.id == id });
		FGMs.getAt(index).set('rate', form.getValues().rate);
		FGMs.sync();
		this.back();
	}

});