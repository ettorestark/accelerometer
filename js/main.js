(function(window, document) {
	var x = document.getElementById('x');
	var y = document.getElementById('y');
	var z = document.getElementById('z');
	function accelerometer(e) {
		var xC = Math.round(event.accelerationIncludingGravity.x*100)/100;
	    var yC = Math.round(event.accelerationIncludingGravity.y*100)/100;
	    var zC = Math.round(event.accelerationIncludingGravity.z*100)/100;
	    x.innerHTML = 'X: ' + xC;
	    y.innerHTML = 'Y: ' + yC;
	    z.innerHTML = 'Z: ' + zC;
	}

	window.addEventListener('devicemotion', accelerometer);

})(window, document);