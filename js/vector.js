var Vector = (function() {
	var add = function( a, b ) {
		return { 
			x: a.x + b.x, 
			y: a.y + b.y 
		}	
	}

	var sub = function( a, b ) {
		return {
			x: a.x - b.x,
			y: a.y - b.y
		}
	}

	var scale = function( a, s ) {
		return {
			x: a.x * s,
			y: a.y * s	
		}
	}

	var perp = function( a ) {
		return {
			x: -a.y,
			y: a.x
		}	
	}
});
