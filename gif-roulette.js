(function() {
	var imgs, clientId;

	initialize();
	gifRoulette();

	function initialize() {
		imgs = document.getElementsByTagName('img');
		clientId = 'e454899ed9b0ad8';
	}

	function gifRoulette() {
		getImgurs(handleImgurs);
	}

	function getImgurs(callback) {
		var xhReq = new XMLHttpRequest();
		xhReq.open("GET", randomPageUrl(), false);
		xhReq.setRequestHeader('Authorization', 'Client-ID ' + clientId);
		xhReq.send(null);
		var serverResponse = xhReq.responseText;
		callback(serverResponse); // Shows "15"
	}

	function handleImgurs(response) {
		var imgurs = JSON.parse(response).data;
		var numImgurs = imgurs.length;

		for (var index = 0; index < imgs.length; index++) {
			var img = imgs[index];
			var width = img.clientWidth;
			var height = img.clientHeight;
			var imgurUrl = randomImgur();
			img.width = width;
			img.height = height;
			img.src = imgurUrl;
		}

		function randomImgur() {
			var index = Math.floor(Math.random() * numImgurs);
			return imgurs[index].link;
		}
	}

	function randomPageUrl() {
		return "https://api.imgur.com/3/gallery/random/random/" + randomPageNumber();
	}

	function randomPageNumber(seed) {
		return Math.floor(Math.random() * (seed || 100000));
	}
})()
