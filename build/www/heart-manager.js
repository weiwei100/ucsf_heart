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
	
	toSensor: function(content, succ, fail) {
		var url = 'http://sensocol.bj.brainpage.com/v1/sensors/'+HEART.uuid;
	
		var username = '2551135934';
		var password = '4bbdbcd0b64e75ca047aac5e7d44934b';
		var base = Base64.encode(username + ':' + password);
		
		var auth = "Basic " + base;
		
		HEART.request(url, auth, content, succ, fail);
	
	},
	
	toUser: function(content, succ, fail) {
		var url = 'http://app.brainpage.com/ucsf/api/users';
		
		var username = 'breathwear';
		var password = 'deepbreath';
	
		var base = Base64.encode(username + ':' + password);
		
		var auth = "Basic " + base;	
	
		HEART.request(url, auth, content, succ, fail);
	},
	
	sync: function() {
		feeds=Ext.getStore('Feeds');
		if(feeds.getAllCount()>0){
			feeds.each(
				function(item, index, length){
					var succ = function(response){feeds.removeAt(index);feeds.sync();};
					var fail = function(response){console.log(response)};
					var content = item.data.data;
					content.timestamp = item.data.timestamp;
					HEART.toSensor(content, succ, fail);					
				});
		}
		user = HEART.getItem('local', 'pnapi');
		user =JSON.parse(user);
		HEART.toUser(user);
	},
	
	uuid: 'dropboxisawesome',
	
	audioRoot: 'file:///android_asset/www/audios/',
	audioPlay: 'strawberry',
	audioCallback: {},
	setAudio: function(name, succ, fail) {
	  url=HEART.audioRoot+name;
	  audio=new Media(url,succ,fail);
	  HEART.audioPlay = audio;
	},
	
	getAudio: function() {
	  return HEART.audioPlay;
	},
	
	probability: 0.55
	
}