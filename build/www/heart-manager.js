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
	
	toSensocol: function(content, succ, fail){
		var url = 'http://sensocol.bj.brainpage.com/v1/sensors/events'; //+HEART.uuid;
		//var url = 'http://localhost:8881/v1/sensors/' + HEART.uuid;
		var username = '2551135934';
		var password = '4bbdbcd0b64e75ca047aac5e7d44934b';
		var base = Base64.encode(username + ':' + password);
		
		var auth = "Basic " + base;
		HEART.request(url, auth, content, succ, fail);

		
	},
	toSensor: function(content) {

		
		uuid = HEART.uuid;
		content.user = uuid;
		succ = function(response) {
			console.log(response);
			HEART.sync();
		};

		fail = function(response) {
			//Ext.Msg.alert(';(', "<div align='center'>Network Error</div>", Ext.emptyFn);
			feeds = Ext.getStore("Feeds");
			store = {};
			store.data = content;
			store.timestamp = Date.now();
			feeds.add(store);
			feeds.sort("timestamp", 'DESC');		
			feeds.sync();
		};
		HEART.toSensocol(content, succ, fail);
		
	
	},
	
	toUser: function(content, succ, fail) {
		var url = 'https://app.brainpage.com/ucsf/api/users';
		//var url = 'http://localhost:8881/ucsf/api/users';
		var username = 'breathwear';
		var password = 'deepbreath';
	
		var base = Base64.encode(username + ':' + password);
		
		var auth = "Basic " + base;
		console.log("toUser");
		console.log(content);
		HEART.request(url, auth, content, succ, fail);
	},
	
	sync: function() {
		feeds=Ext.getStore('Feeds');
		if(feeds.getAllCount()>0){
			feeds.each(
				function(item, index, length){
					var succ = function(response){feeds.removeAt(index);feeds.sync();};
					var fail = function(response){console.log(response);};
					var content = item.data.data;
					content.timestamp = item.data.timestamp;
					console.log(item);
					console.log(item.data);
					//content.timestamp = item.timestamp;
					HEART.toSensocol(content, succ, fail);					
				});
		user = HEART.getItem('local', 'pnapi');
		user =JSON.parse(user);
		HEART.toUser(user);
		}

	},
	
	uuid: 'dropboxisawesome',
	
	audioRoot: 'file:///android_asset/www/audios/',
	audioPlay: 'strawberry',
	audioCallback: {},
	setAudio: function(name, succ, fail) {
		url=HEART.audioRoot+name;
		var finished = function(){
			HEART.audioCallback();
		};
		audio=new Media(url,finished, finished);
		HEART.audioPlay = audio;
	},
    getAudio: function() {
		return HEART.audioPlay;
	},
	
	probability: 0.55
	
};