Ext.define('HEART.controller.MainController', {
	extend: 'Ext.app.Controller',

	config: {
	},

	launch: function() {
		HEART.uuid=deice.uuid;
		if(Ext.device.Connection.isOnline()){
			HEART.getQuotes();
			HEART.sync();
		}
	}

});