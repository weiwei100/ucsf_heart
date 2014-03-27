function initPNHandler(){
    pushNotification = window.plugins.pushNotification;
    pushNotification.onDeviceReady();
    pushNotification.registerDevice(
        {alert:true, badge:true, sound:true, projectid: "535622621184", appid : "AD5F7-8926E"},
                                    
        function(status){
            var deviceToken = status;
            console.warn('registerDevice: ' + deviceToken);
            HEART.setItem('local', 'deviceToken', deviceToken);
            HEART.uuid = deviceToken;
 
        },
        function(status){                 
            HEART.notify = 'failed to register : ' + JSON.stringify(status);
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

       Ext.Viewport.getActiveItem().setActiveItem(3);
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

function clean(name){

  ids = window.localStorage.getItem(name);
    
  if(!ids) {return;}

  ids = ids.split(',');

  fine=[];

  for (var i = 0; i < ids.length; i++) {

    key = name+'-'+ids[i];

    if (window.localStorage.getItem(key)) {

      fine.push(ids[i]);

    } else {

      //alert(key);
    }

  };

  window.localStorage.setItem(name, fine.toString());
};

function inita(){

    clean('feeds');
    clean('quotes');

    document.addEventListener("deviceready", initPNHandler, true);
    
    document.addEventListener("resume",onResume, false);
    document.addEventListener("pause", onPause, false);

    HEART.uuid = HEART.getItem('local', 'deviceToken');

    HEART.setItem('local', 'audioRoot', 'file:///android_asset/www/audio/');
}
