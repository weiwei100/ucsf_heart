function initPNHandler() {
  
    var pushNotification = window.plugins.pushNotification;
    pushNotification.onDeviceReady();
 
  /*  pushNotification.registerDevice(
        { projectid: "535622621184", appid : "B7BBF-34717" },
        function(status) {
            var pushToken = status;
            console.warn('push token: ' + pushToken);
        },
        function(status) {
            console.warn(JSON.stringify(['failed to register ', status]));
        }
    );*/
    
    pushNotification.registerDevice({alert:true, badge:true, sound:true, projectid: "535622621184", appid : "B7BBF-34717"},
                                    function(status) {
                                    var deviceToken = status['deviceToken'];
                                    console.warn('registerDevice: ' + deviceToken);
                                    HEART.setItem('local', 'deviceToken', deviceToken);
                                    HEART.uuid = deviceToken;
                                    },
                                    function(status) {
                                    
                                    console.warn('failed to register : ' + JSON.stringify(status));
                                    navigator.notification.alert(JSON.stringify(['failed to register ', status]));
                                    //  HEART.uuid = device.uuid;
                                    }
                                    );

    document.addEventListener('push-notification', function(event) {
	//     var title = event.notification.aps.title;
	//     var userData = event.notification.u;
   // navigator.notification.alert(event.notification.title);
                              
	var title = event.notification.title;
	var userData = event.notification.userdata;
          
	var type = JSON.parse(userData).type;

	form = Ext.create('HEART.view.' + type);
	form.emxType = type;
	form.goola = 'pushwoosh';
	
	if(type=='QUOTES'){
		title=title.substring(0,title.length-3);
		HEART.goola='pushwoosh';
		form.child('#content').child('#quote').setHtml(title);
	}
    Ext.Viewport.getActiveItem().setActiveItem(2);
	Ext.Viewport.getActiveItem().getActiveItem().push(form);
	content = {};
    content.type = type;
                              content.title = title;
    content.action = 'show-pushed';
    HEART.toSensor(content);
	
    });
}

function init() {
    document.addEventListener("deviceready", initPNHandler, true);
    
    HEART.uuid = HEART.getItem('local', 'deviceToken');
    HEART.audioRoot = 'audio/';
    
   // HEART.uuid = device.uuid;
}
