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
		var url = 'http://sensocol.bj.brainpage.com/v1/sensors/events';
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
		HEART.toSensocol(content, succ, fail);	
	},
	
	toUser: function(content){
		var url = 'https://app.brainpage.com/ucsf/api/users';
		var username = 'breathwear';
		var password = 'deepbreath';
	
		var base = Base64.encode(username + ':' + password);
		
		var auth = "Basic " + base;
		
		content.uuid = HEART.uuid;

		user=HEART.clone(content);

		delete user.name;

		callback=function(response){
			response = JSON.stringify(response);
			console.log(response);};
		
		HEART.request(url,auth,user,callback);
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
		var url = 'http://app.brainpage.com/ucsf/api/quotes';
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
		var url = 'http://app.brainpage.com/ucsf/api/notices';
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
	audioRoot: 'file:///android_asset/www/audio/',
	
	setAudio: function(name, succ, fail){
		url=HEART.audioRoot+name;
		finished = function(){HEART.audioCallback();};
		audio=new Media(url,finished, finished);
		HEART.audioPlay = audio;
	},
	
    getAudio: function(){ 
		return HEART.audioPlay;
	},
    
    notify: 't',
    show_on_load_title: null,
    show_on_load_type: null,
	
	probability: 0.55
	
};
