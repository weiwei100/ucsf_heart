function initPushwoosh() {
  
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

	//console.log("received title: " + event.notification.title);
	//console.log("received user data: " + event.notification.userdata);

	if(typeof(userData) != "undefined") {
	  console.warn('user data: ' + JSON.stringify(userData));
	}
	
	if(typeof(userData) != "undefined") {
	  console.warn('user data: ' + JSON.stringify(userData));
	}
	
	//navigator.notification.alert(title);
	var type = JSON.parse(userData).type;
	
	form = Ext.create('HEART.view.' + type);
	form.emxType = type;
	form.goola = 'notification';		      
	Ext.Viewport.setActiveItem(form);	
        
    });
}

function init() {
    document.addEventListener("deviceready", initPushwoosh, true);
    HEART.uuid = device.uuid;
}
