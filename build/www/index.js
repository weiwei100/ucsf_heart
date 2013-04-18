function initPushwoosh()
{

	AJAX.uuid = device.uuid;

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

	var type = JSON.parse(userData).type;

	if(type.indexOf('Type')>0){
	  if(type.indexOf('N')>0){
	    var idx=Math.ceil(5*Math.random());
	    type=type.replace('N', idx);
	  }
	}else if(type.indexOf('Audio')>0){
	  if(type.indexOf('N')>0){
	    var idx=Math.ceil(3*Math.random());
	    type=type.replace('N', idx);
	  }
	}else if(type.indexOf('Reflection')>0){
	  if(type.indexOf('N')>0){
	     var idx=Math.ceil(6*Math.random());
	     type=type.replace('N', idx);
	  }
	}else if(type.indexOf('Reminder')>0){
	  if(type.indexOf('N')>0){
	     var idx=Math.ceil(2*Math.random());
	     type=type.replace('N', idx);
	  }
	}
	
	var EMXs = Ext.getStore('EMXs');
	var form = Ext.create('HEART.view.' + type);
	var emx = EMXs.findRecord('type', type);
	form.record_data = emx;
	form.goola = 'notification';		      
	Ext.Viewport.setActiveItem(form);
	
        //navigator.notification.alert(title);
    });
}

function init() {
    document.addEventListener("deviceready", initPushwoosh, true);
    //rest of the code
}
