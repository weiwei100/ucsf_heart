Ext.define('HEART.controller.MainController', {
	extend: 'Ext.app.Controller',

	config: {
	},

	launch: function() {
		if(Ext.device.Connection.isOnline()){
			HEART.getQuotes();
			HEART.sync();
		}
	}

});