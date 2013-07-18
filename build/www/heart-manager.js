var HEART = {
	
	getItem: function(type, key) {
		if(type=='local')
			return window.localStorage.getItem(key);
		if(type=='session')
			return window.sessionStorage.getItem(key);
	},
	
	setItem: function(type, key, value) {
		if(type=='local')
			return window.localStorage.setItem(key, value);
		if(type=='session')
			return window.sessionStorage.setItem(key, value);
	},
	
	request: function(location, auth, content, succ, fail) {
		
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
	
	toSensocol: function(content, succ, fail) {
		var url = 'http://sensocol.bj.brainpage.com/v1/sensors/events';
		var username = '2551135934';
		var password = '4bbdbcd0b64e75ca047aac5e7d44934b';
		var base = Base64.encode(username + ':' + password);
		
		var auth = "Basic " + base;
		
		HEART.request(url, auth, content, succ, fail);	
	},
	
	toSensor: function(content) {	
		content.user = HEART.uuid;
		
		succ = function(response) {
			console.log(response);
		};

		fail = function(response) {
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
	
	toUser: function(content, succ, fail) {
		var url = 'https://app.brainpage.com/ucsf/api/users';
		var username = 'breathwear';
		var password = 'deepbreath';
	
		var base = Base64.encode(username + ':' + password);
		
		var auth = "Basic " + base;
		
		content.uuid = HEART.uuid;
		
		HEART.request(url, auth, content, succ, fail);
	},
	
	sync: function() {
		user = HEART.getItem('local', 'user');
		user =JSON.parse(user);
		if(!user){return;}
		HEART.toUser(user);
		
		feeds=Ext.getStore('Feeds');
		if(feeds.getAllCount()>0){
			feeds.each(function(item, index, length){
				var succ = function(response){feeds.removeAt(index);feeds.sync();};
				var fail = function(response){console.log(response);};
				var content = item.data.data;
				content.timestamp = item.data.timestamp;
				HEART.toSensocol(content, succ, fail);					
			});	
		}
	},
	
	getQuotes: function() {
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
	
	notNow: function(content) {
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
	
	audioCallback: {},
	audioPlay: 'strawberry',
	audioRoot: 'file:///android_asset/www/audios/',
	
	setAudio: function(name, succ, fail) {
		url=HEART.audioRoot+name;
		finished = function(){HEART.audioCallback();};
		audio=new Media(url,finished, finished);
		HEART.audioPlay = audio;
	},
	
    getAudio: function() { 
		return HEART.audioPlay;
	},
	
	probability: 0.55
	
};
