function initPushwoosh()
{
    var pushNotification = window.plugins.pushNotification;
    pushNotification.onDeviceReady();
 
    pushNotification.registerDevice({ projectid: "535622621184", appid : /*"F86CD-A3DC5"*/"B7BBF-34717" },
        function(status) {
            var pushToken = status;
            console.warn('push token: ' + pushToken);
        },
        function(status) {
            console.warn(JSON.stringify(['failed to register ', status]));
        }
    );
 
    document.addEventListener('push-notification', function(event) {
	var title = event.notification.title;
	var userData = event.notification.userdata;
 
	if(typeof(userData) != "undefined") {
	  console.warn('user data: ' + JSON.stringify(userData));
	}
	
	var EMXs = Ext.getStore('EMXs');
	var form = Ext.create('HEART.view.emaType1');
	var emx = EMXs.findRecord('type', 'emaType1');
	form.record_data = emx;
	Ext.Viewport.setActiveItem(form);
        //navigator.notification.alert(title);
    });
}

function init() {
    document.addEventListener("deviceready", initPushwoosh, true);
    //rest of the code
}
