Ext.define('HEART.controller.MainController', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			settingn: '#settingn'
		},
		control: {
			'#settingn': {
				show: 'onSettingnShow',
				hide: 'onSettingnHide'
			}
		}
	},

	onSettingnShow: function(component, eOpts){
		content = {};
    	content.type = 'HEART';
    	content.action = 'settings-show';
    	HEART.toSensor(content);
	},

	onSettingnHide: function(component, eOpts){
		content = {};
    	content.type = 'HEART';
    	content.action = 'settings-hide';
    	HEART.toSensor(content);
	},

	launch: function() {

		content = {};
    	content.type = 'HEART';
    	content.action = 'heart-launched';
    	HEART.toSensor(content);

    	this.getSettingn().getNavigationBar().hide();

		if(Ext.device.Connection.isOnline())
		{ HEART.getQuotes(); HEART.sync(); }
	}

});