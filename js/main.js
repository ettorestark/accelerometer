(function(window, document) {
	var element = document.getElementById('show');
	function accelerometer(e) {
		var x = event.acceleration.x + "m/s";
	    var y = event.acceleration.y + "m/s";
	    var z = event.acceleration.z + "m/s";
	    element.innerHTML = "<b>x: </b>" + x + "<br/><b>y: </b>" + y + "<br/><b>z: </b>" + z;
	}

	window.addEventListener('devicemotion', accelerometer);

})(window, document);