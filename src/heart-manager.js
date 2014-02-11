var HEART = {
	
	getItem: function(type, key){
		if(type=='local')
			return window.localStorage.getItem(key);
		if(type=='session')
			return window.sessionStorage.getItem(key);
	},
	
	setItem: function(type, key, value){
		if(type=='local')
			return window.localStorage.setItem(key, value);
		if(type=='session')
			return window.sessionStorage.setItem(key, value);
	},
	
	request: function(location, auth, content, succ, fail){
		
		Ext.Ajax.request({
			url: location,
			method: 'POST',
			params: content,
			withCredentials: true,
			useDefaultXhrHeader: false,

			headers: {Authorization: auth, 'Access-Control-Allow-Origin': '*'},

			success: succ,
			failure: fail
		});
	},
	
	toSensocol: function(content, succ, fail){
		var url = 'http://sensocol.spire.io/v1/sensors/'+HEART.uuid;
		var username = '2551135934';
		var password = '4bbdbcd0b64e75ca047aac5e7d44934b';
		var base = Base64.encode(username + ':' + password);
		
		var auth = "Basic " + base;
		
		HEART.request(url, auth, content, succ, fail);	
	},
	
	toSensor: function(content){	
		content.user = HEART.uuid;
		
		succ = function(response){
			response = JSON.stringify(response);
			console.log(response);
		};

		fail = function(response){
			response = JSON.stringify(response);
			console.log(response);
			feeds = Ext.getStore("Feeds");
			store = { data: content };
			store.timestamp=Date.now();
			feeds.add(store);
			feeds.sort("timestamp", 'DESC');		
			feeds.sync();
		};

		if (content.type&&content.type!='HEART') {

			if (isNaN(content.type)) {

				if (HEART.shouldReset()) {

					HEART.qset=0; 
				}
			}
		}

		HEART.toSensocol(content, succ, fail);	
	},

	shouldReset: function(){

		return content.type.indexOf('QuestionSet')<0&&content.type.indexOf("EMIAudio6")<0&&content.type.indexOf("EMIAudio5")<0;
	},
	
	toUser: function(content){
		var url = 'http://app.spire.io/ucsf/api/users';
		var username = 'breathwear';
		var password = 'deepbreath';
	
		var base = Base64.encode(username + ':' + password);
		
		var auth = "Basic " + base;
		
		content.uuid = HEART.uuid;

		user=HEART.clone(content);

		delete user.name;

		callback=function(response){
			response = JSON.stringify(response);
			console.log(response); };
		
		HEART.request(url,auth,user,callback,callback);
		content = JSON.stringify(content);
		HEART.setItem('local','user',content);
	},
	
	sync: function(){
		user = HEART.getItem('local', 'user');
		user =JSON.parse(user);
		if(!user) {return;}
		HEART.toUser(user);
		console.log("sync...");
		feeds=Ext.getStore('Feeds');
		if(feeds.getAllCount()>0){
			feeds.each(function(item, index, length){

				succ = function(response){feeds.removeAt(index);feeds.sync();};
				fail = function(response){console.log(response);};
				var content = item.data.data;
				content.timestamp = item.data.timestamp;
				HEART.toSensocol(content, succ, fail);					
			});	
		}
	},
	
	getQuotes: function(){
		var url = 'http://app.spire.io/ucsf/api/quotes';
		var username = 'breathwear';
		var password = 'deepbreath';
	
		var base = Base64.encode(username + ':' + password);
		
		var auth = "Basic " + base;
		
		succ = function(response){
			store=Ext.getStore('Quotes'); 
			store.removeAll();
			
			quotes = JSON.parse(response.responseText);
			
			for(idx in quotes){
				content = {};
				content.auth=quotes[idx].author;
				content.text=quotes[idx].content;
				store.add(content);
			}
		};
		
		fail = function(response){
			console.log(response);
		};
		
		Ext.Ajax.request({
			url: url,
			method: 'GET',
			params: null,
			withCredentials: true,
			useDefaultXhrHeader: false,
			
			headers: {Authorization: auth, 'Access-Control-Allow-Origin': '*'},
			
			success: succ,
			failure: fail
		});		
		
	},
	
	notNow: function(content){
		var url = 'http://app.spire.io/ucsf/api/notices';
		var username = 'breathwear';
		var password = 'deepbreath';
	
		var base = Base64.encode(username + ':' + password);
		
		var auth = "Basic " + base;
		
		content.uuid=HEART.uuid;
		
		succ = function(response){
			console.log(response);
		};
		
		fail = function(response){
			console.log(response);
		};
		
		HEART.request(url, auth, content, succ, fail);
		
	},

	clone: function(object){
		result = {};
		for(field in object){
			result[field]=object[field]; 
		} return result;
	},

	stressed: function(goola){
		emx = ['EMITensionCheck', 'EMIGeneralMindfulness', 'EMIAudio3', 'EMIAudio4'];
		type = emx[Math.floor(emx.length*Math.random())]; 

		form = Ext.create('HEART.view.'+type);
		form.emxType = type;
		form.goola = goola;

		Ext.Viewport.getActiveItem().setActiveItem(2);
		Ext.Viewport.getActiveItem().getActiveItem().push(form);
	},

	follow: function(type, goola){
		form = Ext.create('HEART.view.'+type);
		form.emxType = type;
		form.goola = goola;

		Ext.Viewport.getActiveItem().setActiveItem(2);
		Ext.Viewport.getActiveItem().getActiveItem().push(form);
	},

	mylog: function(){
		mylog = JSON.parse(HEART.getItem('local', 'mylog'))||{};
		dead = new Date(Date.now()-Date.now()%(1000*60*60*24*7)+(1000*60*60*24*10));
		if(mylog.expire){
			if(Date.now()>mylog.expire)
			{ mylog = {}; mylog.expire = dead; }
		}else{ mylog.expire = dead; }

		mylog = JSON.stringify(mylog);
		HEART.setItem('local', 'mylog', mylog);
		return JSON.parse(HEART.getItem('local','mylog'));
	},
	
	audioCallback: {},
	audioPlay: 'strawberry',
	
	setAudio: function(name, succ, fail){

		audio = HEART.getAudio();

		if(audio!='strawberry'){

			audio.release();}

		url=HEART.audioRoot()+name;
		finished = function(){HEART.audioCallback();};
		audio=new Media(url,finished, finished);
		HEART.audioPlay = audio;
	},

	audioRoot: function(){

		return HEART.getItem('local', 'audioRoot');
	},
	
    getAudio: function(){ 

		return HEART.audioPlay;
	},

	showImage: function(duration, rage){

		var index = Math.ceil(rage*Math.random());

		var img = Ext.create('Ext.Img', {
						src: 'images/images-'+index+'.jpeg',

						height: window.innerHeight,
						width: window.innerWidth,

						fullscreen: true,
						centered: true

					});

		img.setShowAnimation({type: "fadeIn", duration: 4096});

		img.setHideAnimation({type: "fadeOut", duration: 4096});

		img.setStyle({ 'background-color': 'black' });

		img.setCentered(true);

		Ext.Viewport.add(img);

		img.show();

		setTimeout(function(){

			img.hide();

			setTimeout(function() {
				
				img.destroy();

			}, 4096);

		}, duration+4096);

		img.on({tap: function(){

			img.destroy();
		}});
	},
    
    notify: null,
    show_on_load_title: null,
    show_on_load_type: null,
	
	probability: 0.55,

	showTimer: function(){

	},

	NQS: function() {

		var date = new Date();

		if (date.getMonth()==1&&date.getDate()>12&&date.getDate()<20) {

			return false;

		} else if (date.getMonth()==2&&date.getDate()>7&&date.getDate()<23) {

			return false;

		} else {

			return true;
		}
	},

	questions: function(){

		if (HEART.NQS()) {return};

		if (HEART.qset) {

			if (HEART.qstep==1) {

				HEART.qstep = 2;

			} else {

				HEART.qstep = 1;
			}

		} else {

			HEART.qstep = 1;

			HEART.qset = 1+Math.round(Math.random());
		}

		type = 'QuestionSet'+HEART.qset

		form = Ext.create('HEART.view.'+type);

		form.emxType = type;
		form.goola = 'presented';

		if (HEART.qstep==2) {

			if (HEART.qset==1) {

				HEART.qset=2;

			} else {

				HEART.qset=1;
			}
		};

		setTimeout(function(){

			var active = Ext.Viewport.getActiveItem().getActiveItem();

			if (active.id=='homePanel') {

				Ext.Viewport.getActiveItem().setActiveItem(3);	
			} 

			Ext.Viewport.getActiveItem().getActiveItem().push(form);
			
		}, 256);
	}
};
