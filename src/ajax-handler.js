var AJAX = {

	toSensor: function(content, succ, fail) {
	
		var username = '2551135934';
		var password = '4bbdbcd0b64e75ca047aac5e7d44934b';
		var base = Base64.encode(username + ':' + password);
		
		var auth = "Basic " + base;
	
		Ext.Ajax.request({
			method: 'POST',
			withCredentials: true,
			useDefaultXhrHeader: false,

			url: 'http://sensocol.bj.brainpage.com/v1/sensors/channels',
			headers: {Authorization: auth, 'Access-Control-Allow-Origin': '*'},

			params: content,
			success: succ,
			failure: fail
		});
	
	},
	
	probability: 0.55,
	
	sync: function() {
		var feeds = Ext.getStore('Feeds');
		if(feeds.getAllCount()>0){
			feeds.each(
				function(item, index, length){
					var succ = function(response){console.log(response); feeds.removeAt(index); feeds.sync();};
					var fail = function(response){console.log(response)};
					var content = item.data.data;
					content.timestamp = item.data.timestamp;
					AJAX.toSensor(content, succ, fail);					
				}
			);
		}
	}

}