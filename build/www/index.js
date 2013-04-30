function initPNHandler() {
  
  /*  var pushNotification = window.plugins.pushNotification;
    pushNotification.onDeviceReady();
 
    pushNotification.registerDevice({ projectid: "535622621184", appid : "B7BBF-34717" },
        function(status) {
            var pushToken = status;
            console.warn('push token: ' + pushToken);
        },
        function(status) {
            console.warn(JSON.stringify(['failed to register ', status]));
        }
    );
 */
    document.addEventListener('push-notification', function(event) {
                 //             alert("received data");
	var title = event.notification.aps.title;
	var userData = event.notification.u;
                              console.log("PN");
                              console.log(event.notification.aps.alert);
                              console.log(event.notification.u);

	//console.log("received title: " + event.notification.title);
	//console.log("received user data: " + event.notification.userdata);

	if(typeof(userData) != "undefined") {
	  console.warn('user data: ' + JSON.stringify(userData));
	}
	
	if(typeof(userData) != "undefined") {
	  console.warn('user data: ' + JSON.stringify(userData));
	}
      //                        console.log("H1");
    console.log(userData.type);
	//navigator.notification.alert(title);
	//var type = JSON.parse(userData).type;
      //                        console.log("hello world");
      //                        console.log(type);
	form = Ext.create('HEART.view.' + userData.type);
	form.emxType = userData.type;
	form.goola = 'exercises';
    Ext.Viewport.getActiveItem().setActiveItem(2);
	Ext.Viewport.getActiveItem().getActiveItem().push(form);
                              content = {};
                              content.type = userData.type;
                              content.action = 'show-pushed';
                              HEART.toSensor(content);
                              
        
    });
}

function init() {
/*    document.addEventListener("deviceready", initPushwoosh, true);
    alert("load");
    alert(device.uuid);
    HEART.uuid = device.uuid; */
}
