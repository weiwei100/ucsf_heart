function initPNHandler(){
  
    pushNotification = window.plugins.pushNotification;
    pushNotification.onDeviceReady();
    
    pushNotification.registerDevice(
        {alert:true, badge:true, sound:true, projectid: "535622621184", appid : "B7BBF-34717"},
                                    
        function(status){
            var deviceToken = status['deviceToken'];
            console.warn('registerDevice: ' + deviceToken);
            HEART.setItem('local', 'deviceToken', deviceToken);
            HEART.uuid = deviceToken;
        },
        function(status){                 
            console.warn('failed to register : ' + JSON.stringify(status));
        }
    );

    document.addEventListener('push-notification', function(event){
                              
	   var title = event.notification.title;
	   var userData = event.notification.userdata;
          
	   var type = JSON.parse(userData).type;

	   form = Ext.create('HEART.view.' + type);
       form.goola = 'pushwoosh';
	   form.emxType = type;
	   
	   if(type=='QUOTES'){
		  title=title.substring(0,title.length-3);
		  HEART.setItem('session', 'wrapped', title);
	   }

       Ext.Viewport.getActiveItem().setActiveItem(2);
	   Ext.Viewport.getActiveItem().getActiveItem().push(form);

	   content = {};
       content.type = type;
       content.title = title;
       content.action = 'show-pushed';
       HEART.toSensor(content);
	
    });
};

function onPause(){
    content = {};
    content.type = 'HEART';
    content.action = 'heart-paused';
    HEART.toSensor(content);
};

function onResume(){
    content = {};
    content.type = 'HEART';
    content.action = 'heart-resumed';
    HEART.toSensor(content);
};

function init(){
    document.addEventListener("deviceready", initPNHandler, true);
    
    document.addEventListener("resume",onResume, false);
    document.addEventListener("pause", onPause, false);

    HEART.uuid = HEART.getItem('local', 'deviceToken');
    HEART.audioRoot = 'audio/';
}
